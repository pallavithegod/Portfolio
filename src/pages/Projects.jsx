import { useState, useEffect } from "react";
import { projects } from "../data/content";
import Tag from "../components/Tag";

function ProjectCard({ project }) {
  const [liveStars, setLiveStars] = useState(project.stars ?? null);

  useEffect(() => {
    if (!project.stars || !project.repo) return;
    const match = project.repo.match(/github\.com\/([^/]+\/[^/]+)/);
    if (!match) return;
    fetch(`https://api.github.com/repos/${match[1]}`)
      .then((r) => r.json())
      .then((data) => { if (data.stargazers_count) setLiveStars(data.stargazers_count); })
      .catch(() => {});
  }, [project.repo, project.stars]);

  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-6">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium text-[var(--text)]">
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h2>
          {liveStars && (
            <span className="font-mono-tag text-xs text-[var(--accent)] border border-[var(--accent)] rounded px-1.5 py-0.5">
              ★ {liveStars}
            </span>
          )}
        </div>
        {project.period && (
          <span className="font-mono-tag text-xs text-[var(--text-dim)]">{project.period}</span>
        )}
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      {(project.repo || project.live) && (
        <div className="mb-3 flex gap-4 font-mono-tag text-xs">
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">GitHub ↗</a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">Live ↗</a>}
        </div>
      )}
      <ul className="flex flex-col gap-1.5">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--text-dim)]">
            <span className="text-[var(--accent)]">–</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[var(--text)]">Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
      <p className="font-mono-tag text-sm text-[var(--text-dim)]">more building in progress. check back soon (or just watch the github).</p>
    </div>
  );
}
