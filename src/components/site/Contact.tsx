import { useEffect, useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Building2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

const contacts = [
  {
    icon: MapPin,
    label: "Registered Address",
    value: "Barwala, Panchkula",
    href: undefined,
  },
  {
    icon: Building2,
    label: "Branch Offices",
    value: "Ambala, Delhi, Jaipur",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: ["+91 79889 27387", "97384 95878", "+91-176 2327371"],
    href: "tel:+917988927387",
  },
  {
    icon: Mail,
    label: "Email",
    value: "advancelabequipments@gmail.com",
    href: "mailto:advancelabequipments@gmail.com",
  },
];

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const TiltWrapper = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative perspective-[1200px]"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    if (product) {
      setForm((f) => ({
        ...f,
        message:
          f.message ||
          `I would like to request a quote for: ${product}.\n\nPlease share pricing, availability, and specifications.`,
      }));
      const scrollToForm = () => {
        const formEl = document.getElementById("inquiry-form");
        if (!formEl) return;
        const top = formEl.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
        formEl.querySelector<HTMLInputElement>("#name")?.focus({ preventScroll: true });
      };
      requestAnimationFrame(() => {
        setTimeout(scrollToForm, 250);
        setTimeout(scrollToForm, 800);
      });
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    const subject = encodeURIComponent(`Inquiry from ${result.data.name}`);
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nPhone: ${result.data.phone}\n\n${result.data.message}`
    );
    window.location.href = `mailto:advancelabequipments@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Inquiry ready", description: "Your email client has opened with your message." });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden bg-background text-foreground perspective-[2000px]">
      {/* Background glow effects with floating animation */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow border-primary/20 bg-primary/10 text-primary w-max mb-6">
              Get in Touch
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight uppercase font-serif">
              Let's Equip Your{" "}
              <span className="text-primary">Lab</span>
            </h2>
            <p className="text-muted-foreground mb-10 lg:mb-12 text-base lg:text-lg leading-relaxed max-w-md border-l-2 border-primary pl-4">
              Reach out for product inquiries, pricing, demos, or service requests.
              Our team responds within one business day.
            </p>
          </motion.div>

          <div className="space-y-4 perspective-[1000px]">
            {contacts.map((c, idx) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Wrapper
                    href={c.href as string}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 bg-card border-2 border-border hover:border-primary hover:shadow-orange hover:-translate-y-2 transition-all duration-500 group text-center sm:text-left"
                  >
                    <div className="h-16 w-16 bg-background border-2 border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:shadow-orange group-hover:rotate-[10deg] transition-all duration-500">
                      <c.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <div className="flex flex-col justify-center py-2">
                      <div className="font-black uppercase tracking-wider text-foreground text-lg mb-1">{c.label}</div>
                      <div className="text-sm font-bold text-muted-foreground space-y-1">
                        {Array.isArray(c.value) ? (
                          c.value.map((val, i) => (
                            <div key={i} className="break-all">{val}</div>
                          ))
                        ) : (
                          <div className="break-all">{c.value}</div>
                        )}
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent blur-2xl pointer-events-none" />

          <TiltWrapper>
            <form
              id="inquiry-form"
              onSubmit={submit}
              className="relative scroll-mt-24 bg-card border-2 border-border shadow-dark p-6 sm:p-12 space-y-8 overflow-hidden"
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary opacity-80" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary transform translate-x-8 -translate-y-8 rotate-45" />

              <div>
                <h3 className="text-3xl font-black uppercase text-foreground mb-3">Send an Inquiry</h3>
                <p className="text-base font-bold text-muted-foreground uppercase tracking-widest text-xs">All fields are required.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <Label htmlFor="name" className="text-muted-foreground text-xs font-black uppercase tracking-wider">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-14 rounded-none text-base font-bold"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="phone" className="text-muted-foreground text-xs font-black uppercase tracking-wider">Phone</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={20}
                    className="bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-14 rounded-none text-base font-bold"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="email" className="text-muted-foreground text-xs font-black uppercase tracking-wider">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-14 rounded-none text-base font-bold"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="message" className="text-muted-foreground text-xs font-black uppercase tracking-wider">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  placeholder="Tell us which instrument you're interested in..."
                  className="bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-none resize-none p-5 text-base font-bold"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground text-lg font-black uppercase tracking-widest hover:shadow-orange hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 group"
              >
                <Send className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </TiltWrapper>
        </motion.div>
      </div>
    </section>
  );
};
