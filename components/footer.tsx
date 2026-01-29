const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Security", "Changelog"],
  Company: ["About Us", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Contact Us", "Status", "Terms of Service"],
  Legal: ["Privacy Policy", "Cookie Policy", "Data Processing"],
};

export function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-3">
              <img src="/logo.svg" alt="VanshaKatha" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              A beautiful, private space for your family's living chronicle.
              Preserve your story, one generation at a time.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VanshaKatha. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with care for families everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
