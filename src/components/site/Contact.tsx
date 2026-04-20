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

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    if (product) {
      setForm((f) => ({
        ...f,
        message: f.message || `I would like to request a quote for: ${product}.\n\nPlease share pricing, availability, and specifications.`,
      }));
      setTimeout(() => {
        const form = document.getElementById("inquiry-form");
        if (form) {
          form.scrollIntoView({ behavior: "smooth", block: "start" });
          // small offset for sticky navbar
          setTimeout(() => window.scrollBy({ top: -80, behavior: "smooth" }), 350);
          (form.querySelector<HTMLInputElement>("#name"))?.focus({ preventScroll: true });
        }
      }, 150);
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Please check the form", description: result.error.issues[0].message, variant: "destructive" });
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
    <section id="contact" className="py-20 gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Equip Your <span className="text-gradient">Lab</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach out for product inquiries, pricing, demos, or service requests — our team responds quickly.
          </p>

          <div className="space-y-5">
            <a href="tel:+917988927387" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-soft transition-smooth">
              <div className="h-11 w-11 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-muted-foreground">+91 79889 27387 &nbsp;•&nbsp; +91 97284 95878</div>
              </div>
            </a>

            <a href="mailto:advancelabequipments@gmail.com" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-soft transition-smooth">
              <div className="h-11 w-11 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground break-all">advancelabequipments@gmail.com</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="h-11 w-11 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-sm text-muted-foreground">Chandigarh • Panchkula • Barwala, India</div>
              </div>
            </div>
          </div>
        </div>

        <form id="inquiry-form" onSubmit={submit} className="scroll-mt-24 bg-card border border-border rounded-2xl p-7 shadow-card space-y-4 animate-fade-in">
          <h3 className="text-xl font-bold">Send an Inquiry</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} placeholder="Tell us which instrument you're interested in..." />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            <Send className="mr-2 h-4 w-4" /> {loading ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
};
