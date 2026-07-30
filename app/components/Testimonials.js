const TESTIMONIALS = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved noticeably, and the ROI became easy to defend internally.",
    name: "L&D Director",
    role: "Fintech, 2000+ employees",
  },
  {
    quote:
      "The combination of top-tier curriculum and live mentorship is unlike anything else we evaluated. Our engineers are now capable of leading ML projects independently.",
    name: "Head of Engineering",
    role: "SaaS Enterprise",
  },
  {
    quote:
      "We onboarded managers across three geographies at the same time. The enterprise dashboard made tracking completion and engagement effortless for our HR team.",
    name: "CHRO",
    role: "Manufacturing Conglomerate",
  },
];

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="card flex h-full flex-col justify-between">
      <p className="text-sm leading-relaxed text-slate-600">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container py-20 sm:py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">Testimonials</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Hear from L&amp;D leaders and CHROs
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
