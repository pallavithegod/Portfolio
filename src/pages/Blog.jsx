export default function Blog() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[var(--text)]">Blog</h1>
      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-6">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-[var(--accent)]">First post in progress</p>
        <p className="mt-3 text-lg font-medium text-[var(--text)]">Ideas are brewing. Words are loading.</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">
          I'm turning experiments, lessons, and late-night debugging sessions into something worth reading. Coming soon.
        </p>
      </div>
    </div>
  );
}
