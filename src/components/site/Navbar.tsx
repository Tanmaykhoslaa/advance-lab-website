import { useState, useEffect, useRef } from "react";
import { Menu, X, FlaskConical, Phone, ChevronRight, ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<typeof products[0]>(products[0]);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "bg-[hsl(222_55%_14%)] shadow-[0_2px_24px_-4px_hsl(222_55%_10%/0.5)]"
          : "bg-[hsl(222_55%_14%)]"
        }`}
    >
      {/* Top announcement bar */}
      <div className="hidden sm:flex items-center justify-center gap-6 bg-[hsl(222_55%_10%)] py-1.5 text-[11px] text-[hsl(43_60%_84%)] tracking-wide">
        <span className="flex items-center gap-1.5">
          <Phone className="h-3 w-3" />
          +91 79889 27387 &nbsp;|&nbsp;
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
          {links.map((l) => {
            if (l.label === "Products") {
              return (
                <li
                  key={l.href}
                  className="relative h-full flex items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 group flex items-center gap-1 ${isProductsOpen ? "text-[hsl(43_72%_60%)]" : "text-[hsl(220_15%_75%)] hover:text-[hsl(43_72%_60%)]"
                      }`}
                  >
                    {l.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[hsl(43_72%_49%)] transition-all duration-300 rounded-full ${isProductsOpen ? "w-4/5" : "w-0 group-hover:w-4/5"}`} />
                  </button>

                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-[460px] bg-[hsl(222_55%_14%)] border border-white/10 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-row-reverse"
                      >
                        {/* Right: Product Categories (Navigation) */}
                        <div className="w-[180px] border-l border-white/5 bg-black/10">
                          <div className="p-2 space-y-0.5 overflow-y-auto max-h-[350px] custom-scrollbar">
                            {products.map((p) => (
                              <button
                                key={p.slug}
                                onMouseEnter={() => setActiveProduct(p)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all text-left group ${activeProduct.slug === p.slug
                                    ? "bg-white/5 text-[hsl(43_72%_60%)] shadow-[inset_2px_0_0_hsl(43_72%_60%)]"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                  }`}
                              >
                                <p.icon className={`h-3.5 w-3.5 ${activeProduct.slug === p.slug ? "text-[hsl(43_72%_60%)]" : "text-white/20 group-hover:text-white/40"}`} />
                                <span className="text-[12px] font-medium truncate">{p.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Left: Models (Display) - As requested "shows a model at the left side" */}
                        <div className="flex-1 p-3">
                          <div className="mb-3 px-1 flex items-center justify-between">
                            <h4 className="font-serif text-[15px] text-white leading-tight">{activeProduct.name}</h4>
                            <a
                              href={`/products/${activeProduct.slug}`}
                              className="text-[10px] font-bold text-[hsl(43_72%_60%)] hover:underline"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              Explore →
                            </a>
                          </div>

                          <div className="space-y-1 overflow-y-auto max-h-[280px] custom-scrollbar pr-1">
                            {activeProduct.models && activeProduct.models.length > 0 ? (
                              activeProduct.models.map((m) => (
                                <a
                                  key={m.id}
                                  href={`/products/${activeProduct.slug}#${m.id}`}
                                  className="flex flex-col p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-all group"
                                  onClick={() => setIsProductsOpen(false)}
                                >
                                  <div className="text-[12px] font-medium text-white/90 group-hover:text-[hsl(43_72%_60%)] transition-colors">
                                    {m.name}
                                  </div>
                                  <div className="text-[9px] text-white/30 mt-0.5 tracking-wider font-mono">
                                    {m.modelNumber}
                                  </div>
                                </a>
                              ))
                            ) : (
                              <div className="h-40 flex items-center justify-center text-center opacity-20 italic text-[11px]">
                                Engineering data updating
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-[13px] font-medium text-[hsl(220_15%_75%)] hover:text-[hsl(43_72%_60%)] transition-colors duration-200 group"
                >
                  {l.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4/5 bg-[hsl(43_72%_49%)] transition-all duration-300 rounded-full" />
                </a>
              </li>
            );
          })}
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
          onClick={() => {
            setOpen(!open);
          }}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[hsl(222_55%_12%)] border-t border-white/10 overflow-hidden"
          >
            <ul className="container py-4 space-y-1">
              {links.map((l) => {
                if (l.label === "Products") {
                  return (
                    <li key={l.href} className="space-y-1">
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[hsl(220_15%_78%)] hover:text-[hsl(43_72%_60%)] hover:bg-white/5 rounded-md transition-colors text-left"
                      >
                        <span>{l.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pr-2 py-1 space-y-1 border-l border-white/10 ml-3"
                          >
                            {products.map((p) => (
                              <li key={p.slug}>
                                <a
                                  href={`/products/${p.slug}`}
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileProductsOpen(false);
                                  }}
                                  className="block px-3 py-2 text-xs font-medium text-[hsl(220_15%_65%)] hover:text-[hsl(43_72%_60%)] rounded-md hover:bg-white/5 transition-colors"
                                >
                                  {p.name}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }
                return (
                  <li key={l.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block px-3 py-2.5 text-sm font-medium text-[hsl(220_15%_78%)] hover:text-[hsl(43_72%_60%)] hover:bg-white/5 rounded-md transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
