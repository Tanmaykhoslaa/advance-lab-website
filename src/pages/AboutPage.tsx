import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { About } from "@/components/site/About";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Advance Lab Equipments";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12">
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
