import {
  Microscope, Beaker, Thermometer, FlaskRound, Droplets, TestTube,
  Activity, Gauge, Atom, Waves, Sprout, Pill, FlaskConical, Layers, CircleDot,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  category: string;
  overview: string;
  applications: string[];
  features: string[];
  specs: Record<string, string>;
};

export const products: Product[] = [
  {
    slug: "spectrophotometer",
    name: "Spectrophotometers",
    desc: "UV-VIS & Visible range",
    icon: Atom,
    category: "Analytical",
    overview:
      "High-precision UV-Visible spectrophotometers for absorbance, transmittance, and concentration measurements across pharma, biotech, and analytical labs.",
    applications: ["Pharmaceutical QC", "Biochemistry", "Environmental analysis", "Food & beverage"],
    features: [
      "Wavelength range 190–1100 nm",
      "Large LCD display with intuitive UI",
      "USB & RS-232 connectivity",
      "Built-in storage for methods & results",
    ],
    specs: {
      "Wavelength Range": "190–1100 nm",
      "Bandwidth": "2 nm / 4 nm options",
      "Photometric Range": "-0.3 to 3.0 A",
      "Light Source": "Tungsten & Deuterium",
      "Display": "7-inch color LCD",
    },
  },
  {
    slug: "ph-conductivity-meter",
    name: "pH & Conductivity Meters",
    desc: "Precise digital readings",
    icon: Gauge,
    category: "Electrochemistry",
    overview:
      "Reliable benchtop and portable pH, conductivity, and TDS meters for water testing, food labs, and industrial QC.",
    applications: ["Water testing", "Food & dairy", "Aquaculture", "Educational labs"],
    features: ["Auto temperature compensation", "1, 2, or 3-point calibration", "Hold & memory function", "Rugged epoxy electrode"],
    specs: {
      "pH Range": "0.00 to 14.00",
      "Resolution": "0.01 pH",
      "Accuracy": "±0.01 pH",
      "Conductivity Range": "0–200 mS/cm",
      "Temperature": "0–100 °C ATC",
    },
  },
  {
    slug: "pcr-thermal-cycler",
    name: "PCR Thermal Cycler",
    desc: "Reliable amplification",
    icon: TestTube,
    category: "Molecular Biology",
    overview:
      "Gradient PCR thermal cycler with rapid ramp rates and precise temperature uniformity for genomic research and diagnostics.",
    applications: ["Genomics", "Clinical diagnostics", "Forensics", "Microbiology"],
    features: ["96-well block", "Gradient function", "Touchscreen control", "Programmable protocols"],
    specs: {
      "Block Capacity": "96 × 0.2 ml",
      "Temperature Range": "4–99 °C",
      "Ramp Rate": "Up to 4 °C/sec",
      "Uniformity": "±0.3 °C",
      "Display": "7-inch touchscreen",
    },
  },
  {
    slug: "flame-photometer",
    name: "Flame Photometer",
    desc: "Na, K, Ca, Li analysis",
    icon: FlaskConical,
    category: "Analytical",
    overview:
      "Microprocessor-based flame photometer for accurate determination of Sodium, Potassium, Calcium and Lithium in solution.",
    applications: ["Clinical labs", "Soil & plant analysis", "Cement & glass industry", "Pharma"],
    features: ["Built-in air compressor", "Digital display", "Auto-ignition option", "Stable LPG flame"],
    specs: {
      "Elements": "Na, K, Ca, Li",
      "Range": "0–100 ppm",
      "Resolution": "0.1 ppm",
      "Fuel": "LPG",
      "Power": "230 V AC",
    },
  },
  {
    slug: "karl-fischer-titrator",
    name: "Karl Fischer Titrator",
    desc: "Moisture analysis",
    icon: Droplets,
    category: "Pharmaceutical",
    overview:
      "Volumetric Karl Fischer titrator for accurate moisture content determination in pharmaceuticals, oils, and chemicals.",
    applications: ["Pharma QC", "Petrochemicals", "Edible oils", "Solvents"],
    features: ["Auto end-point detection", "Built-in printer option", "Memory for 100 results", "USB data export"],
    specs: {
      "Range": "10 ppm to 100%",
      "Burette": "10 ml / 20 ml",
      "Accuracy": "±0.1%",
      "Display": "Graphic LCD",
      "Stirrer": "Magnetic, variable speed",
    },
  },
  {
    slug: "colorimeter",
    name: "Colorimeter",
    desc: "Accurate colorimetry",
    icon: CircleDot,
    category: "Analytical",
    overview:
      "Digital photoelectric colorimeter with multiple filters for routine colorimetric analysis in clinical and chemical labs.",
    applications: ["Clinical biochemistry", "Water analysis", "Food testing"],
    features: ["8 interference filters", "Direct concentration readout", "Stable LED source", "Compact design"],
    specs: {
      "Wavelength": "400–700 nm",
      "Filters": "8 (standard)",
      "Range": "0–1.99 A",
      "Light Source": "Tungsten lamp",
      "Display": "3½ digit LED",
    },
  },
  {
    slug: "turbidity-meter",
    name: "Turbidity Meter",
    desc: "NTU measurement",
    icon: Waves,
    category: "Water Analysis",
    overview:
      "Microcontroller-based turbidity meter following nephelometric principles for water quality monitoring.",
    applications: ["Drinking water", "Wastewater", "Beverage industry", "Pharma"],
    features: ["Auto-ranging", "Calibration with formazin standards", "Backlit LCD", "Low-power consumption"],
    specs: {
      "Range": "0–1000 NTU",
      "Resolution": "0.01 NTU",
      "Accuracy": "±2% of reading",
      "Light Source": "Infrared LED",
      "Standards": "ISO 7027 compliant",
    },
  },
  {
    slug: "do-meter",
    name: "DO Meter",
    desc: "Dissolved oxygen",
    icon: Activity,
    category: "Water Analysis",
    overview:
      "Benchtop and portable dissolved oxygen meters for environmental monitoring, aquaculture, and effluent analysis.",
    applications: ["Aquaculture", "Effluent treatment", "Environmental research"],
    features: ["Polarographic DO sensor", "Auto temperature & pressure compensation", "Calibration in air"],
    specs: {
      "DO Range": "0–20 mg/L",
      "Resolution": "0.01 mg/L",
      "Accuracy": "±0.1 mg/L",
      "Temperature": "0–50 °C ATC",
      "Power": "Battery / Mains",
    },
  },
  {
    slug: "colony-counter",
    name: "Colony Counter",
    desc: "Microbial counting",
    icon: Layers,
    category: "Microbiology",
    overview:
      "Digital colony counter with illuminated magnifier and audible counting pen for accurate microbial enumeration.",
    applications: ["Microbiology labs", "Food testing", "Pharma QC"],
    features: ["4-digit LED display", "Wolffhuegel & quarter division plates", "Magnifier lens", "Reset key"],
    specs: {
      "Display": "4-digit LED",
      "Magnification": "1.5x lens",
      "Plate Size": "Up to 100 mm",
      "Illumination": "LED ring",
      "Power": "230 V AC",
    },
  },
  {
    slug: "centrifuge",
    name: "Centrifuge",
    desc: "High-speed separation",
    icon: FlaskRound,
    category: "General Lab",
    overview:
      "Brushless motor centrifuges with digital speed/timer control for clinical, biochemical, and research applications.",
    applications: ["Clinical labs", "Blood banks", "Research", "Industrial QC"],
    features: ["Brushless DC motor", "Maintenance-free", "Lid-lock safety", "Imbalance cut-off"],
    specs: {
      "Max Speed": "Up to 16,000 RPM",
      "Capacity": "8 × 15 ml / configurable",
      "Timer": "0–99 min",
      "Display": "Digital LED",
      "Safety": "Auto-lock lid",
    },
  },
  {
    slug: "microscope",
    name: "Microscope",
    desc: "Bio & metallurgical",
    icon: Microscope,
    category: "Optical",
    overview:
      "Binocular and trinocular microscopes for biology, pathology, and metallurgy, with optional digital camera attachment.",
    applications: ["Pathology", "Education", "Metallurgy", "Research"],
    features: ["Achromatic objectives 4x/10x/40x/100x", "Koehler illumination", "Coaxial focus", "Optional camera port"],
    specs: {
      "Type": "Binocular / Trinocular",
      "Magnification": "40x – 1000x",
      "Illumination": "LED, variable",
      "Stage": "Mechanical with vernier",
      "Head": "Inclined 30°, rotatable 360°",
    },
  },
  {
    slug: "water-soil-analysis-kit",
    name: "Water & Soil Analysis Kit",
    desc: "Field analysis kit",
    icon: Sprout,
    category: "Field Testing",
    overview:
      "Portable kit for on-field water and soil quality testing including pH, EC, NPK, and key chemical parameters.",
    applications: ["Agriculture extension", "Government surveys", "School labs", "NGO field work"],
    features: ["Carry case design", "Reagents included", "Quick result charts", "Battery operated"],
    specs: {
      "Parameters (Water)": "pH, TDS, hardness, chloride, etc.",
      "Parameters (Soil)": "pH, EC, N, P, K, OC",
      "Power": "Rechargeable battery",
      "Kit Form": "Hard carry case",
      "Tests per Kit": "100+ tests",
    },
  },
  {
    slug: "disintegration-friability",
    name: "Disintegration & Friability Test Apparatus",
    desc: "Pharma test apparatus",
    icon: Pill,
    category: "Pharmaceutical",
    overview:
      "USP-compliant disintegration testers and friability testers for tablet quality control in pharmaceutical manufacturing.",
    applications: ["Tablet QC", "R&D formulation", "Pharma audits"],
    features: ["USP compliant", "Digital timer & temperature", "Auto stop", "Acrylic test jars"],
    specs: {
      "Baskets": "Single / Double / Triple",
      "Temperature": "Ambient to 50 °C",
      "Timer": "0–999 min",
      "Speed (Friability)": "25 ± 1 RPM",
      "Display": "Digital",
    },
  },
  {
    slug: "dry-bath-incubator",
    name: "Dry Bath Incubator",
    desc: "Precision heating",
    icon: Thermometer,
    category: "General Lab",
    overview:
      "Compact dry-bath incubators with interchangeable blocks for sample heating in molecular biology and chemistry.",
    applications: ["DNA/RNA workflows", "Enzyme reactions", "Sample digestion"],
    features: ["Interchangeable blocks", "PID temperature control", "Digital timer", "Quiet operation"],
    specs: {
      "Temperature Range": "Ambient + 5 to 100 °C",
      "Accuracy": "±0.5 °C",
      "Timer": "1 min – 99 hr",
      "Blocks": "0.2 / 0.5 / 1.5 / 2.0 ml",
      "Power": "230 V AC",
    },
  },
  {
    slug: "viscometer",
    name: "Viscometer",
    desc: "Fluid viscosity",
    icon: Beaker,
    category: "Analytical",
    overview:
      "Rotational viscometers for measuring viscosity of paints, oils, polymers, foods, and cosmetics with multiple spindle options.",
    applications: ["Paints & coatings", "Food & cosmetics", "Petrochemicals", "Polymers"],
    features: ["Multiple spindles included", "Auto range selection", "Digital display", "RS-232 output (optional)"],
    specs: {
      "Range": "1 – 2,000,000 cP",
      "Speeds": "0.3 – 100 RPM",
      "Spindles": "L1–L4 / R-series",
      "Accuracy": "±1% FSD",
      "Display": "Digital LCD",
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
