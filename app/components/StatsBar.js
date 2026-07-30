const STATS = [
  { value: "94%+", label: "Average cohort completion rate" },
  { value: "500+", label: "Industry practitioner mentors" },
  { value: "300+", label: "Managers upskilled in one rollout" },
  { value: "40%", label: "Reported team velocity improvement" },
];

function StatCard({ value, label }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1 px-4 py-2 text-center">
      <span className="text-3xl font-extrabold text-brand-700 sm:text-4xl">
        {value}
      </span>
      <span className="text-sm text-slate-500">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div className="section-container flex flex-col flex-wrap gap-8 py-10 sm:flex-row sm:gap-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
