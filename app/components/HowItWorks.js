const STEPS = [
  {
    step: "01",
    title: "Discovery & Skill Mapping",
    description:
      "We audit your team's current skill levels, business goals, and tech stack to identify the highest-leverage gaps.",
  },
  {
    step: "02",
    title: "Custom Curriculum Design",
    description:
      "Programs are co-designed with university partners and tailored to your industry context and tools.",
  },
  {
    step: "03",
    title: "Cohort Rollout & Mentorship",
    description:
      "Teams learn in structured cohorts with live mentorship from 500+ industry practitioners.",
  },
  {
    step: "04",
    title: "Analytics & ROI Reporting",
    description:
      "Track engagement, completion, and skill growth in a live dashboard built for L&D and leadership reviews.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-container py-20 sm:py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">How It Works</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          From skill gap to measurable ROI in four steps
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((item, idx) => (
          <div key={item.step} className="relative">
            <div className="card h-full">
              <span className="text-4xl font-extrabold text-brand-100">
                {item.step}
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
            {idx < STEPS.length - 1 && (
              <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-slate-300 lg:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
