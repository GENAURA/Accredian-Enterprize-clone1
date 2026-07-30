const REASONS = [
  {
    title: "Built for measurable outcomes",
    description:
      "Every program ships with baseline and post-program assessments so L&D leaders can report velocity, retention, and skill-gap closure in board reviews — not just attendance numbers.",
  },
  {
    title: "Consultative, not off-the-shelf",
    description:
      "Our consultants map your team's skill gaps, business goals, and existing tech stack before recommending a single module.",
  },
  {
    title: "Certification that retains talent",
    description:
      "Learners earn recognizable, portfolio-ready certifications — a proven lever for engagement and retention on your team.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Why Enterprises Choose Us</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Not another training vendor. A learning partner.
          </h2>
          <p className="mt-4 text-slate-500">
            Accredian Enterprise combines IIT/IIM-quality curriculum, live
            mentorship, and a real-time analytics layer so your organization
            can prove ROI on every rupee spent on upskilling.
          </p>

          <div className="mt-8 space-y-6">
            {REASONS.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Live Enterprise Dashboard
            </p>
            <div className="mt-5 space-y-4">
              {[
                { label: "Cohort Completion", value: 94 },
                { label: "Skill Gap Closure", value: 78 },
                { label: "Manager Readiness", value: 85 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-semibold text-slate-900">
                      {row.value}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-brand-600"
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div>
                <p className="text-2xl font-bold text-slate-900">312</p>
                <p className="text-xs text-slate-500">Active Learners</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.8/5</p>
                <p className="text-xs text-slate-500">Mentor Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
