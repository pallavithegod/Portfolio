import { useEffect, useRef, useState } from "react";

const SIZE = 52;
const WALK_SPEED = 1.4;
const FLEE_SPEED = 3.6;
const FLEE_RADIUS = 100;
const PHRASES = ["mrow~", "purr...", "?", "mew!"];

function randomPoint() {
  return {
    x: Math.random() * (window.innerWidth - SIZE),
    y: Math.random() * (window.innerHeight - SIZE),
  };
}

function CatSvg({ pose }) {
  const sleeping = pose === "sleep";
  return (
    <svg viewBox="0 0 64 64" width={SIZE} height={SIZE} fill="none">
      {/* tail */}
      <path
        d="M46 46 Q60 44 56 30 Q54 22 46 24"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M46 46 Q60 44 56 30 Q54 22 46 24"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* body */}
      <ellipse cx="32" cy="44" rx="18" ry="14" fill="#0a0a0a" stroke="#fff" strokeWidth="2.5" />
      {/* head */}
      <circle cx="32" cy="22" r="15" fill="#0a0a0a" stroke="#fff" strokeWidth="2.5" />
      {/* ears */}
      <path d="M19 14 L13 2 L25 10 Z" fill="#0a0a0a" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M45 14 L51 2 L39 10 Z" fill="#0a0a0a" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
      {/* paws */}
      <ellipse cx="22" cy="56" rx="4" ry="3" fill="#0a0a0a" stroke="#fff" strokeWidth="2" />
      <ellipse cx="42" cy="56" rx="4" ry="3" fill="#0a0a0a" stroke="#fff" strokeWidth="2" />

      {sleeping ? (
        <>
          <path d="M24 22 q4 3 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M36 22 q4 3 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
          <text x="46" y="8" fontSize="10" fill="var(--accent)" className="cat-zzz">
            z
          </text>
        </>
      ) : (
        <>
          <circle cx="26" cy="21" r="3.4" fill="#fff" />
          <circle cx="38" cy="21" r="3.4" fill="#fff" />
          <circle cx="26" cy="21" r="1.4" fill="#0a0a0a" className="cat-pupil" />
          <circle cx="38" cy="21" r="1.4" fill="#0a0a0a" className="cat-pupil" />
        </>
      )}
      <path d="M30 28 L34 28 L32 30 Z" fill="var(--accent)" />
    </svg>
  );
}

export default function RoamingCat() {
  const elRef = useRef(null);
  const pos = useRef(randomPoint());
  const target = useRef(randomPoint());
  const facing = useRef(1);
  const mode = useRef("walk"); // "walk" | "idle" | "flee"
  const restPose = useRef("sit"); // "sit" | "sleep" — which pose to show while idle
  const idleUntil = useRef(0);
  const mouse = useRef({ x: -9999, y: -9999 });
  const [speech, setSpeech] = useState(null);
  const [pose, setPose] = useState("walk");

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    let prevPose = "walk";
    const tick = () => {
      const now = performance.now();
      const p = pos.current;
      const catCenter = { x: p.x + SIZE / 2, y: p.y + SIZE / 2 };
      const dxMouse = catCenter.x - mouse.current.x;
      const dyMouse = catCenter.y - mouse.current.y;
      const mouseDist = Math.hypot(dxMouse, dyMouse);

      if (mouseDist < FLEE_RADIUS && mode.current !== "flee") {
        mode.current = "flee";
        const angle = Math.atan2(dyMouse, dxMouse);
        target.current = {
          x: Math.min(Math.max(catCenter.x + Math.cos(angle) * 220, 0), window.innerWidth - SIZE),
          y: Math.min(Math.max(catCenter.y + Math.sin(angle) * 220, 0), window.innerHeight - SIZE),
        };
      }

      if (mode.current === "idle") {
        if (now > idleUntil.current) {
          mode.current = "walk";
          target.current = randomPoint();
        }
      } else {
        const dx = target.current.x - p.x;
        const dy = target.current.y - p.y;
        const dist = Math.hypot(dx, dy);
        const speed = mode.current === "flee" ? FLEE_SPEED : WALK_SPEED;

        if (dist < 4) {
          if (mode.current === "flee") {
            mode.current = "walk";
            target.current = randomPoint();
          } else {
            mode.current = "idle";
            const nap = Math.random() < 0.35;
            restPose.current = nap ? "sleep" : "sit";
            idleUntil.current = now + (nap ? 4000 + Math.random() * 4000 : 1200 + Math.random() * 1800);
          }
        } else {
          p.x += (dx / dist) * speed;
          p.y += (dy / dist) * speed;
          if (Math.abs(dx) > 2) facing.current = dx < 0 ? -1 : 1;
        }
      }

      const nextPose = mode.current === "idle" ? restPose.current : "walk";
      if (nextPose !== prevPose) {
        prevPose = nextPose;
        setPose(nextPose);
      }

      if (elRef.current) {
        elRef.current.style.transform = `translate(${p.x}px, ${p.y}px) scaleX(${facing.current})`;
        elRef.current.dataset.mode = mode.current === "flee" ? "flee" : mode.current === "idle" ? "idle" : "walk";
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleClick = () => {
    setSpeech(PHRASES[Math.floor(Math.random() * PHRASES.length)]);
    window.clearTimeout(handleClick._t);
    handleClick._t = window.setTimeout(() => setSpeech(null), 1300);

    if (mode.current === "idle") {
      mode.current = "walk";
      target.current = randomPoint();
      setPose("walk");
    }
  };

  return (
    <div
      ref={elRef}
      onClick={handleClick}
      className="roaming-cat fixed top-0 left-0 z-40 cursor-pointer select-none"
      style={{ width: SIZE, height: SIZE }}
      title="click me"
    >
      {speech && (
        <span className="font-mono-tag absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--bg-raised)] px-2 py-0.5 text-[10px] text-[var(--text)]">
          {speech}
        </span>
      )}
      <CatSvg pose={pose} />
    </div>
  );
}
