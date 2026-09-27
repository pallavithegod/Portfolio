import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/content";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Tag from "../components/Tag";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <article className="flex flex-col gap-10">
      <header>
        <Link to="/projects" className="font-mono-tag text-xs text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]">← All projects</Link>
        {project.eyebrow && <p className="mt-7 font-mono-tag text-xs uppercase tracking-[0.18em] text-[var(--accent)]">{project.eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{project.name}</h1>
        <p data-scroll-tone className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-dim)]">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-lg bg-[var(--accent)] px-4 py-2 font-mono-tag text-xs font-medium text-[#160d08] transition hover:brightness-110">GitHub ↗</a>
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] px-4 py-2 font-mono-tag text-xs text-[var(--text)] transition hover:border-[var(--accent)]">Live project ↗</a>}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
      </header>

      <section>
        <p className="mb-2 font-mono-tag text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Overview</p>
        <h2 className="text-xl font-semibold text-[var(--text)]">What it does</h2>
        <p data-scroll-tone className="mt-4 leading-8 text-[var(--text-dim)]">{project.description}</p>
      </section>

      <section>
        <p className="mb-2 font-mono-tag text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Highlights</p>
        <h2 className="text-xl font-semibold text-[var(--text)]">Under the hood</h2>
        <ul className="mt-4 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {project.bullets.map((bullet, index) => (
            <li key={bullet} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
              <span className="font-mono-tag text-xs text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
              <span data-scroll-tone className="text-sm leading-relaxed text-[var(--text-dim)]">{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      <ArchitectureDiagram stages={project.architecture} projectName={project.name} />
    </article>
  );
}
