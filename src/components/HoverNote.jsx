export default function HoverNote({ children, note }) {
  return (
    <span className="group relative inline-block">
      <span
        tabIndex={0}
        className="cursor-help underline decoration-[var(--accent)] decoration-dotted underline-offset-4 outline-none transition-colors hover:text-[var(--text)] focus-visible:text-[var(--text)]"
      >
        {children}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-2 w-max max-w-60 -translate-x-1/2 translate-y-1 rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] px-3 py-2 text-center text-xs leading-relaxed text-[var(--text)] opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        {note}
      </span>
    </span>
  );
}
