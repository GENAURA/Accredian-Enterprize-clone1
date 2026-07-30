const RESULTS = [
  {
    metric: "40%",
    label: "Velocity Improvement",
    context: "Data engineering team output within 6 months of program launch.",
  },
  {
    metric: "300+",
    label: "Managers Onboarded",
    context: "Onboarded simultaneously across three geographies in one rollout.",
  },
  {
    metric: "94%",
    label: "Completion Rate",
    context: "Average cohort completion rate across enterprise programs.",
  },
];

export default function Results() {
  return (
    <section id="results" className="bg-brand-950 py-20 text-white sm:py-24">
      <div className="section-container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow border-white/20 bg-white/10 text-brand-100">
            Impact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Outcomes L&amp;D leaders can take to the board
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {RESULTS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <p className="text-4xl font-extrabold text-accent-400">
                {item.metric}
              </p>
              <p className="mt-2 text-lg font-semibold">{item.label}</p>
              <p className="mt-2 text-sm text-brand-100/80">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
