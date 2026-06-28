import { useEffect, useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
    icon: Phone,
    label: "Call Us",
    value: "+91 79889 27387  •  +91 97284 95878",
    href: "tel:+917988927387",
  },
  {
    icon: Mail,
    label: "Email",
    value: "advancelabequipments@gmail.com",
    href: "mailto:advancelabequipments@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chandigarh · Panchkula · Barwala, India",
    href: undefined,
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
    <section id="contact" className="py-32 relative overflow-hidden bg-[hsl(222_55%_14%)] text-white perspective-[2000px]">
      {/* Background glow effects with floating animation */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[hsl(43_72%_49%/0.06)] rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(222_55%_30%/0.2)] rounded-full blur-[100px] pointer-events-none mix-blend-screen"
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-20">
        {/* Left — info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow border-white/10 bg-white/5 text-[hsl(43_72%_60%)] w-max mb-6">
              Get in Touch
            </p>
            <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight">
              Let's Equip Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(43_72%_49%)] to-[#ffe680]">Lab</span>
            </h2>
            <p className="text-[hsl(220_15%_65%)] mb-12 text-lg leading-relaxed max-w-md">
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
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-[hsl(43_72%_49%/0.5)] hover:shadow-[0_0_40px_-10px_hsl(43_72%_49%/0.2)] hover:-translate-y-2 transition-all duration-500 group text-center sm:text-left"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-[hsl(43_72%_49%/0.05)] border border-[hsl(43_72%_49%/0.2)] flex items-center justify-center shrink-0 group-hover:bg-[hsl(43_72%_49%)] group-hover:border-[hsl(43_72%_49%)] group-hover:shadow-[0_0_30px_0_hsl(43_72%_49%/0.5)] group-hover:rotate-[10deg] transition-all duration-500">
                      <c.icon className="h-7 w-7 text-[hsl(43_72%_49%)] group-hover:text-[hsl(222_55%_14%)] transition-colors duration-500" />
                    </div>
                    <div className="flex flex-col justify-center py-2">
                      <div className="font-bold text-white text-lg mb-1">{c.label}</div>
                      <div className="text-sm text-[hsl(220_15%_60%)] break-all">{c.value}</div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(43_72%_49%/0.15)] to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" />

          <TiltWrapper>
            <form
              id="inquiry-form"
              onSubmit={submit}
              className="relative scroll-mt-24 bg-[hsl(222_55%_16%)] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl p-6 sm:p-12 space-y-8 overflow-hidden"
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent opacity-80" />

              <div>
                <h3 className="text-3xl font-bold text-white mb-3">Send an Inquiry</h3>
                <p className="text-base text-[hsl(220_15%_60%)]">All fields are required.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <Label htmlFor="name" className="text-[hsl(220_15%_70%)] text-xs font-bold uppercase tracking-wider">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)] h-14 rounded-xl text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="phone" className="text-[hsl(220_15%_70%)] text-xs font-bold uppercase tracking-wider">Phone</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={20}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)] h-14 rounded-xl text-base"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="email" className="text-[hsl(220_15%_70%)] text-xs font-bold uppercase tracking-wider">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)] h-14 rounded-xl text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="message" className="text-[hsl(220_15%_70%)] text-xs font-bold uppercase tracking-wider">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  placeholder="Tell us which instrument you're interested in..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)] rounded-xl resize-none p-5 text-base"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-[hsl(43_72%_49%)] to-[#ffe680] text-[hsl(222_55%_14%)] text-lg font-black hover:shadow-[0_0_30px_0_hsl(43_72%_49%/0.5)] hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 group"
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
