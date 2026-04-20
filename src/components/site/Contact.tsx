import { useEffect, useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name:    z.string().trim().min(1, "Name is required").max(100),
  email:   z.string().trim().email("Invalid email").max(255),
  phone:   z.string().trim().min(7, "Phone is required").max(20),
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
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(222 40% 30%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative grid lg:grid-cols-2 gap-16">
        {/* Left — info */}
        <div>
          <p className="section-eyebrow">
            <span className="divider-gold mr-2" style={{ display: "inline-block" }} />
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(222_55%_18%)] mb-4">
            Let's Equip Your{" "}
            <span className="text-gold-gradient">Lab</span>
          </h2>
          <p className="text-[hsl(220_15%_45%)] mb-10 leading-relaxed">
            Reach out for product inquiries, pricing, demos, or service requests.
            Our team responds within one business day.
          </p>

          <div className="space-y-4">
            {contacts.map((c) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <Wrapper
                  key={c.label}
                  href={c.href as string}
                  className="flex items-start gap-5 p-5 rounded-xl border border-[hsl(215_20%_88%)] bg-[hsl(215_20%_98%)] hover:border-[hsl(43_72%_49%/0.4)] hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="h-11 w-11 rounded-lg bg-[hsl(222_55%_18%)] flex items-center justify-center shrink-0 group-hover:bg-[hsl(43_72%_49%)] transition-colors duration-300">
                    <c.icon className="h-5 w-5 text-[hsl(43_72%_60%)] group-hover:text-[hsl(222_55%_14%)] transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-[hsl(222_40%_20%)] text-sm mb-0.5">{c.label}</div>
                    <div className="text-sm text-[hsl(220_15%_48%)] break-all">{c.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Right — form */}
        <form
          id="inquiry-form"
          onSubmit={submit}
          className="scroll-mt-24 bg-white rounded-2xl border border-[hsl(215_20%_86%)] shadow-card p-8 space-y-5"
        >
          <div>
            <h3 className="text-xl font-bold text-[hsl(222_50%_18%)] mb-1">Send an Inquiry</h3>
            <p className="text-xs text-[hsl(220_12%_52%)]">All fields are required.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-[hsl(222_35%_30%)] text-xs font-semibold uppercase tracking-wide">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="border-[hsl(215_20%_86%)] focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)]"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-[hsl(222_35%_30%)] text-xs font-semibold uppercase tracking-wide">Phone</Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className="border-[hsl(215_20%_86%)] focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-[hsl(222_35%_30%)] text-xs font-semibold uppercase tracking-wide">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="border-[hsl(215_20%_86%)] focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-[hsl(222_35%_30%)] text-xs font-semibold uppercase tracking-wide">Message</Label>
            <Textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              placeholder="Tell us which instrument you're interested in..."
              className="border-[hsl(215_20%_86%)] focus:border-[hsl(43_72%_49%)] focus:ring-[hsl(43_72%_49%/0.2)] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[hsl(222_55%_20%)] text-white text-sm font-semibold hover:bg-[hsl(222_55%_26%)] disabled:opacity-60 disabled:cursor-not-allowed shadow-soft hover:shadow-navy transition-all duration-300"
          >
            <Send className="h-4 w-4" />
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};
