import { experience } from "../data/content";

export default function Experience() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-semibold text-[var(--text)]">Experience</h1>
      {experience.map((job) => (
        <article key={job.role + job.org} className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-6">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-medium text-[var(--text)]">{job.role}</h2>
            {job.period && <span className="font-mono-tag text-xs text-[var(--text-dim)]">{job.period}</span>}
          </div>
          <p className="mb-3 text-sm text-[var(--accent)]">
            {job.org} · {job.location}
          </p>
          <ul className="flex flex-col gap-1.5">
            {job.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--text-dim)]">
                <span className="text-[var(--accent)]">–</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
