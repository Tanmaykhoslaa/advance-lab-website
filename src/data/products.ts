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
  accessories?: string[];
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
  accessories?: string[];
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
    mainImage: "/images/products/Microprocessor Karl Fischer.jpeg",
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
        image: "/images/products/Microprocessor Karl Fischer.jpeg",
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
        image: "/images/products/Microprocessor Karl Fischer.jpeg",
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
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply: 100V-240V"
        ],
        specs: { 
          "MODEL NO.": "ALE-1205",
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "20-2,000,000 m.pas",
          "No of Standard Spindles": "#1, #2, #3, #4 is standard configuration, (#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 370 x 325 x 280",
          "Weight": "6.8 Kg"
        }
      },
      {
        id: "ale-1210", 
        name: "Digital Viscometer ALE-1210", 
        modelNumber: "ALE-1210", 
        description: "Advanced digital viscometer featuring direct viscosity reading and temperature display for enhanced accuracy.",
        image: "/images/products/digital-viscometer-ALE-1210.jpeg",
        brochure: "/brochures/ALE-PRODUCT CATALOGUE_20260506_191134_0000.pdf",
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Direct Viscosity reading and Temperature Display",
          "Choice of 3 Pin Power Cord",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply: 100V-240V"
        ],
        specs: { 
          "MODEL NO.": "ALE-1210",
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "10-2,000,000 m.pas",
          "No of Standard Spindles": "#1, #2, #3, #4 is standard configuration, (#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 370 x 325 x 280",
          "Weight": "6.8 Kg"
        }
      },
      {
        id: "ale-1215", 
        name: "Touch Screen Viscometer ALE-1215", 
        modelNumber: "ALE-1215", 
        description: "Precision touch screen viscometer with a digital LCD display for direct viscosity and temperature readings.",
        image: "/images/products/digital-viscometer-ALE-1215.jpeg",
        brochure: "/brochures/ALE-PRODUCT CATALOGUE_20260506_191210_0000.pdf",
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Direct Viscosity reading and Temperature Display",
          "Choice of 3 Pin Power Cord",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply: 100V-240V"
        ],
        specs: { 
          "MODEL NO.": "ALE-1215",
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "10-2,000,000 m.pas",
          "No of Standard Spindles": "#1, #2, #3, #4 is standard configuration, (#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD TOUCHSCREEN",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 400 x 350 x 360",
          "Weight": "10 Kg"
        }
      },
      {
        id: "ale-1220", 
        name: "Touch Screen Viscometer ALE-1220", 
        modelNumber: "ALE-1220 ( TOUCH SCREEN)", 
        description: "Premium touch screen viscometer featuring advanced measurement capabilities and reliable results for various industries.",
        image: "/images/products/digital-viscometer-ALE-1220.jpeg",
        brochure: "/brochures/ALE-PRODUCT CATALOGUE_20260506_191245_0000.pdf",
        features: [
          "Stepping Motor means Accurate, reliable operation",
          "Direct readout of all measurement parameters",
          "Auto Range Showing",
          "Time Function for measurement",
          "Direct Viscosity reading and Temperature Display",
          "Choice of 3 Pin Power Cord",
          "Sound alarm at under 20% Torque",
          "Linear calibration",
          "Wide range power supply: 100V-240V"
        ],
        specs: { 
          "MODEL NO.": "ALE-1220 ( TOUCH SCREEN)",
          "RPM": "0.3, 0.6, 1.5, 3, 6, 12, 30, 60",
          "Measuring Range(mPa.s)": "10-2,000,000 m.pas",
          "No of Standard Spindles": "#1, #2, #3, #4 is standard configuration, (#0 is for option)",
          "Measurement Accuracy": "±1.0% of range",
          "Repeatability": "±0.5%",
          "Display": "LCD TOUCHSCREEN",
          "Temperature RTD Monitoring Sensor Probe": "Yes",
          "Output": "RS 232 Interface",
          "Power Supply": "AC 220V/50Hz",
          "Environment": "Temperature 5-35 C Relative Humidity Not Larger Than 80%",
          "Dimension": "LxWxH (mm) 400 x 350 x 360",
          "Weight": "10 Kg"
        }
      }
    ]
  },
  {
    slug: "auto-ph-meter",
    name: "Microprocessor Auto pH Meter",
    desc: "pH & mV measurement",
    icon: Activity,
    category: "Analytical",
    mainImage: "/images/products/Auto-ph meter.jpeg",
    overview: "Microprocessor Auto pH Meters are ideal instruments for determination of pH and mV value of any aqueous solution. They use the latest microcontroller technology to provide the most accurate readings on the 3½ digit display. The instrument can be calibrated by using up to 3 point calibration on the click of a key. They have the facility of auto buffer recognition. The calibration is retained in the memory even after the instrument is switched off. The temperature compensation facility, both automatic and manual is available.",
    applications: ["Agriculture and soil analysis laboratories", "Swimming pools", "Fertilizer plants", "Chemical industries", "Pharmaceutical industries", "Petroleum refineries", "Textile plants"],
    features: [
      "Measures pH & mV",
      "Highly Stable & Accurate",
      "Easy to operate & user friendly",
      "Using Latest Microcontroller",
      "Auto Temperature Compensation Facility",
      "Auto Buffer Recognition",
      "8 Soft Touch Membrane Keys",
      "Up to 3 point Calibration"
    ],
    accessories: [
      "pH Electrode",
      "pH Stand",
      "Temperature Prob.",
      "Buffer Tablet (4 & 7)",
      "Buffer Bottle (4 & 7)",
      "12V DC Adapter",
      "Operation Manual"
    ],
    specs: { 
      "Display": "3½ Digit LED", 
      "Range pH, mV": "0 to 14.00 pH, 0 to ±1999 mV",
      "Resolution pH, mV": "0.01 pH, 1 mV",
      "Accuracy pH, mV": "± 0.01 pH, ± 1 mV",
      "Temperature Compensation": "Auto : 0 to 100 C",
      "Calibration": "3 Point (4pH, 7pH, 9pH)",
      "Slope Control": "80 to 120% Auto Range",
      "Power": "230 V ± 10% AC, 50Hz",
      "Dimensions": "195 × 225 × 65 mm (L × B × H)",
      "Weight": "2kg"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE_20260511_001903_0000.pdf",
    models: [
      { 
        id: "ale-856", 
        name: "Microprocessor Auto pH Meter", 
        modelNumber: "ALE-856", 
        description: "Advanced microprocessor-based pH meter with auto-calibration and temperature compensation.",
        image: "/images/products/Auto-ph meter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE_20260511_001903_0000.pdf",
        features: [
          "Measures pH & mV",
          "Highly Stable & Accurate",
          "Easy to operate & user friendly",
          "Using Latest Microcontroller",
          "Auto Temperature Compensation Facility",
          "Auto Buffer Recognition",
          "8 Soft Touch Membrane Keys",
          "Up to 3 point Calibration"
        ],
        accessories: [
          "pH Electrode",
          "pH Stand",
          "Temperature Prob.",
          "Buffer Tablet (4 & 7)",
          "Buffer Bottle (4 & 7)",
          "12V DC Adapter",
          "Operation Manual"
        ],
        specs: { 
          "Display": "3½ Digit LED", 
          "Range pH": "0 to 14.00 pH",
          "Range mV": "0 to ±1999 mV",
          "Resolution": "0.01 pH, 1 mV",
          "Accuracy": "± 0.01 pH, ± 1 mV",
          "Temp Comp": "Auto : 0 to 100 C",
          "Calibration": "3 Point (4pH, 7pH, 9pH)",
          "Slope Control": "80 to 120% Auto Range",
          "Power": "230 V ± 10% AC, 50Hz",
          "Dimensions": "195 × 225 × 65 mm (L × B × H)",
          "Weight": "2kg"
        }
      }
    ]
  },
  {
    slug: "photo-fluorometer",
    name: "Digital Photo Fluorometer",
    desc: "Fluorescence analysis",
    icon: Zap,
    category: "Analytical",
    mainImage: "/images/products/digital-photo-flurometer.jpeg",
    overview: "Digital Photo Fluorometer is designed for precise analysis of fluorophors such as vitamins, quinine, steroids, fluorescein, metal complexes, etc. The Fluorescence is caused by the absorption of radiant energy and the re-emission of some of its energy in the form of light. In fluorescence, the excited molecule returns to the ground state immediately after excitation, when the fluorescent molecule is excited at the fixed wavelength (primary filter). The amount of light emitted is measured at the particular wavelength (secondary filter). Fluorometer method for the determination of fluorophors is more sensitive than the Colorimetric method.",
    applications: ["Pharmaceuticals", "Vitamin analysis", "Quinine & Steroid analysis", "Chemical labs"],
    features: [
      "3 Digit LED display",
      "Highly Stable & Accurate",
      "Adjustable in 4 Ranges",
      "Minimum Sample 4ml.",
      "Highly sensitive wide range photodiode/cell",
      "Determines the concentration of Fluorophors & Quinine"
    ],
    accessories: [
      "Primary and Secondary filters: A set of 5",
      "Test Tube: A set of 5",
      "Instruction Manual",
      "Dust Cover"
    ],
    specs: { 
      "Fluoro Sensitivity": "Full scale deflection obtained with 1 ppm quinine sulphate in 0.1 N sulphuric acid (primary wavelength 360 nm)", 
      "Display": "3 digit bright red seven segment LED display",
      "Excitation Source": "12V, 50W Tungsten Halogen Lamp",
      "Sensitivity Range": "Adjustable in 4 ranges",
      "Primary Filters": "Corning 5840 and Corning 5113 mounted on holders",
      "Secondary Filters": "Corning 4308, Corning 3486, Corning 3385 mounted on holders",
      "Detector": "Highly sensitive wide range photodiode/cell",
      "Sample Test Tube": "15 mm (D) x 80 mm (H)",
      "Minimum Sample": "4 ml",
      "Power": "230 V ± 10%, 50 Hz, AC",
      "Dimension": "255 x 300 x 145 mm (Approx.)",
      "Weight": "5 Kg. (Approx.)"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE_20260511_002014_0000.pdf",
    models: [
      { 
        id: "ale-924", 
        name: "Digital Photo Fluorometer", 
        modelNumber: "ALE-924", 
        description: "Precise fluorescence analysis instrument with 4-range sensitivity adjustment.",
        image: "/images/products/digital-photo-flurometer.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE_20260511_002014_0000.pdf",
        features: [
          "3 Digit LED display",
          "Highly Stable & Accurate",
          "Adjustable in 4 Ranges",
          "Minimum Sample 4ml.",
          "Highly sensitive wide range photodiode/cell",
          "Determines the concentration of Fluorophors & Quinine"
        ],
        accessories: [
          "Primary and Secondary filters: A set of 5",
          "Test Tube: A set of 5",
          "Instruction Manual",
          "Dust Cover"
        ],
        specs: { 
          "Fluoro Sensitivity": "Full scale deflection obtained with 1 ppm quinine sulphate in 0.1 N sulphuric acid (primary wavelength 360 nm)", 
          "Display": "3 digit bright red seven segment LED display",
          "Excitation Source": "12V, 50W Tungsten Halogen Lamp",
          "Sensitivity Range": "Adjustable in 4 ranges",
          "Primary Filters": "Corning 5840 and Corning 5113 mounted on holders",
          "Secondary Filters": "Corning 4308, Corning 3486, Corning 3385 mounted on holders",
          "Detector": "Highly sensitive wide range photodiode/cell",
          "Sample Test Tube": "15 mm (D) x 80 mm (H)",
          "Minimum Sample": "4 ml",
          "Power": "230 V ± 10%, 50 Hz, AC",
          "Dimension": "255 x 300 x 145 mm (Approx.)",
          "Weight": "5 Kg. (Approx.)"
        }
      }
    ]
  },
  {
    slug: "spectrophotometer",
    name: "Digital Spectrophotometer",
    desc: "Wavelength analysis",
    icon: Layers,
    category: "Analytical",
    mainImage: "/images/products/Digital-Spectrophotometer.jpeg",
    overview: "Digital Spectrophotometer - The most economical, reliable, rugged and accurate instrument for spectrophotometric analysis of any concentration. Digital Spectrophotometer operates at a wavelength range of 340 nm to 960 nm. The output is available on a 3 ½ digit red seven segment LED display in terms of %Transmission (%T), Absorbance (Abs.), and Concentration (Conc.). This is useful instrument for Chemistry Labs, Pharmaceutical Industries, Colleges and University Labs etc.",
    applications: ["Chemistry Labs", "Pharmaceutical Industries", "Colleges and University Labs"],
    features: [
      "Range 340 To 960 nm",
      "Wavelength Resolution 1 nm",
      "Highly Stable and Accurate",
      "Direct Concentration Facility",
      "Dual Digital Display For Wavelength & Data",
      "10mm & 50mm Path Length (10mm, 50mm, 100mm Path Length Optional)"
    ],
    accessories: [
      "Range 340 To 960 nm",
      "Glass Square Cuvettes of 10mm path-length: A set of 2",
      "Operation Manual",
      "Dust Cover"
    ],
    specs: { 
      "Model": "ALE 658",
      "Range": "340 to 960 nm", 
      "Resolution": "%T: 0.1, Abs: 0.001, Conc. 1",
      "Output": "%T: 0 to 100, Abs: 0 to 1.999, Conc: 0 to 1999",
      "Detector": "Silicon Photodiode",
      "Light Source": "6V, 10W, Tungsten Halogen Lamp",
      "Monochromator": "600 Lines / mm holographic grating",
      "Sample Holder": "10mm Glass Cuvettes (50mm, 100mm Optional)",
      "Spectrum Bandwidth": "5nm",
      "Wave Length Resolution": "1nm",
      "Wave Length Accuracy": "±2.5nm",
      "Repeatability": "±2nm",
      "Display": "3 1/2 Digit Bright Red LED Display",
      "Power Supply": "230V +10% AC, 50 Hz",
      "Dimension": "480x290x180mm (LxBxH)",
      "Weight": "8.5 kg (approx.)"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE_20260511_002117_0000.pdf",
    models: [
      { 
        id: "ale-658", 
        name: "Digital Spectrophotometer", 
        modelNumber: "ALE-658", 
        description: "Rugged and accurate spectrophotometer for chemical and pharmaceutical analysis.",
        image: "/images/products/Digital-Spectrophotometer.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE_20260511_002117_0000.pdf",
        features: [
          "Range 340 To 960 nm",
          "Wavelength Resolution 1 nm",
          "Highly Stable and Accurate",
          "Direct Concentration Facility",
          "Dual Digital Display For Wavelength & Data",
          "10mm & 50mm Path Length (10mm, 50mm, 100mm Path Length Optional)"
        ],
        accessories: [
          "Range 340 To 960 nm",
          "Glass Square Cuvettes of 10mm path-length: A set of 2",
          "Operation Manual",
          "Dust Cover"
        ],
        specs: { 
          "Model": "ALE 658",
          "Range": "340 to 960 nm",
          "Resolution": "%T: 0.1, Abs: 0.001, Conc. 1",
          "Output": "%T: 0 to 100, Abs: 0 to 1.999, Conc: 0 to 1999",
          "Detector": "Silicon Photodiode",
          "Light Source": "6V, 10W, Tungsten Halogen Lamp",
          "Monochromator": "600 Lines / mm holographic grating",
          "Sample Holder": "10mm Glass Cuvettes (50mm, 100mm Optional)",
          "Spectrum Bandwidth": "5nm",
          "Wave Length Resolution": "1nm",
          "Wave Length Accuracy": "±2.5nm",
          "Repeatability": "±2nm",
          "Display": "3 1/2 Digit Bright Red LED Display",
          "Power Supply": "230V +10% AC, 50 Hz",
          "Dimension": "480x290x180mm (LxBxH)",
          "Weight": "8.5 kg (approx.)"
        }
      }
    ]
  }
];


export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
