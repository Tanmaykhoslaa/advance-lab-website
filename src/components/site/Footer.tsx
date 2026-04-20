import { FlaskConical } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero">
              <FlaskConical className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-bold">Advance Lab Equipments</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Manufacturer, importer & exporter of scientific and laboratory instruments.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#products" className="hover:text-primary">Products</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+91 79889 27387</li>
            <li>+91 97284 95878</li>
            <li className="break-all">advancelabequipments@gmail.com</li>
            <li>Chandigarh / Panchkula / Barwala</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Advance Lab Equipments. All rights reserved.
      </div>
    </footer>
  );
};
