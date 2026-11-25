function Section({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--text)]">{title}</h2>
      <div className="space-y-5 text-base leading-8 text-[var(--text-dim)]">{children}</div>
    </section>
  );
}

function Emphasis({ children }) {
  return <em className="text-[var(--text)]">{children}</em>;
}

function InlineCode({ children }) {
  return <code className="rounded border border-[var(--border)] bg-[var(--bg-raised)] px-1.5 py-0.5 font-mono-tag text-sm text-[var(--accent)]">{children}</code>;
}

export default function Blog() {
  return (
    <article className="mx-auto max-w-2xl pb-12">
      <header className="border-b border-[var(--border)] pb-8">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Engineering / Practice</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-5xl">Debugging Like a Pianist</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-dim)]">What piano practice can teach us about isolating bugs, reading errors, and using AI with intention.</p>
        <p className="mt-5 font-mono-tag text-xs text-[var(--text-dim)]">Pallavi Jain</p>
      </header>

      <div className="pt-8 text-base leading-8 text-[var(--text-dim)]">
        <p className="border-l-2 border-[var(--accent)] pl-5 text-lg leading-8 text-[var(--text)]">
          Every week, I watch my piano students make the exact same mistake with <Emphasis>Ode to Joy</Emphasis>. They breeze through the opening bars, hit the slightly trickier middle passage, miss a transition, and immediately lift their hands to start over from bar one.
        </p>
        <p className="mt-6">
          Engineering is my career, and music is how I stay sane through it. The longer I spend doing both, the more I notice that experienced developers debug code the exact same way beginners practice piano: by re-running the whole piece and hoping muscle memory magically fixes the broken bar.
        </p>

        <Section title="Separate the Melody from the Chords">
          <p>When a student stumbles midway through <Emphasis>Ode to Joy</Emphasis>, restarting from the top only reinforces the mistake. You play the easy part ten times and panic at the exact same spot on beat eleven.</p>
          <p>Instead, I make them stop. We isolate the two bars where their fingers tangled, and then we split the hands. First, they play only the left-hand chords until the timing feels effortless. Next, they play the right-hand melody alone. Once each hand knows its job, we bring them together at half speed.</p>
          <p>Debugging software demands that same surgical separation. When a service fails or a UI component breaks, re-triggering the entire pipeline—or asking an LLM to regenerate a 200-line file—is just playing from bar one again. You have to mute the melody, check the chord timings, and isolate the single state transition that actually failed.</p>
        </Section>

        <Section title="Stop Pasting Errors You Haven't Read">
          <p>Lately, a quiet habit has crept into even seasoned engineering workflows: seeing red text in the terminal and immediately copying the entire stack trace into an LLM before reading the first line.</p>
          <p>I caught myself doing this while wiring up a React + Vite project. A component threw a <InlineCode>React is not defined</InlineCode> error inside a JSX file. When you feed that symptom into an AI without context, it often reaches for heavy, unnecessary fixes—rewriting <InlineCode>vite.config.js</InlineCode>, tweaking compiler presets, or restructuring exports.</p>
          <p>Had I stopped to read the log and inspect the single failing file first, the fix took five seconds: that specific setup still required an explicit <InlineCode>import React from 'react'</InlineCode> at the top of the JSX file. No tokens burned. No prompt tweaking required.</p>
          <p>When you skip reading the error statement, you skip understanding what you are fixing. You cannot take a system to production scale if you lose touch with the basics underneath the abstraction.</p>
        </Section>

        <Section title="Leverage Without Atrophy">
          <p>I still have a lot to explore in this industry, and I rely heavily on AI tools to move fast. Spending four hours stubbornly wrestling with an obscure dependency conflict isn't noble; it's poor time management.</p>
          <p>There is a practical middle ground between brute-force suffering and blind delegation. When you read the error first, form a hypothesis, and narrow the bug down to two specific bars, you keep your engineering intuition sharp. Then, if you bring in AI to check edge cases or speed up the implementation, you are directing the tool rather than letting it think for you.</p>
          <p>On the piano, slow, deliberate repetition turns awkward fingerings into intuition. In software, reading your own logs turns fragile guesswork into architectural instinct.</p>
        </Section>

        <Section title="Try This on Your Next Broken Build">
          <p>The next time your terminal throws an error, keep your hands off <InlineCode>Cmd+C</InlineCode> for sixty seconds. Read the exact line where the failure occurred, isolate the smallest possible inputs reproducing that state, and name what you think is broken before touching a prompt box.</p>
        </Section>
      </div>
    </article>
  );
}
