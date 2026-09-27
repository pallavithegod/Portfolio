export default function ArchitectureDiagram({ stages, projectName }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-4 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono-tag text-xs uppercase tracking-[0.18em] text-[var(--accent)]">System flow</p>
          <h2 className="mt-1 text-lg font-medium text-[var(--text)]">{projectName} architecture</h2>
        </div>
        <span className="hidden font-mono-tag text-[10px] uppercase tracking-widest text-[var(--text-dim)] sm:block">left to right</span>
      </div>

      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
              <p className="font-mono-tag text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">{stage.label}</p>
              <div className="mt-3 flex flex-col gap-2">
                {stage.nodes.map((node) => (
                  <div key={node} className="rounded-md bg-[var(--bg-raised)] px-3 py-2 text-xs text-[var(--text)]">
                    {node}
                  </div>
                ))}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div aria-hidden="true" className="flex h-5 items-center justify-center text-[var(--accent)] md:h-auto md:w-4 md:shrink-0">
                <span className="rotate-90 font-mono-tag text-lg md:rotate-0">→</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
