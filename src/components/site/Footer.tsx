import { FlaskConical, Phone, Mail, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const quickLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about",    label: "About Us" },
  { href: "/contact",  label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-card text-muted-foreground border-t-2 border-border">
      {/* Gold top rule */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

      <div className="container py-10 lg:py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <div className="mb-6 w-max">
            <Logo />
          </div>
          <p className="text-sm leading-relaxed max-w-sm mb-6 font-bold">
            Manufacturer, importer &amp; exporter of scientific and laboratory instruments.
            Serving labs, hospitals, pharma &amp; research centres across India since 2004.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2 border-2 border-primary/30 bg-primary/10 text-xs font-black text-primary uppercase tracking-widest shadow-orange">
            AN ISO 9001:2015 Certified
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-foreground font-black text-sm mb-6 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-4 font-bold">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm hover:text-primary transition-colors duration-200 flex items-center gap-3 group uppercase tracking-wider"
                >
                  <span className="h-[2px] w-4 bg-primary/50 group-hover:w-8 group-hover:bg-primary transition-all duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-foreground font-black text-sm mb-6 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">Contact</h4>
          <ul className="space-y-4 font-bold">
            <li className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-black text-foreground uppercase tracking-widest block mb-1">Registered Address:</span> Barwala, Panchkula
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Building2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-black text-foreground uppercase tracking-widest block mb-1">Branch Offices:</span> Ambala, Delhi, Jaipur
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div>+91 79889 27387</div>
                <div>97384 95878</div>
                <div>+91-176 2327371</div>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <a href="mailto:advancelabequipments@gmail.com" className="break-all hover:text-primary transition-colors">
                advancelabequipments@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-border py-6 bg-background">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Advance Lab Equipments. All rights reserved.</span>
          <span>Developed by Tanmay Khosla</span>
        </div>
      </div>
    </footer>
  );
};
