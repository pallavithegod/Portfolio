export default function Tag({ children }) {
  return (
    <span className="font-mono-tag rounded-full border border-[var(--border)] bg-[var(--bg-raised)] px-2.5 py-0.5 text-[11px] text-[var(--text-dim)]">
      {children}
    </span>
  );
}
