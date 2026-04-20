import type { Product } from "@/data/products";

export const downloadDatasheet = (p: Product) => {
  const lines: string[] = [];
  lines.push("ADVANCE LAB EQUIPMENTS");
  lines.push("Scientific & Laboratory Instruments Manufacturer");
  lines.push("Chandigarh / Panchkula / Barwala, India");
  lines.push("Phone: +91 79889 27387, +91 97284 95878");
  lines.push("Email: advancelabequipments@gmail.com");
  lines.push("");
  lines.push("=".repeat(60));
  lines.push(`PRODUCT DATASHEET — ${p.name.toUpperCase()}`);
  lines.push("=".repeat(60));
  lines.push("");
  lines.push(`Category: ${p.category}`);
  lines.push("");
  lines.push("OVERVIEW");
  lines.push("-".repeat(60));
  lines.push(p.overview);
  lines.push("");
  lines.push("KEY FEATURES");
  lines.push("-".repeat(60));
  p.features.forEach((f) => lines.push(`  • ${f}`));
  lines.push("");
  lines.push("APPLICATIONS");
  lines.push("-".repeat(60));
  p.applications.forEach((a) => lines.push(`  • ${a}`));
  lines.push("");
  lines.push("TECHNICAL SPECIFICATIONS");
  lines.push("-".repeat(60));
  Object.entries(p.specs).forEach(([k, v]) => {
    lines.push(`  ${k.padEnd(24)} : ${v}`);
  });
  lines.push("");
  lines.push("=".repeat(60));
  lines.push("For pricing and quotations, contact us at the details above.");

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${p.slug}-datasheet.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
