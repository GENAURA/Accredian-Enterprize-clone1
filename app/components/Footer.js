const FOOTER_LINKS = {
  Product: ["Solutions", "How It Works", "Results", "Pricing"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Webinars", "Help Center", "Partners"],
};

export default function Footer() {
  return (
    <footer className="bg-brand-950 pt-16 text-brand-100">
      <div className="section-container grid grid-cols-2 gap-10 pb-12 sm:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-brand-900">
              A
            </span>
            <span className="text-lg font-bold text-white">
              Accredian Enterprise
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-brand-200/80">
            India&apos;s enterprise learning platform, partnering with IITs,
            IIMs, and global universities to upskill teams at scale.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="mb-3 text-sm font-semibold text-white">
              {heading}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-brand-200/80 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="section-container flex flex-col items-center justify-between gap-3 text-xs text-brand-300/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Accredian Enterprise (Partial Clone — Educational Project). All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
