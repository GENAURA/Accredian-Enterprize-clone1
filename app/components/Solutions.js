import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    icon: "📚",
    title: "University-Grade Curriculum",
    description:
      "Access a library of programs co-created with top-tier universities, rigorously structured for real-world applicability.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description:
      "Track completion rates, scores, and ROI through a live enterprise dashboard — no waiting on quarterly reports.",
  },
  {
    icon: "🧑‍🏫",
    title: "Live Mentorship",
    description:
      "1:1 sessions with 500+ industry practitioners across AI/ML, Data Science, Product, and Leadership.",
  },
  {
    icon: "🤝",
    title: "Cohort-Based Learning",
    description:
      "Structured cohorts foster collaboration, accountability, and peer learning — driving completion above 94%.",
  },
  {
    icon: "🛠️",
    title: "Custom Program Design",
    description:
      "Tailor curriculum to your organization's tech stack, skill gaps, and strategic business goals.",
  },
  {
    icon: "🌐",
    title: "Distributed Team Support",
    description:
      "Seamlessly upskill teams across geographies and timezones with asynchronous and live formats.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-container py-20 sm:py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">What We Offer</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The operating system for enterprise learning
        </h2>
        <p className="mt-4 text-slate-500">
          From curriculum design to analytics — everything your L&amp;D team
          needs to run upskilling at scale, in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            className={`[animation-delay:${i * 80}ms]`}
          />
        ))}
      </div>
    </section>
  );
}
