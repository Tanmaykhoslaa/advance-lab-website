import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Products } from "@/components/site/Products";
import { useEffect } from "react";

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Products - Advance Lab Equipments";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12">
        <Products />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
