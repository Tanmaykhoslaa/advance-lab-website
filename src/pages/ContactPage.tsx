import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Contact } from "@/components/site/Contact";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Advance Lab Equipments";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12">
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
