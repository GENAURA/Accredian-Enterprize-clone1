const LOGOS = ["IIT", "IIM", "XLRI", "SP Jain", "ISB"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:32px_32px] opacity-40" />
      <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

      <div className="section-container relative flex flex-col items-center gap-10 py-20 text-center sm:py-28">
        <span className="eyebrow border-white/20 bg-white/10 text-brand-100">
          India&apos;s Enterprise Learning Platform
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Upskill Your Workforce{" "}
          <span className="bg-gradient-to-r from-brand-200 to-accent-400 bg-clip-text text-transparent">
            at Scale
          </span>
        </h1>

        <p className="max-w-2xl text-base text-brand-100/90 sm:text-lg">
          Partner with IITs, IIMs, and global universities to upskill your
          teams with curated programs, live mentorship, and real-time
          analytics — all built around measurable ROI.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#lead-form" className="btn-primary bg-white text-brand-900 hover:bg-brand-50">
            Get a Custom Proposal
          </a>
          <a
            href="#solutions"
            className="btn-secondary border-white/30 bg-transparent text-white hover:border-white hover:text-white"
          >
            Explore Solutions
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-brand-200/70">
            Curriculum co-designed with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-90">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-lg font-bold tracking-wide text-white/80"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
