import { useState, useEffect, useRef } from "react";
import { Menu, X, FlaskConical, Phone, ChevronRight, ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<typeof products[0]>(products[0]);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const { pathname } = useLocation();

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
      className={`sticky top-0 z-50 w-full transition-all duration-500 border-b border-border/40 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-dark"
          : "bg-background"
        }`}
    >
      {/* Top announcement bar */}
      <div className="hidden sm:flex items-center justify-center gap-6 bg-card py-1.5 text-[11px] text-muted-foreground tracking-wide border-b border-border">
        <span className="flex items-center gap-1.5">
          <Phone className="h-3 w-3 text-primary" />
          +91 79889 27387 &nbsp;|&nbsp;
        </span>
        <span className="h-3 w-px bg-border" />
        <span>advancelabequipments@gmail.com</span>
      </div>

      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            if (l.label === "Products") {
              const isActive = pathname.startsWith("/products");
              return (
                <li
                  key={l.href}
                  className="relative h-full flex items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/products"
                    className={`relative px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors duration-200 group flex items-center gap-1 ${isProductsOpen || isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                      }`}
                  >
                    {l.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${isProductsOpen || isActive ? "w-4/5" : "w-0 group-hover:w-4/5"}`} />
                  </Link>

                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-[460px] bg-card border border-border shadow-dark overflow-hidden flex flex-row-reverse"
                      >
                        {/* Right: Product Categories (Navigation) */}
                        <div className="w-[180px] border-l border-border bg-background/50">
                          <div className="p-2 space-y-0.5 overflow-y-auto max-h-[350px] custom-scrollbar">
                            {products.map((p) => (
                              <button
                                key={p.slug}
                                onMouseEnter={() => setActiveProduct(p)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 transition-all text-left group ${activeProduct.slug === p.slug
                                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5 border-l-2 border-transparent"
                                  }`}
                              >
                                <p.icon className={`h-3.5 w-3.5 ${activeProduct.slug === p.slug ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                                <span className="text-[12px] font-medium truncate">{p.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Left: Models (Display) */}
                        <div className="flex-1 p-3">
                          <div className="mb-3 px-1 flex items-center justify-between border-b border-border pb-2">
                            <h4 className="text-[15px] text-foreground leading-tight">{activeProduct.name}</h4>
                            <Link
                              to={`/products/${activeProduct.slug}`}
                              className="text-[10px] font-bold text-primary hover:underline uppercase tracking-wider"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              Explore →
                            </Link>
                          </div>

                          <div className="space-y-1 overflow-y-auto max-h-[280px] custom-scrollbar pr-1">
                            {activeProduct.models && activeProduct.models.length > 0 ? (
                              activeProduct.models.map((m) => (
                                <Link
                                  key={m.id}
                                  to={`/products/${activeProduct.slug}#${m.id}`}
                                  className="flex flex-col p-2.5 bg-background hover:bg-accent/10 border border-border hover:border-primary/50 transition-all group"
                                  onClick={() => setIsProductsOpen(false)}
                                >
                                  <div className="text-[12px] font-medium text-foreground group-hover:text-primary transition-colors">
                                    {m.name}
                                  </div>
                                  <div className="text-[9px] text-muted-foreground mt-0.5 tracking-wider font-mono">
                                    {m.modelNumber}
                                  </div>
                                </Link>
                              ))
                            ) : (
                              <div className="h-40 flex items-center justify-center text-center text-muted-foreground italic text-[11px]">
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
            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className={`relative px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors duration-200 group ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                >
                  {l.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-4/5" : "w-0 group-hover:w-4/5"}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 shadow-orange hover:shadow-dark transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
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
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <ul className="container py-4 space-y-1">
              {links.map((l) => {
                if (l.label === "Products") {
                  const isActive = pathname.startsWith("/products");
                  return (
                    <li key={l.href} className="space-y-1">
                      <button
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-colors text-left ${isActive || mobileProductsOpen ? "text-primary" : "text-foreground hover:text-primary"}`}
                      >
                        <Link to="/products" onClick={() => setOpen(false)} className="flex-1">{l.label}</Link>
                        <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMobileProductsOpen(!mobileProductsOpen); }} className="p-2 -mr-2 cursor-pointer">
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-primary/30 ml-3"
                          >
                            {products.map((p) => {
                              const isProductActive = pathname.startsWith(`/products/${p.slug}`);
                              return (
                                <li key={p.slug}>
                                  <Link
                                    to={`/products/${p.slug}`}
                                    onClick={() => {
                                      setOpen(false);
                                      setMobileProductsOpen(false);
                                    }}
                                    className={`block px-3 py-2 text-xs font-bold hover:bg-white/5 transition-colors ${isProductActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                                  >
                                    {p.name}
                                  </Link>
                                </li>
                              )
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }
                const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      onClick={() => setOpen(false)}
                      to={l.href}
                      className={`block px-3 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

