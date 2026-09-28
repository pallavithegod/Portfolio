import { useEffect, useRef, useState } from "react";
import { useMusicPlayer } from "./musicPlayerContext";

const TOTAL_NOTES = 200;
const NOTE_SPACING = 36;
const STAFF_LINES = [38, 48, 58, 68, 78, 108, 118, 128, 138, 148];

function generateNotes() {
  const trebleYs = [30, 34, 37, 43, 46, 48, 51, 52, 56, 60, 64];
  const bassYs = [114, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 142];

  return Array.from({ length: TOTAL_NOTES }, (_, index) => ({
    id: index,
    x: 40 + index * NOTE_SPACING,
    trebleY: trebleYs[index % trebleYs.length],
    bassY: bassYs[index % bassYs.length],
  }));
}

const NOTES = generateNotes();
const PANEL_WIDTH = NOTES[NOTES.length - 1].x + 120;
const TRACK_WIDTH = PANEL_WIDTH * 2;

export default function PianoBanner() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const progressRef = useRef(0);
  const { soundEnabled, toggleSound, getVisualProgress } = useMusicPlayer();
  const [activeNote, setActiveNote] = useState({ panel: 0, index: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 640px)");

    const updatePreferences = () => {
      setReduceMotion(motionQuery.matches);
      setIsMobile(mobileQuery.matches);
    };

    updatePreferences();
    motionQuery.addEventListener("change", updatePreferences);
    mobileQuery.addEventListener("change", updatePreferences);

    return () => {
      motionQuery.removeEventListener("change", updatePreferences);
      mobileQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const updateCenterHighlight = (shift) => {
      const centerPosition = shift + viewport.clientWidth / 2;
      const panel = Math.min(1, Math.floor(centerPosition / PANEL_WIDTH));
      const localPosition = centerPosition - panel * PANEL_WIDTH;
      const index = Math.max(
        0,
        Math.min(NOTES.length - 1, Math.round((localPosition - 40) / NOTE_SPACING)),
      );

      setActiveNote((current) =>
        current.panel === panel && current.index === index
          ? current
          : { panel, index },
      );
    };

    const renderFrame = () => {
      const progress = getVisualProgress();
      progressRef.current = progress;

      if (reduceMotion) {
        track.style.transform = "translate3d(0, 0, 0)";
        updateCenterHighlight(0);
      } else {
        const shift = progress * PANEL_WIDTH;
        track.style.transform = `translate3d(${-shift}px, 0, 0)`;
        updateCenterHighlight(shift);
      }

      animationFrameRef.current = window.requestAnimationFrame(renderFrame);
    };

    animationFrameRef.current = window.requestAnimationFrame(renderFrame);
    const resizeObserver = new ResizeObserver(() => {
      const shift = reduceMotion ? 0 : progressRef.current * PANEL_WIDTH;
      updateCenterHighlight(shift);
    });
    resizeObserver.observe(viewport);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      resizeObserver.disconnect();
    };
  }, [getVisualProgress, reduceMotion]);

  const renderPanel = (panelIndex) => {
    const offset = panelIndex * PANEL_WIDTH;

    return (
      <g key={panelIndex} transform={`translate(${offset} 0)`}>
        {NOTES.filter((_, index) => index % 4 === 0).map((note) => (
          <g key={`bar-${panelIndex}-${note.id}`}>
            <line x1={note.x} x2={note.x} y1="38" y2="78" className="music-bar-line" />
            <line x1={note.x} x2={note.x} y1="108" y2="148" className="music-bar-line" />
          </g>
        ))}

        {NOTES.map((note, index) => {
          const isActive =
            panelIndex === activeNote.panel && Math.abs(index - activeNote.index) <= 1;
          const hideTrebleOnMobile = isMobile && index % 2 === 1;

          return (
            <g key={`${panelIndex}-${note.id}`}>
              {!hideTrebleOnMobile && (
                <g className={`music-note ${isActive ? "music-note-active" : ""}`}>
                  <ellipse cx={note.x} cy={note.trebleY} rx="5.4" ry="3.9" transform={`rotate(-18 ${note.x} ${note.trebleY})`} />
                  <line x1={note.x + 4.7} x2={note.x + 4.7} y1={note.trebleY - 1} y2={note.trebleY - 24} />
                </g>
              )}

              <g className={`music-note music-bass-note ${isActive ? "music-note-active" : ""}`}>
                <ellipse cx={note.x} cy={note.bassY} rx="5.4" ry="3.9" transform={`rotate(-18 ${note.x} ${note.bassY})`} />
                <ellipse cx={note.x} cy={note.bassY - 7} rx="5.4" ry="3.9" transform={`rotate(-18 ${note.x} ${note.bassY - 7})`} />
                <line x1={note.x + 4.7} x2={note.x + 4.7} y1={note.bassY} y2={note.bassY - 24} />
              </g>
            </g>
          );
        })}
      </g>
    );
  };

  return (
    <div className="relative isolate h-full w-full overflow-hidden bg-[linear-gradient(135deg,#111114_0%,#1d1411_48%,#0d0d10_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_45%,rgba(232,130,60,.12),transparent_38%)]" />

      <button
        type="button"
        onClick={toggleSound}
        aria-label={soundEnabled ? "Turn sound off" : "Turn sound on"}
        aria-pressed={soundEnabled}
        className="pointer-events-auto absolute right-3 top-3 z-40 flex h-8 items-center gap-1.5 rounded-full bg-black/25 px-2.5 font-mono-tag text-[10px] text-[var(--text)] backdrop-blur transition hover:bg-black/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M5 9v6h4l5 4V5L9 9H5Z" />
          {soundEnabled ? (
            <path d="M17 9c1.3 1.5 1.3 4.5 0 6M19.5 6.5c3 3 3 8 0 11" />
          ) : (
            <path d="m17 9 5 6m0-6-5 6" />
          )}
        </svg>
        <span>{soundEnabled ? "on" : "off"}</span>
      </button>

      <svg viewBox="0 0 960 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-10 h-full w-full" aria-hidden="true">
        {STAFF_LINES.map((y) => (
          <line key={y} x1="0" x2="960" y1={y} y2={y} className="music-staff-line" />
        ))}
      </svg>

      <div ref={viewportRef} className="absolute inset-y-0 left-16 right-0 z-10 overflow-hidden">
        <div
          ref={trackRef}
          className="absolute inset-y-0 left-0 h-full will-change-transform"
          style={{ width: TRACK_WIDTH, transform: "translate3d(0, 0, 0)" }}
        >
          <svg viewBox={`0 0 ${TRACK_WIDTH} 180`} width={TRACK_WIDTH} height="100%" className="h-full" preserveAspectRatio="none" aria-hidden="true">
            {renderPanel(0)}
            {renderPanel(1)}
          </svg>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16">
        <svg viewBox="0 0 64 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-16" aria-hidden="true">
          <text x="14" y="76" className="music-clef">𝄞</text>
          <text x="16" y="145" className="music-clef music-clef-bass">𝄢</text>
        </svg>
      </div>
    </div>
  );
}
