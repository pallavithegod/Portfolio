import { useEffect, useRef, useState } from "react";

const STEP_MS = 680;
const MELODY = [
  { frequency: 293.66, y: 60 },
  { frequency: 349.23, y: 52 },
  { frequency: 440.0, y: 43 },
  { frequency: 523.25, y: 34 },
  { frequency: 493.88, y: 37 },
  { frequency: 392.0, y: 48 },
  { frequency: 329.63, y: 56 },
  { frequency: 369.99, y: 51 },
  { frequency: 440.0, y: 43 },
  { frequency: 587.33, y: 30 },
  { frequency: 523.25, y: 34 },
  { frequency: 440.0, y: 43 },
  { frequency: 392.0, y: 48 },
  { frequency: 329.63, y: 56 },
  { frequency: 293.66, y: 60 },
  { frequency: 261.63, y: 64 },
];

const BASS = [
  [73.42, 110.0],
  [87.31, 130.81],
  [65.41, 98.0],
  [82.41, 123.47],
  [73.42, 110.0],
  [98.0, 146.83],
  [82.41, 123.47],
  [65.41, 98.0],
];

function createTone(context, frequency, duration, volume) {
  const now = context.currentTime;
  const gain = context.createGain();
  const fundamental = context.createOscillator();
  const overtone = context.createOscillator();
  const overtoneGain = context.createGain();

  fundamental.type = "triangle";
  fundamental.frequency.value = frequency;
  overtone.type = "sine";
  overtone.frequency.value = frequency * 2;
  overtoneGain.gain.value = 0.18;

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  fundamental.connect(gain);
  overtone.connect(overtoneGain);
  overtoneGain.connect(gain);
  gain.connect(context.destination);
  fundamental.start(now);
  overtone.start(now);
  fundamental.stop(now + duration + 0.05);
  overtone.stop(now + duration + 0.05);
}

function Staff({ activeStep }) {
  return (
    <svg viewBox="0 0 960 180" className="music-sheet-panel h-full w-[960px] shrink-0" aria-hidden="true">
      {[38, 48, 58, 68, 78, 108, 118, 128, 138, 148].map((y) => (
        <line key={y} x1="0" x2="960" y1={y} y2={y} className="music-staff-line" />
      ))}
      {[150, 350, 550, 750, 950].map((x) => (
        <g key={x}>
          <line x1={x} x2={x} y1="38" y2="78" className="music-bar-line" />
          <line x1={x} x2={x} y1="108" y2="148" className="music-bar-line" />
        </g>
      ))}
      <text x="18" y="76" className="music-clef">𝄞</text>
      <text x="20" y="145" className="music-clef music-clef-bass">𝄢</text>

      {MELODY.map((note, index) => {
        const x = 92 + index * 51;
        const active = activeStep === index;
        return (
          <g key={`${x}-${note.y}`} className={`music-note ${index % 2 ? "music-note-optional" : ""} ${active ? "music-note-active" : ""}`}>
            <ellipse cx={x} cy={note.y} rx="6.5" ry="4.5" transform={`rotate(-18 ${x} ${note.y})`} />
            <line x1={x + 5.5} x2={x + 5.5} y1={note.y - 1} y2={note.y - 28} />
          </g>
        );
      })}

      {BASS.map((_, index) => {
        const x = 118 + index * 102;
        const y = [132, 124, 139, 127, 132, 119, 127, 139][index];
        const active = activeStep === index * 2 || activeStep === index * 2 + 1;
        return (
          <g key={`${x}-${y}`} className={`music-note music-bass-note ${active ? "music-note-active" : ""}`}>
            <ellipse cx={x} cy={y} rx="6.5" ry="4.5" transform={`rotate(-18 ${x} ${y})`} />
            <ellipse cx={x} cy={y - 8} rx="6.5" ry="4.5" transform={`rotate(-18 ${x} ${y - 8})`} />
            <line x1={x + 5.5} x2={x + 5.5} y1={y} y2={y - 29} />
          </g>
        );
      })}
    </svg>
  );
}

export default function PianoBanner() {
  const contextRef = useRef(null);
  const soundEnabledRef = useRef(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
    if (!soundEnabled) {
      setActiveStep(-1);
      return undefined;
    }

    let step = 0;
    const playStep = () => {
      if (document.hidden) return;
      const context = contextRef.current;
      if (!context || context.state !== "running") return;
      setActiveStep(step);
      createTone(context, MELODY[step].frequency, 0.75, 0.026);
      if (step % 2 === 0) {
        BASS[step / 2].forEach((frequency) => createTone(context, frequency, 1.15, 0.011));
      }
      step = (step + 1) % MELODY.length;
    };

    playStep();
    const timer = window.setInterval(playStep, STEP_MS);
    return () => window.clearInterval(timer);
  }, [soundEnabled]);

  useEffect(() => {
    const handleVisibility = async () => {
      const context = contextRef.current;
      if (!context) return;
      if (document.hidden) {
        await context.suspend();
      } else if (soundEnabledRef.current) {
        await context.resume();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      contextRef.current?.close();
    };
  }, []);

  const toggleSound = async () => {
    if (!contextRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      contextRef.current = new AudioContextClass();
    }
    if (contextRef.current.state === "suspended") await contextRef.current.resume();
    setSoundEnabled((enabled) => !enabled);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(135deg,#111114_0%,#1d1411_48%,#0d0d10_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_45%,rgba(232,130,60,.12),transparent_38%)]" />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={soundEnabled ? "Turn piano sound off" : "Turn piano sound on"}
        aria-pressed={soundEnabled}
        className="absolute right-3 top-3 z-30 flex h-8 items-center gap-1.5 rounded-full bg-black/25 px-2.5 font-mono-tag text-[10px] text-[var(--text)] backdrop-blur transition hover:bg-black/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M5 9v6h4l5 4V5L9 9H5Z" />
          {soundEnabled ? <path d="M17 9c1.3 1.5 1.3 4.5 0 6M19.5 6.5c3 3 3 8 0 11" /> : <path d="m17 9 5 6m0-6-5 6" />}
        </svg>
        {soundEnabled ? "on" : "off"}
      </button>
      <div className="music-sheet-track absolute inset-y-0 left-0 flex w-max items-center">
        <Staff activeStep={soundEnabled ? activeStep : -1} />
        <Staff activeStep={soundEnabled ? activeStep : -1} />
      </div>
    </div>
  );
}
