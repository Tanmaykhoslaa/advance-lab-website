import { useState, useEffect } from "react";
import { Menu, X, FlaskConical, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#home",     label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#about",    label: "About Us" },
  { href: "/#contact",  label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(222_55%_14%)] shadow-[0_2px_24px_-4px_hsl(222_55%_10%/0.5)]"
          : "bg-[hsl(222_55%_14%)]"
      }`}
    >
      {/* Top announcement bar */}
      <div className="hidden sm:flex items-center justify-center gap-6 bg-[hsl(222_55%_10%)] py-1.5 text-[11px] text-[hsl(43_60%_84%)] tracking-wide">
        <span className="flex items-center gap-1.5">
          <Phone className="h-3 w-3" />
          +91 79889 27387 &nbsp;|&nbsp; +91 97284 95878
        </span>
        <span className="h-3 w-px bg-[hsl(43_40%_40%)]" />
        <span>advancelabequipments@gmail.com</span>
      </div>

      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[hsl(43_72%_49%)] shadow-gold group-hover:bg-[hsl(43_80%_54%)] transition-all duration-300">
            <FlaskConical className="h-5 w-5 text-[hsl(222_55%_14%)]" />
          </span>
          <span className="font-bold text-white text-sm sm:text-base leading-tight tracking-wide">
            Advance Lab
            <span className="text-[hsl(43_72%_60%)]"> Equipments</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-[13px] font-medium text-[hsl(220_15%_75%)] hover:text-[hsl(43_72%_60%)] transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4/5 bg-[hsl(43_72%_49%)] transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] hover:bg-[hsl(43_80%_55%)] shadow-gold hover:shadow-[0_8px_24px_-6px_hsl(43_80%_45%/0.55)] transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[hsl(222_55%_12%)] border-t border-white/10">
          <ul className="container py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block px-3 py-2.5 text-sm font-medium text-[hsl(220_15%_78%)] hover:text-[hsl(43_72%_60%)] hover:bg-white/5 rounded-md transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] hover:bg-[hsl(43_80%_55%)] transition-all"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
