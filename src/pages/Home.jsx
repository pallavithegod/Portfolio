import { profile, skills } from "../data/content";

const skillLabels = ["01", "02", "03", "04"];

function Highlight({ children }) {
  return (
    <span className="rounded bg-[var(--accent-dim)] px-1.5 py-0.5 text-[#c3c1bc]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col gap-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--bg-raised)] px-3 py-1.5 font-mono-tag text-xs text-[var(--text)]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          {profile.availability}
        </div>
        <p className="font-mono-tag text-sm text-[var(--accent)]">Hi, I'm {profile.name}</p>
        <h1 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">{profile.tagline}</h1>
        {profile.bio.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-[var(--text-dim)]">{paragraph}</p>
        ))}
        <p className="font-mono-tag text-sm text-[var(--text-dim)]">{profile.location}</p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.url} target={social.url.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className="font-mono-tag text-sm text-[var(--text-dim)] hover:text-[var(--accent)]">
              {social.label}
            </a>
          ))}
          <a href="/resume.pdf" download className="font-mono-tag text-sm text-[var(--accent)] hover:underline">resume ↗</a>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <p className="mb-2 font-mono-tag text-xs uppercase tracking-[0.2em] text-[var(--accent)]">My toolkit</p>
          <h2 className="text-xl font-semibold text-[var(--text)]">Technical skills</h2>
          <p className="mt-2 text-sm text-[var(--text-dim)]">The technologies and fundamentals I use to take ideas from prototype to production.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <article
              key={skill.group}
              className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-medium text-[var(--text)]">{skill.group}</h3>
                <span className="font-mono-tag text-xs text-[var(--accent)]">{skillLabels[index]}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono-tag rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1.5 text-xs text-[var(--text-dim)] transition-colors group-hover:text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 h-0.5 w-8 bg-[var(--accent)] transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[var(--text)]">Achievements & leadership</h2>
        <p className="text-[15px] leading-8 text-[var(--text-dim)]">
          I'm a <Highlight>three-time hackathon winner</Highlight>, with first-place finishes at <Highlight>Prompt Wars</Highlight>, the <Highlight>AI Powered Solution Expo</Highlight> at IIC BPIT, and <Highlight>Steller Build Station Delhi NCR</Highlight>, alongside top finishes at GDG TechSprint and SnowHack IPEC. I later served as a <Highlight>hackathon judge</Highlight> at Innovate-X 2026, evaluating <Highlight>100+ pitches</Highlight> at the University of Delhi. As <Highlight>PR Head</Highlight> of my college Music Society, I led campaigns that strengthened event engagement while contributing creatively as a <Highlight>pianist</Highlight>.
        </p>
      </section>
    </div>
  );
}
