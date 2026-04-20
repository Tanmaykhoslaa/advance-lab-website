import { FlaskConical, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#about",    label: "About Us" },
  { href: "#contact",  label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-[hsl(222_55%_12%)] text-[hsl(220_15%_72%)]">
      {/* Gold top rule */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent" />

      <div className="container py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[hsl(43_72%_49%)]">
              <FlaskConical className="h-5 w-5 text-[hsl(222_55%_14%)]" />
            </span>
            <span className="font-bold text-white text-base leading-tight">
              Advance Lab Equipments
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm mb-5">
            Manufacturer, importer &amp; exporter of scientific and laboratory instruments.
            Serving labs, hospitals, pharma &amp; research centres across India since 2008.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(43_72%_49%/0.3)] bg-[hsl(43_72%_49%/0.08)] text-[11px] font-medium text-[hsl(43_72%_65%)] uppercase tracking-wider">
            ISO 9001 Certified
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm hover:text-[hsl(43_72%_60%)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="h-[1px] w-3 bg-[hsl(43_72%_49%/0.5)] group-hover:w-5 group-hover:bg-[hsl(43_72%_49%)] transition-all duration-200" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm">
              <Phone className="h-4 w-4 text-[hsl(43_72%_55%)] shrink-0 mt-0.5" />
              <span>+91 79889 27387<br />+91 97284 95878</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm">
              <Mail className="h-4 w-4 text-[hsl(43_72%_55%)] shrink-0 mt-0.5" />
              <a href="mailto:advancelabequipments@gmail.com" className="break-all hover:text-[hsl(43_72%_60%)] transition-colors">
                advancelabequipments@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm">
              <MapPin className="h-4 w-4 text-[hsl(43_72%_55%)] shrink-0 mt-0.5" />
              <span>Chandigarh · Panchkula · Barwala, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[hsl(220_12%_50%)]">
          <span>© {new Date().getFullYear()} Advance Lab Equipments. All rights reserved.</span>
          <span>Made with precision in India</span>
        </div>
      </div>
    </footer>
  );
};
