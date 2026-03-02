import { SectionBlock } from "@/components/docs/SectionBlock";
import { cn } from "@/lib/utils";

const VOICE_PRINCIPLES = [
  {
    title: "Precise, not clever",
    description:
      "Every word earns its place. No filler, no fluff, no buzzwords. Say exactly what is true. If a sentence can be shorter without losing meaning, it should be.",
    avoid: "\"Revolutionising the future of developer productivity with next-gen AI capabilities\"",
    use: "\"Your knowledge, always available to your team.\"",
  },
  {
    title: "Confident, not arrogant",
    description:
      "We know what we are building. We do not need to oversell it, make comparisons, or shout. State what is true. Let the product speak.",
    avoid: "\"Unlike other AI tools, Tsuin actually understands you.\"",
    use: "\"Tsuin captures how you think, not just what you type.\"",
  },
  {
    title: "Technical, not exclusive",
    description:
      "We speak the language of engineers without gate-keeping. We do not dumb it down. We do not explain what a merge conflict is. We do not over-explain what we do, either.",
    avoid: "\"Even non-technical stakeholders can use Tsuin!\"",
    use: "\"Built for engineers who architect systems before writing a line.\"",
  },
  {
    title: "Human, not robotic",
    description:
      "The product is AI but the brand voice is human. We do not imitate machine output. We do not use AI-generated cadence. Sentences have rhythm. Personality is present.",
    avoid: "\"Tsuin.ai leverages advanced language models to facilitate knowledge transfer.\"",
    use: "\"When you leave a team, your thinking shouldn't leave with you.\"",
  },
];

const TONE_CONTEXTS = [
  {
    context: "Marketing / Landing page",
    tone: "Confident and direct. Emotional resonance without sentimentality. Lead with the problem, not the feature.",
    example: "\"Software teams lose years of context every time someone leaves. Tsuin fixes that.\"",
  },
  {
    context: "Product UI / Empty states",
    tone: "Friendly and brief. No filler copy. Tell the user exactly what to do next. Personality is in restraint, not wordiness.",
    example: "\"No sessions yet. Connect your IDE to start capturing.\"",
  },
  {
    context: "Error messages",
    tone: "Honest and actionable. Acknowledge what happened, give one clear next step. No apologising excessively.",
    example: "\"Sync interrupted. Check your connection and retry.\" — not \"Oops! Something went wrong 😔\"",
  },
  {
    context: "Onboarding",
    tone: "Calm and precise. Assume competence. Senior developers do not need hand-holding. Give them the information to decide, then get out of the way.",
    example: "\"Tsuin reads your git history, comments, and decision logs. It does not access private keys or secrets.\"",
  },
  {
    context: "Documentation",
    tone: "Technical and unambiguous. Favour active voice. Define terms once, use consistently. No marketing language in docs.",
    example: "\"Run tsuin init to begin a capture session in the current repository.\"",
  },
  {
    context: "Enterprise / B2B",
    tone: "Measured and credible. Slightly more formal, still direct. Emphasise reliability, security, and scale — without Salesforce-ification.",
    example: "\"Tsuin Enterprise deploys AI Twins across your engineering organisation with SSO, audit logs, and team-level access control.\"",
  },
];

const WORD_LIST = {
  use: [
    { word: "Capture", why: "What Tsuin does to knowledge — active, precise" },
    { word: "Twin", why: "The core product metaphor — use consistently" },
    { word: "Knowledge", why: "What is being preserved — not 'data' or 'info'" },
    { word: "Engineers / Developers", why: "Our audience — not 'users'" },
    { word: "Team", why: "The beneficiary of shared knowledge" },
    { word: "Persistent", why: "The quality that makes Tsuin valuable" },
    { word: "Precise", why: "Signals technical credibility" },
    { word: "Session", why: "A unit of Tsuin interaction — define and use consistently" },
  ],
  avoid: [
    { word: "Revolutionary / Revolutionising", why: "Overused, signals startup hype" },
    { word: "AI-powered", why: "Says nothing specific, signals every other AI tool" },
    { word: "Seamless", why: "Meaningless filler in all contexts" },
    { word: "Leverage", why: "Corporate filler word" },
    { word: "Users", why: "Dehumanises our audience — say 'developers' or 'engineers'" },
    { word: "Next-gen / Next-generation", why: "No temporal meaning, signals trend-chasing" },
    { word: "Cutting-edge", why: "Same as above" },
    { word: "Copilot / Assistant", why: "Positions Tsuin in the wrong category" },
  ],
};

export function BrandVoice() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div id="overview" className="scroll-mt-20 space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Voice & Tone</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          How Tsuin.ai speaks is as important as what it looks like. Our audience is sceptical,
          precise, and has a low tolerance for marketing language. These guidelines define how
          we earn — and keep — their trust through words.
        </p>
      </div>

      {/* Voice principles */}
      <SectionBlock id="principles" title="Voice Principles">
        <p className="text-sm text-muted-foreground mb-6">
          Voice is constant — it defines who we are. Tone shifts by context, but these four
          principles are always present.
        </p>
        <div className="space-y-4">
          {VOICE_PRINCIPLES.map((principle, i) => (
            <div key={principle.title} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="p-5 space-y-2 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-semibold text-foreground">{principle.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {principle.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="p-4 space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-destructive font-bold">
                    Avoid
                  </p>
                  <p className="text-[12px] text-muted-foreground italic leading-relaxed">
                    {principle.avoid}
                  </p>
                </div>
                <div className="p-4 space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-primary font-bold">
                    Use
                  </p>
                  <p className="text-[12px] text-foreground font-medium leading-relaxed">
                    {principle.use}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Tone by context */}
      <SectionBlock id="tone" title="Tone by Context">
        <p className="text-sm text-muted-foreground mb-5">
          Tone adapts to the context while voice stays constant. The same brand can be direct
          on a landing page and precise in documentation.
        </p>
        <div className="space-y-3">
          {TONE_CONTEXTS.map((item) => (
            <div key={item.context} className="rounded-lg border border-border overflow-hidden">
              <div className="px-4 py-2.5 border-b border-border bg-muted/30">
                <p className="font-semibold text-sm text-foreground">{item.context}</p>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-[12px] text-muted-foreground leading-relaxed">{item.tone}</p>
                <div className="rounded-md bg-muted/40 border border-border px-3 py-2">
                  <p className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-1">
                    Example
                  </p>
                  <p className="text-[12px] text-foreground leading-relaxed">{item.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Word list */}
      <SectionBlock id="wordlist" title="Word List">
        <p className="text-sm text-muted-foreground mb-5">
          Specific words encode the brand's positioning. Use the approved list consistently.
          Avoid the flagged words categorically.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              Use these words
            </h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  {WORD_LIST.use.map((item) => (
                    <tr key={item.word}>
                      <td className="px-3 py-2.5 font-semibold text-foreground text-sm w-1/3">
                        {item.word}
                      </td>
                      <td className="px-3 py-2.5 text-[11px] text-muted-foreground">
                        {item.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-destructive font-bold">
              Avoid these words
            </h3>
            <div className="rounded-xl border border-destructive/20 overflow-hidden bg-destructive/5">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-destructive/10">
                  {WORD_LIST.avoid.map((item) => (
                    <tr key={item.word}>
                      <td className="px-3 py-2.5 font-semibold text-destructive/80 text-sm w-1/3 line-through">
                        {item.word}
                      </td>
                      <td className="px-3 py-2.5 text-[11px] text-muted-foreground">
                        {item.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Anchor */}
      <SectionBlock id="anchor" title="The Test">
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
            Before publishing any copy, ask:
          </p>
          <div className="space-y-3">
            {[
              "Would a senior engineer find this patronising or obvious?",
              "Does this sentence contain a word from the avoid list?",
              "Could this have been written by any other AI company?",
              "Is there a shorter, more direct version of this sentence?",
            ].map((q, i) => (
              <div key={q} className="flex items-start gap-3">
                <span className={cn(
                  "font-mono text-xs mt-0.5 shrink-0 font-bold",
                  "text-muted-foreground/40"
                )}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-foreground">{q}</p>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              If any answer is <em>yes</em>, rewrite before publishing. The brand is only as
              precise as the least precise sentence we publish.
            </p>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}
