import { Link } from "react-router-dom";
import { experience, profile, projects, skills } from "../data/content";
import HoverNote from "../components/HoverNote";
import PianoBanner from "../components/PianoBanner";

const skillLabels = ["01", "02", "03", "04"];
const featuredProjectCopy = {
  recallops: "AI-assisted incident monitoring and remediation for modern deployment workflows.",
  coverfi: "Stellar infrastructure for safer stablecoin payments and reserve-backed protection.",
  "research-agent": "A multi-step agent that turns complex questions into cited, evidence-scored reports.",
};
const featuredProjects = ["recallops", "coverfi", "research-agent"].map((slug) =>
  projects.find((project) => project.slug === slug),
);

function Highlight({ children }) {
  return <span className="rounded bg-[var(--accent-dim)] px-1.5 py-0.5 text-[#c3c1bc]">{children}</span>;
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section>
        <div className="relative mb-16">
          <div className="relative h-40 overflow-hidden border border-[var(--border)] sm:h-52">
            <PianoBanner />
          </div>
          <div className="absolute -bottom-12 left-5 h-24 w-24 overflow-hidden rounded-full border-4 border-[var(--bg)] bg-[var(--bg-raised)] shadow-xl ring-1 ring-[var(--border)] sm:left-8 sm:h-28 sm:w-28">
            <img src="/pfp.jpg" alt="Pallavi Jain" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono-tag text-xs text-[var(--text-dim)]">
            <span className="inline-flex items-center gap-2 text-[var(--text)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {profile.availability}
            </span>
            <span aria-hidden="true">/</span>
            <span>{profile.location}</span>
          </div>
          <p className="font-mono-tag text-sm text-[var(--accent)]">Hi, I'm {profile.name}</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{profile.tagline}</h1>
          <p data-scroll-tone className="max-w-2xl leading-relaxed text-[var(--text-dim)]">
            I'm a Computer Science and Engineering undergraduate in Delhi, focused on full-stack development, <HoverNote note="APIs, data flows, integrations, and the parts users never see.">backend systems</HoverNote>, and practical AI applications.
          </p>
          <p data-scroll-tone className="max-w-2xl leading-relaxed text-[var(--text-dim)]">
            I build products across React, Node.js, Next.js, Python, and Azure—from <HoverNote note="Workflows that plan, retrieve context, and act across tools.">AI agents</HoverNote> to incident remediation systems and campus platforms.
          </p>
          <p data-scroll-tone className="max-w-2xl leading-relaxed text-[var(--text-dim)]">
            Outside development, I lead technical initiatives, run workshops, participate in hackathons, and <HoverNote note="The quieter half of my week—and occasionally the loudest.">play and teach piano</HoverNote>.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {profile.socials.map((social) => (
              <a key={social.label} href={social.url} target={social.url.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className="font-mono-tag text-sm font-semibold text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]">
                {social.label}
              </a>
            ))}
            <a href="/resume.pdf" download className="font-mono-tag text-sm font-semibold text-[var(--accent)] hover:underline">resume ↗</a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono-tag text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Selected builds</p>
            <h2 className="text-xl font-semibold text-[var(--text)]">Featured projects</h2>
          </div>
          <Link to="/projects" className="font-mono-tag text-xs text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]">All projects →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-4 transition-colors hover:border-[var(--accent)]">
              <h3 className="font-medium text-[var(--text)]">{project.name}</h3>
              <p data-scroll-tone className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-dim)]">{featuredProjectCopy[project.slug]}</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--border)] pt-3 font-mono-tag text-xs">
                <a href={project.repo} target="_blank" rel="noreferrer" className="text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]">GitHub ↗</a>
                <Link to={`/projects/${project.slug}`} className="text-[var(--accent)] hover:underline">View details →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono-tag text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Where I've worked</p>
            <h2 className="text-xl font-semibold text-[var(--text)]">Experience</h2>
          </div>
          <Link to="/experience" className="font-mono-tag text-xs text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]">View details →</Link>
        </div>
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {experience.slice(0, 1).map((job) => (
            <article key={job.role + job.org} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <h3 className="font-medium text-[var(--text)]">{job.role}</h3>
                <p className="mt-1 text-sm text-[var(--accent)]">{job.org}</p>
                <p data-scroll-tone className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">{job.bullets[0]}</p>
              </div>
              <span className="font-mono-tag text-xs text-[var(--text-dim)]">{job.period || job.location}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <p className="mb-2 font-mono-tag text-xs uppercase tracking-[0.2em] text-[var(--accent)]">My toolkit</p>
          <h2 className="text-xl font-semibold text-[var(--text)]">Technical skills</h2>
          <p data-scroll-tone className="mt-2 text-sm text-[var(--text-dim)]">The technologies and fundamentals I use to take ideas from prototype to production.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <article key={skill.group} className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-medium text-[var(--text)]">{skill.group}</h3>
                <span className="font-mono-tag text-xs text-[var(--accent)]">{skillLabels[index]}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="font-mono-tag rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1.5 text-xs text-[var(--text-dim)] transition-colors group-hover:text-[var(--text)]">{item}</span>
                ))}
              </div>
              <div className="mt-5 h-0.5 w-8 bg-[var(--accent)] transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[var(--text)]">Achievements & leadership</h2>
        <p data-scroll-tone className="text-[15px] leading-8 text-[var(--text-dim)]">
          I'm a <Highlight>three-time hackathon winner</Highlight>, with first-place finishes at <Highlight>Prompt Wars</Highlight>, the <Highlight>AI Powered Solution Expo</Highlight> at IIC BPIT, and <Highlight>Steller Build Station Delhi NCR</Highlight>, alongside top finishes at GDG TechSprint and SnowHack IPEC. I later served as a <Highlight>hackathon judge</Highlight> at Innovate-X 2026, evaluating <Highlight>100+ pitches</Highlight> at the University of Delhi. As <Highlight>PR Head</Highlight> of my college Music Society, I led campaigns that strengthened event engagement while contributing creatively as a <Highlight>pianist</Highlight>. I'm also a <Highlight>strong communicator</Highlight> who has led teams across multiple initiatives and hosted <Highlight>large on- and off-campus events</Highlight>.
        </p>
      </section>
    </div>
  );
}
