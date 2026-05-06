import { 
  Beaker, 
  FlaskConical, 
  Activity, 
  Waves, 
  Layers, 
  Wind, 
  Microscope, 
  Pipette, 
  Thermometer, 
  Zap,
  Droplets,
  Dna,
  Binary,
  Syringe,
  Timer,
  Scale,
  type LucideIcon 
} from "lucide-react";

export type ProductModel = {
  id: string;
  name: string;
  modelNumber: string;
  description: string;
  specs: Record<string, string>;
  features?: string[];
  image?: string;
  video?: string;
  brochure?: string;
};

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
  models?: ProductModel[];
  mainImage?: string;
  videos?: string[];
  brochure?: string;
};

export const products: Product[] = [
  {
    slug: "karl-fischer",
    name: "Karl Fischer",
    desc: "Moisture determination",
    icon: Droplets,
    category: "Analytical",
    mainImage: "/images/products/Karl-fischer-headphoto.jpeg",
    overview: "Precision Karl Fischer titrators for accurate moisture determination in liquids, solids, and gases across various industrial sectors.",
    applications: ["Pharmaceuticals", "Petrochemicals", "Food & Dairy", "Chemical Analysis"],
    features: ["Auto-titration", "High precision", "Easy-to-clean glass cell", "Built-in calculation"],
    specs: { "Range": "10 ppm to 100%", "Accuracy": "±0.1%", "Method": "Volumetric" },
    models: [
      { 
        id: "auto-led", 
        name: "Auto Karl Fischer Titrimeter", 
        modelNumber: "ALE-905", 
        description: "Automatic apparatus designed for accurate determination of moisture content with current sensing electronic control and dual platinum electrode.",
        image: "/images/products/Auto-Karl-Fischer-titrameter.jpeg",
        specs: { 
          "Display": "Array of 10 LEDs in line",
          "Sample Size": "1-50mg of water",
          "Resolution": "0.05ml",
          "Detection": "Current sensing by electronic control",
          "K.F. Flow": "Automatic Sensitive Control Valve",
          "Titration Cell": "Air tight 200ml glass vessel",
          "End Point Delay": "30 seconds",
          "Stirrer": "Variable speed magnetic stirrer",
          "Burette": "Pressure filling auto zero (0.05ml res)",
          "Dimensions": "288 x 315 x 180 mm",
          "Weight": "5 kg (Approx.)"
        },
        features: ["Inbuilt magnetic stirrer", "Run-Add-End Auto Mode Indication", "Dual Platinum Measuring Electrode", "Adjustable Timer & Buzzer"],
        brochure: "/brochures/ALE-905-catalogue.pdf"
      },
      { 
        id: "microprocessor-vol", 
        name: "Microprocessor Karl Fischer Moisture Titrator", 
        modelNumber: "ALE-1040", 
        description: "Advanced volumetric titrator using latest microcontroller technology for enhanced accuracy. Features motorized dispensing and automatic calculation of moisture content in ppm, %, and mg H2O.",
        image: "/images/products/Microprocessor-Karl-Fischer.jpeg",
        specs: { 
          "Measuring Range": "50ppm to 100% of moisture",
          "Method": "Karl Fischer Volumetric Titration",
          "Dispensing": "Highly sensitive motorized dispensing system",
          "Resolution": "0.01 ml",
          "Indication": "0.00 to 99.99 ml on display",
          "Calculations": "%age (0-100%), ppm (10-9999999), mg H2O (0-999.99)",
          "Titer Factor": "In-built Automatic calculation facility",
          "Sample Storage": "Upto 20 latest samples (FIFO memory)",
          "Display": "Graphical LCD with backlit",
          "Keyboard": "20 keys soft touch membrane type",
          "Interface": "USB Port",
          "Dimensions": "385 x 290 x 140 mm",
          "Weight": "15 kgs (Approx.)"
        },
        features: [
          "Auto Computation in ppm, % & mg H2O", 
          "Storage of Date, Time, Batch No. and Results", 
          "Adjustable End Point Wait Time (1-59s)", 
          "In-built Magnetic stirrer with adjustable speed",
          "External Printer Attachment Facility (Optional)"
        ],
        brochure: "/brochures/ALE-1040-catalogue.pdf"
      },
      { 
        id: "microprocessor-led", 
        name: "Microprocessor Karl Fischer Titrator (Compact)", 
        modelNumber: "ALE-907", 
        description: "Compact microprocessor-controlled titrator for moisture determination in solid and liquid samples. Features a highly sensitive motorized dispensing system and motorized back-flush after analysis.",
        image: "/images/products/Microprocessor-Karl-Fischer.jpeg",
        specs: { 
          "Measuring Method": "Karl Fischer titration method",
          "Display": "2*16 character LCD",
          "Volume Range": "00.00 ml to 99.99ml",
          "Readability": "0.01ml",
          "End Point Detection": "Automatic with dual platinum sensor",
          "Function Keys": "Soft touch 6 keys",
          "Back Flush": "Motorized Back Flush after analysis",
          "Error Messages": "Yes for bad sample or reagent",
          "Printer Interface": "RS232 for serial printer",
          "Weight": "10 kg (Approx.)"
        },
        features: [
          "Motorized dispensing (No Glass Burette)", 
          "Memory for recording KF consumed", 
          "Easy calibration via front panel keys", 
          "Programmable Delay Time and Buzzer",
          "Motorized reagent washing from tubing"
        ],
        brochure: "/brochures/ALE-907-catalogue.pdf"
      }
    ]
  },
  {
    slug: "flame-photometer",
    name: "Flame Photometer",
    desc: "Na, K, Ca, Li analysis",
    icon: FlaskConical,
    category: "Analytical",
    mainImage: "/images/products/Microprocessor-Flame-photometer.jpeg",
    videos: [
      "/videos/digital-flame-photometer.mp4", 
      "/videos/digital-clinical-flame-photometer.mp4", 
      "/videos/microprocessor-flame-photometer.mp4"
    ],
    overview: "Microprocessor-based flame photometer for accurate determination of Sodium, Potassium, Calcium and Lithium in solution.",
    applications: ["Clinical labs", "Soil & plant analysis", "Cement & glass industry", "Pharma"],
    features: ["Built-in air compressor", "Digital display", "Auto-ignition option", "Stable LPG flame"],
    specs: {},
    models: [
      {
        id: "digital", 
        name: "Digital Flame Photometer (Single Display)", 
        modelNumber: "ALE-430", 
        description: "High-performance flame photometer for determination of Sodium, Potassium, Lithium and Calcium in blood and soil samples.",
        image: "/images/products/Digital-flame-photometer.jpeg",
        video: "/videos/digital-flame-photometer.mp4",
        specs: { 
          "Range": "Na: 0–100 ppm, K: 0–100 ppm, Ca: 15–100 ppm (Opt), Li: 10–100 ppm (Opt)", 
          "Sensitivity": "Na: 5 ppm, K: 5 ppm, Ca: 10 ppm (Opt), Li: 10 ppm (Opt)",
          "Readout": "2½ Digit Bright Red LED Display",
          "Accuracy": "±2% up to 40 ppm, ±5% above 40 ppm",
          "Repeatability": "±2 Counts",
          "Ignition System": "Auto Ignition / Manual",
          "Measurement": "Measures One Element at a Time",
          "Detector": "Silicon Photodiode",
          "Filters": "Narrow Band Interference Glass Filters",
          "Flame System": "LPG & Dry Oil Free Air",
          "Power": "230 V ± 10% AC, 50 Hz"
        },
        features: ["Black Bakelite Axial Flow Nebulizer", "Oil-free Mini Compressor included", "Pressure Regulator Control", "10 Minute Warm-up Time"]
      },
      {
        id: "microprocessor", 
        name: "Digital Clinical Flame Photometer (Dual Display)", 
        modelNumber: "ALE-432", 
        description: "Dual-display clinical flame photometer designed for simultaneous measurement of two elements.",
        image: "/images/products/Digital-clinical-flame-photometer.jpeg",
        video: "/videos/digital-clinical-flame-photometer.mp4",
        specs: { 
          "Serum Range": "Na: 0–200 (1:100 dil), K: 0–10 (1:100 dil), Li: 0–2 (1:5 dil)",
          "Urine Range": "Na: 0–250 (1:100 dil), K: 0–100 (1:100 dil), Ca: 0–10 (1:2 dil)",
          "General Range": "Na: 0–100 ppm, K: 0–100 ppm, Ca: 0–100 ppm, Li: 0–100 ppm",
          "Measurement": "Measures Two Elements at a Time",
          "Readout": "2½ Digit Bright Red LED Display",
          "Accuracy": "±2% up to 40 ppm",
          "Repeatability": "±2 Counts",
          "Ignition System": "Auto Ignition / Manual"
        },
        features: ["Simultaneous Na & K measurement", "Clinical Serum/Urine modes", "Silicon Photodiode Detector", "LPG & Dry Oil Free Air system"]
      },
      {
        id: "multi-element", 
        name: "Microprocessor Flame Photometer (Graphical)", 
        modelNumber: "ALE-435", 
        description: "Top-tier microprocessor-based system with graphical display and 5-point calibration.",
        image: "/images/products/Microprocessor-Flame-photometer.jpeg",
        video: "/videos/microprocessor-flame-photometer.mp4",
        specs: { 
          "Range": "Na, K, Li, Ca: 0–100 ppm (Upto 250 meq/l), Ba: 50–1000 ppm",
          "Sensitivity": "Na/K: 0.5 ppm, Li: 0.5 ppm (Opt), Ca: 15 ppm (Opt), Ba: 50 ppm (Opt)",
          "Resolution": "0.1 ppm / meq",
          "Calibration": "Up to 5-Point Calibration",
          "Display": "Graphical LCD with Backlit",
          "Accuracy": "<2% Curve Fit Accuracy",
          "Reproducibility": "<1% Coefficient of Variation",
          "PC Interface": "USB Port",
          "Ignition System": "Auto Ignition"
        },
        features: ["Barium (Ba) detection capability", "Adjustable Gas Control knobs", "Axial flow type Atomiser", "LPG & Dry Oil Free Air system"]
      }
    ]
  },
  {
    slug: "digital-viscometer",
    name: "Digital Viscometer",
    desc: "Viscosity measurement",
    icon: Timer,
    category: "Analytical",
    mainImage: "/images/products/digital-viscometer-ALE-1220.jpeg",
    overview: "Digital viscometers operate on the principle of how a fluid's internal friction affects its flow behavior. They typically measure the time it takes for a given amount of fluid to flow through a specific geometry (usually a capillary tube or rotating spindle) under controlled conditions. The measurement is then used to calculate the fluid's viscosity.",
    applications: [
      "Medical/pharmaceutical",
      "Industry Environmental Monitoring",
      "Commodity Inspection",
      "Food Inspection Agricultural Chemistry",
      "Teaching in Colleges & Universities",
      "Metallurgy, Petrochemical Industries",
      "Geology, Machine Manufacturing",
      "Water and Wastewater Labs",
      "Food and Beverage Labs"
    ],
    features: [
      "High precision and accuracy in viscosity measurement",
      "Quick and repeatable measurements",
      "Can be used for a wide range of fluid types, from low to high viscosities",
      "Some models can measure at different shear rates"
    ],
    specs: {
      "Accuracy": "±1.0% of range",
      "Repeatability": "±0.5%",
      "Display": "LCD",
      "Output": "RS 232 Interface"
    },
    models: [
      {
        id: "ale-1205", 
        name: "Digital Viscometer ALE-1205", 
        modelNumber: "ALE-1205", 
        description: "High precision digital viscometer offering accurate and reliable operation with a wide measurement range.",
        image: "/images/products/digital-viscometer-AL-1205.jpeg",
        brochure: "/brochures/ALE-PRODUCT CATALOGUE_20260506_191048_0000.pdf",
        specs: { 
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "20-2,000,000 m.pas",
          "No of Standard Spindles": "#1,#2,#3,#4 is standard configuration ,(#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 370 x 325 x 280",
          "Weight": "6.8 Kg"
        },
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply:100V-240V"
        ]
      },
      {
        id: "ale-1210", 
        name: "Digital Viscometer ALE-1210", 
        modelNumber: "ALE-1210", 
        description: "Advanced digital viscometer featuring direct viscosity reading and temperature display for enhanced accuracy.",
        image: "/images/products/digital-viscometer-ALE-1210.jpeg",
        brochure: "/brochures/ALE-PRODUCT CATALOGUE_20260506_191134_0000.pdf",
        specs: { 
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "10-2,000,000 m.pas",
          "No of Standard Spindles": "#1,#2,#3,#4 is standard configuration ,(#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 370 x 325 x 280",
          "Weight": "6.8 Kg"
        },
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Direct Viscosity reading and Temperature Display",
          "Choice of 3 Pin Power Cord",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply:100V-240V"
        ]
      },
      {
        id: "ale-1215", 
        name: "Touch Screen Viscometer ALE-1215", 
        modelNumber: "ALE-1215", 
        description: "Precision touch screen viscometer with a digital LCD display for direct viscosity and temperature readings.",
        image: "/images/products/digital-viscometer-ALE-1215.jpeg",
        brochure: "/brochures/ALE-PRODUCT CATALOGUE_20260506_191210_0000.pdf",
        specs: { 
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "10-2,000,000 m.pas",
          "No of Standard Spindles": "#1,#2,#3,#4 is standard configuration ,(#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD TOUCHSCREEN",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 400 x 350 x 360",
          "Weight": "10 Kg"
        },
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Direct Viscosity reading and Temperature Display",
          "Choice of 3 Pin Power Cord",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply:100V-240V"
        ]
      },
      {
        id: "ale-1220", 
        name: "Touch Screen Viscometer ALE-1220", 
        modelNumber: "ALE-1220 ( TOUCH SCREEN)", 
        description: "Premium touch screen viscometer featuring advanced measurement capabilities and reliable results for various industries.",
        image: "/images/products/digital-viscometer-ALE-1220.jpeg",
        brochure: "/brochures/ALE-PRODUCT CATALOGUE_20260506_191245_0000.pdf",
        specs: { 
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "10-2,000,000 m.pas",
          "No of Standard Spindles": "#1,#2,#3,#4 is standard configuration ,(#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD TOUCHSCREEN",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 400 x 350 x 360",
          "Weight": "10 Kg"
        },
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Direct Viscosity reading and Temperature Display",
          "Choice of 3 Pin Power Cord",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply:100V-240V"
        ]
      }
    ]
  },
  {
    slug: "turbidity-meter",
    name: "Turbidity Meter",
    desc: "NTU measurement",
    icon: Waves,
    category: "Water Analysis",
    mainImage: "https://images.unsplash.com/photo-1576086213369-97a306dca664?auto=format&fit=crop&q=80&w=800",
    overview: "Microprocessor turbidity meters for precise water quality analysis in industrial and environmental applications.",
    applications: ["Drinking water", "Waste water treatment", "Beverage industry"],
    features: ["Nephelometric principle", "Auto-ranging", "Calibration standards included"],
    specs: { "Range": "0–1000 NTU", "Resolution": "0.01 NTU" },
    models: [
      { id: "basic", name: "Standard NTU Meter", modelNumber: "AL-TB-101", description: "Reliable for routine water testing.", specs: { "Range": "0–1000 NTU" }, features: ["Digital display"] },
      { id: "advanced", name: "High-Precision Turbidity", modelNumber: "AL-TB-202", description: "Advanced optics for low NTU levels.", specs: { "Range": "0–1000 NTU", "Resolution": "0.01 NTU" }, features: ["Data logging"] },
      { id: "premium", name: "Online Turbidity System", modelNumber: "AL-TB-303", description: "Continuous monitoring for industrial plants.", specs: { "Output": "4-20mA / RS485" }, features: ["Real-time monitoring"] }
    ]
  },
  {
    slug: "conductivity-meter",
    name: "Conductivity Meter",
    desc: "EC & TDS measurement",
    icon: Zap,
    category: "Analytical",
    mainImage: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800",
    overview: "Advanced meters for measuring electrical conductivity, TDS, and salinity in liquid samples.",
    applications: ["Water purification", "Agriculture", "Chemical industry"],
    features: ["Auto temperature compensation", "Adjustable cell constant", "Memory storage"],
    specs: { "Range": "0–200 mS/cm", "Accuracy": "±1% F.S." },
    models: [
      { id: "basic", name: "EC Basic Series", modelNumber: "AL-CM-101", description: "Essential EC/TDS measurements.", specs: { "Range": "0–20 mS/cm" }, features: ["Auto-range"] },
      { id: "advanced", name: "EC Pro Laboratory", modelNumber: "AL-CM-202", description: "High precision benchtop model.", specs: { "Accuracy": "±0.5%" }, features: ["PC Interface"] },
      { id: "premium", name: "EC Ultimate Touch", modelNumber: "AL-CM-303", description: "Full touchscreen multi-parameter analysis.", specs: { "Display": "5\" Touchscreen" }, features: ["Cloud sync"] }
    ]
  },
  {
    slug: "colorimeter",
    name: "Colorimeter",
    desc: "Absorbance & %T",
    icon: Layers,
    category: "Analytical",
    mainImage: "https://images.unsplash.com/photo-1532187875605-1ef6c237a175?auto=format&fit=crop&q=80&w=800",
    overview: "Digital colorimeters for standard chemical and clinical concentration measurements.",
    applications: ["Blood analysis", "Chemical titration", "Quality control"],
    features: ["8 filters", "Digital readout", "Long-life LED source"],
    specs: { "Filters": "8 standard filters", "Readout": "3½ digit LED" },
    models: [
      { id: "basic", name: "Digital Colorimeter 8", modelNumber: "AL-CL-101", description: "Standard 8-filter digital model.", specs: { "Filters": "8" }, features: ["Compact size"] },
      { id: "advanced", name: "Microprocessor Colorimeter", modelNumber: "AL-CL-202", description: "Self-calibrating advanced model.", specs: { "Memory": "100 samples" }, features: ["Auto zero"] },
      { id: "premium", name: "Programmable Colorimeter", modelNumber: "AL-CL-303", description: "User-programmable concentration modes.", specs: { "Printer": "Built-in option" }, features: ["Direct concentration"] }
    ]
  }
];


export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
