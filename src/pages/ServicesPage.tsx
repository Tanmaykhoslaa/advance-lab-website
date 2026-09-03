import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Services } from "@/components/site/Services";
import { ServiceBanner } from "@/components/site/ServiceBanner";
import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - Advance Lab Equipments";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12">
        <Services />
        <ServiceBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
