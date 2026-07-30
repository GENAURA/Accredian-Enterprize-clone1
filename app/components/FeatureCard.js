export default function FeatureCard({ icon, title, description, className = "" }) {
  return (
    <div className={`card animate-fadeUp opacity-0 ${className}`}>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-600">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
