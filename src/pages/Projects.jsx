import { Link } from "react-router-dom";
import { projects } from "../data/content";
import Tag from "../components/Tag";

function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      aria-label={`View ${project.name} case study`}
      className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <article className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-6 transition duration-200 group-hover:-translate-y-0.5 group-hover:border-[var(--accent)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,.24)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            {project.eyebrow && <p className="mb-1 font-mono-tag text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">{project.eyebrow}</p>}
            <h2 className="text-lg font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">{project.name}</h2>
          </div>
          <span className="font-mono-tag text-xs text-[var(--text-dim)]">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p data-scroll-tone className="text-sm leading-relaxed text-[var(--text-dim)]">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => <Tag key={tech}>{tech}</Tag>)}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4 font-mono-tag text-xs">
          <span className="text-[var(--text-dim)]">Case study + architecture</span>
          <span className="text-[var(--accent)] transition-transform group-hover:translate-x-1">View →</span>
        </div>
      </article>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--text)]">Projects</h1>
        <p data-scroll-tone className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">Selected systems across AI agents, cloud infrastructure, full-stack products, and experimental builds.</p>
      </div>
      {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      <p data-scroll-tone className="font-mono-tag text-sm text-[var(--text-dim)]">more building in progress. check back soon (or just watch the github).</p>
    </div>
  );
}
