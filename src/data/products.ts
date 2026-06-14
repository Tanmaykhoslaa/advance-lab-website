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
  },
  {
    slug: "digital-leak-test-apparatus",
    name: "Digital Leak Test Apparatus",
    desc: "Packaging quality testing",
    icon: Waves,
    category: "Analytical",
    mainImage: "/images/products/digital_leak_test_apparatus.jpeg",
    overview: "The instrument is used to test the quality of the packaging process and to check that the seals enclosing the product are perfectly intact. Our Leak tester is designed to find the smallest holes and imperfections in blister packs and other semi-rigid product packaging. The leak test apparatus is widely used in the pharmaceutical industry for checking strips, blisters and bottles containing tablets, capsules and syrups. It also find application in the food industry where it can be effectively used to check the air-tightness of sweet packets, ready-to-eat pre-packed foods, confectionery packaging, packs of noodles, sauces etc.",
    applications: ["Pharmaceutical industry (strips, blisters, bottles)", "Food industry (sweet packets, ready-to-eat foods)", "Confectionery packaging", "Packaging quality control"],
    features: [
      "Programmable Time With Digital Display",
      "Auto Stop After Completion Of Set Time With Alarm",
      "Precise Control of Vacuum",
      "Heavy Duty Oil-free Vacuum Pump",
      "1mm Thick SS cabinet",
      "Hold function to stop counting at any stage"
    ],
    specs: {
      "Time Control & Range": "Digital, Programmable, 00.01 sec to 99min59sec",
      "Test Vacuum Range": "Adjustable up-to 650 mmHg",
      "Vacuum Display": "2.5\" SS Vacuum Gauge",
      "Vacuum Control & Release": "By Single Front Panel Knob",
      "Audio Alarm at completion": "Yes",
      "Quality Standard": "FIVE STAGES OF QUALITY CHECKING BEFORE DISPATCH"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE.pdf",
    models: [
      {
        id: "ale-973",
        name: "Digital Leak Test Apparatus",
        modelNumber: "ALE-973",
        description: "GMP Model with In-built Test Unit for efficient leak testing.",
        image: "/images/products/digital_leak_test_apparatus.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE.pdf",
        features: [
          "Programmable Time With Digital Display",
          "Auto Stop After Completion Of Set Time With Alarm",
          "Precise Control of Vacuum",
          "Heavy Duty Oil-free Vacuum Pump",
          "1mm Thick SS cabinet",
          "Hold function to stop counting at any stage"
        ],
        specs: {
          "Type": "GMP Model, In-built Test Unit",
          "Time Control & Range": "Digital, Programmable, 00.01 sec to 99min59sec",
          "Test Vacuum Range": "Adjustable up-to 650 mmHg",
          "Vacuum Display": "2.5\" SS Vacuum Gauge",
          "Vacuum Control & Release": "By Single Front Panel Knob",
          "Audio Alarm at completion": "Yes",
          "Vacuum Pump": "Oil free, MV 27\"+- 5%, 1/16HP Motor",
          "Test Unit Size": "200mm(973)"
        }
      },
      {
        id: "ale-974-975",
        name: "Digital Leak Test Apparatus",
        modelNumber: "ALE-974/975",
        description: "GMP Model with separate Test Unit for versatile laboratory applications.",
        image: "/images/products/digital_leak_test_apparatus.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE.pdf",
        features: [
          "Programmable Time With Digital Display",
          "Auto Stop After Completion Of Set Time With Alarm",
          "Precise Control of Vacuum",
          "Heavy Duty Oil-free Vacuum Pump",
          "1mm Thick SS cabinet",
          "Hold function to stop counting at any stage"
        ],
        specs: {
          "Type": "GMP Model, separate Test Unit",
          "Time Control & Range": "Digital, Programmable, 00.01 sec to 99min59sec",
          "Test Vacuum Range": "Adjustable up-to 650 mmHg",
          "Vacuum Display": "2.5\" SS Vacuum Gauge",
          "Vacuum Control & Release": "By Single Front Panel Knob",
          "Audio Alarm at completion": "Yes",
          "Vacuum Pump": "Oil free, MV 27\"+- 5%, 1/4HP Motor",
          "Test Unit Size": "250mm(974), 300mm(975)"
        }
      }
    ]
  },
  {
    slug: "digital-turbidity-meter",
    name: "Digital Turbidity Meter",
    desc: "Measurement of suspended solids",
    icon: Waves,
    category: "Analytical",
    mainImage: "/images/products/Digital-turbidity-meter.jpeg",
    overview: "We are one of the established and reputed Turbidity Meters manufacturer, supplier and exporter. Turbidity Meters are the most accurate and reliable instruments available for measurement of suspended solids in the samples. Turbidity Meters are extremely useful for measurement of suspended solids in sewage water, ground water, soil analysis laboratories, water quality control in boiler feed water, water purification plants, chemical & pharmaceutical industries etc.",
    applications: ["Sewage and drinking water testing", "Soil analysis laboratories", "Boiler feed water quality control", "Chemical & Pharmaceutical industries"],
    features: [
      "Rugged, reliable & easy to operate",
      "Highly stable & accurate",
      "User friendly",
      "Measurements upto 1000 NTU",
      "30mm flat bottom test tube",
      "3½ Digit LED display",
      "Sewage and drinking water testing"
    ],
    accessories: [
      "Test tube Set of 3",
      "Operation Manual",
      "Dust Cover"
    ],
    specs: {
      "Model": "ALE-558",
      "Range": "0 – 1000 NTU",
      "Resolution": "1 NTU",
      "Accuracy": "± 3% FS, ± 1Digit",
      "Display": "3½ Digit 7-Segment LED",
      "Light Source": "3V, 0.3Amp LED Lamp",
      "Detector": "Photodiode",
      "Sample System": "30mm Clear Glass Test Tubes",
      "Power": "230 V ± 10% AC, 50 Hz",
      "Dimensions": "195 x 230 x 95 mm (L x B x H) (Approx.)",
      "Weight": "3kg"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-7.pdf",
    models: [
      {
        id: "ale-558",
        name: "Digital Turbidity Meter",
        modelNumber: "ALE-558",
        description: "Accurate and reliable instrument for measurement of suspended solids.",
        image: "/images/products/Digital-turbidity-meter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-7.pdf",
        features: [
          "Rugged, reliable & easy to operate",
          "Highly stable & accurate",
          "User friendly",
          "Measurements upto 1000 NTU",
          "30mm flat bottom test tube",
          "3½ Digit LED display"
        ],
        accessories: [
          "Test tube Set of 3",
          "Operation Manual",
          "Dust Cover"
        ],
        specs: {
          "Product": "Digital",
          "Turbidity": "Meter",
          "Range": "0 – 1000 NTU",
          "Resolution": "1 NTU",
          "Accuracy": "± 3% FS, ± 1Digit",
          "Display": "3½ Digit 7-Segment LED",
          "Light Source": "3V, 0.3Amp LED Lamp",
          "Detector": "Photodiode",
          "Sample System": "30mm Clear Glass Test Tubes",
          "Power": "230 V ± 10% AC, 50 Hz",
          "Dimensions": "195 x 230 x 95 mm (L x B x H) (Approx.)",
          "Weight": "3kg"
        }
      }
    ]
  },
  {
    slug: "auto-potentiometer",
    name: "Micro Processor Auto Potentiometer",
    desc: "Potentiometric measurements",
    icon: Activity,
    category: "Analytical",
    mainImage: "/images/products/Microproccesor-auto-potentiometer.jpeg",
    overview: "Microprocessor Auto Potentiometer is a precision instrument for potentiometric measurements. Results are displayed in millivolts on a direct digital read out by 3½ digit LED display. It is supplied with a set of 2 electrodes viz. Reference & Glass, (Platinum & Silver electrodes are optional). It is extremely useful for potentiometric, ORP and acid base titrations. This is useful instrument for Chemistry Labs, Pharmaceutical Industries, Colleges and University Labs etc.",
    applications: ["Chemistry Labs", "Pharmaceutical Industries", "Colleges and University Labs", "ORP and acid base titrations"],
    features: [
      "Easy to operate & user Friendly",
      "Highly Stable & Accurate",
      "3½ Digit LED Display",
      "Rugged & Economical",
      "8 Soft touch membranes keys",
      "ORP electrode for titration"
    ],
    accessories: [
      "ORP Electrode",
      "Electrode Stand",
      "Temperature Probe",
      "12V DC Adapter",
      "Operation manual",
      "Dust Coverr"
    ],
    specs: {
      "Model": "ALE-865",
      "Auto Range": "0 – ± 1999mV",
      "Resolution": "0.1 mV",
      "Repeatability": "± 1 mV",
      "Accuracy": "± 1 mV, ± 1 digit",
      "Input Impedance": "> 10¹² ohms",
      "Operating Temperature": "10°C – 45°C",
      "Display": "3½ Digit 0.5” 7-Segment LED Display",
      "Power": "230 V ± 10% AC, 50 Hz",
      "Dimensions": "195 x 225 x 65 mm (L x B x H)",
      "Weight": "2 Kg (Approx.)"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-6.pdf",
    models: [
      {
        id: "ale-865",
        name: "Micro Processor Auto Potentiometer",
        modelNumber: "ALE-865",
        description: "Precision instrument for potentiometric measurements with 3½ digit LED display.",
        image: "/images/products/Microproccesor-auto-potentiometer.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-6.pdf",
        features: [
          "Easy to operate & user Friendly",
          "Highly Stable & Accurate",
          "3½ Digit LED Display",
          "Rugged & Economical",
          "8 Soft touch membranes keys",
          "ORP electrode for titration"
        ],
        accessories: [
          "ORP Electrode",
          "Electrode Stand",
          "Temperature Probe",
          "12V DC Adapter",
          "Operation manual",
          "Dust Coverr"
        ],
        specs: {
          "Auto Range": "0 – ± 1999mV",
          "Resolution": "0.1 mV",
          "Repeatability": "± 1 mV",
          "Accuracy": "± 1 mV, ± 1 digit",
          "Input Impedance": "> 10¹² ohms",
          "Operating Temperature": "10°C – 45°C",
          "Display": "3½ Digit 0.5” 7-Segment LED Display",
          "Power": "230 V ± 10% AC, 50 Hz",
          "Dimensions": "195 x 225 x 65 mm (L x B x H)",
          "Weight": "2 Kg (Approx.)"
        }
      }
    ]
  },
  {
    slug: "auto-conductivity-meter",
    name: "Auto Conductivity Temp Meter",
    desc: "Conductivity & Temp measurement",
    icon: Waves,
    category: "Analytical",
    mainImage: "/images/products/Auto-conductivity-temp-meter.jpeg",
    overview: "The Auto Conductivity Meter offered by the company are high on quality, performance and are made of the finest quality raw materials, making them durable and long lasting. Auto Conductivity-Temp. Meter is a solid state instrument designed to provide the precise Conductivity / Temp. Measurements. We have uses the latest microprocessor technology and advanced engineering techniques so as to give enhanced accuracy and reproducibility. The system has user friendly prompts, which guide you throughout the measurement process.",
    applications: ["Water quality testing", "Chemical industries", "Pharmaceutical labs", "Environmental monitoring"],
    features: [
      "Highly Stable & Accurate",
      "Easy to operate & user friendly",
      "Using Latest Microcontroller",
      "Auto Temperature Compensation Facility",
      "Auto Ranging Facility",
      "Cell Constant Measurement & Adjustment facility",
      "Alphanumeric LCD 16x2"
    ],
    accessories: [
      "Conductivity Cell",
      "Temperature Probe.",
      "Operation Manual",
      "Dust Cover",
      "Conductivity Cell Stand",
      "12V DC Adaptor"
    ],
    specs: {
      "Model": "ALE-877",
      "Display": "Alphanumeric LCD 16x2",
      "Measurement": "Conductivity & Temperature",
      "Range": "Five Ranges:- 0-200 µS/cm, 0-2 mS/cm, 0-20 mS/cm, 0-200 mS/cm",
      "Range Selection": "Automatic in 5 Auto Range",
      "Resolution": "0.1 µS/cm, 0.1°C",
      "Accuracy": "±0.5% FS ±1Digit",
      "Temperature Compensation": "Automatic : 0 to 50°C",
      "Cell Constant": "Adjustable",
      "Conductivity Cell": "Platinum DIP Type",
      "Power": "12V DC Adapter, 230V ±10% AC, 50 Hz",
      "Dimensions": "195x225x63 (L x B x H)",
      "Weight": "2kg"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-5.pdf",
    models: [
      {
        id: "ale-877",
        name: "Auto Conductivity Temp Meter",
        modelNumber: "ALE-877",
        description: "Solid state instrument for precise Conductivity and Temperature measurements.",
        image: "/images/products/Auto-conductivity-temp-meter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-5.pdf",
        features: [
          "Highly Stable & Accurate",
          "Easy to operate & user friendly",
          "Using Latest Microcontroller",
          "Auto Temperature Compensation Facility",
          "Auto Ranging Facility",
          "Cell Constant Measurement & Adjustment facility",
          "Alphanumeric LCD 16x2"
        ],
        accessories: [
          "Conductivity Cell",
          "Temperature Probe.",
          "Operation Manual",
          "Dust Cover",
          "Conductivity Cell Stand",
          "12V DC Adaptor"
        ],
        specs: {
          "Display": "Alphanumeric LCD 16x2",
          "Measurement": "Conductivity & Temperature",
          "Range": "Five Ranges:- 0-200 µS/cm, 0-2 mS/cm, 0-20 mS/cm, 0-200 mS/cm",
          "Range Selection": "Automatic in 5 Auto Range",
          "Resolution": "0.1 µS/cm, 0.1°C",
          "Accuracy": "±0.5% FS ±1Digit",
          "Temperature Compensation": "Automatic : 0 to 50°C",
          "Cell Constant": "Adjustable",
          "Conductivity Cell": "Platinum DIP Type",
          "Power": "12V DC Adapter, 230V ±10% AC, 50 Hz",
          "Dimensions": "195x225x63 (L x B x H)",
          "Weight": "2kg"
        }
      }
    ]
  },
  {
    slug: "single-beam-spectrophotometer",
    name: "Microprocessor Single-Beam Spectrophotometer",
    desc: "Advanced wavelength analysis",
    icon: Layers,
    category: "Analytical",
    mainImage: "/images/products/Microprocessor-single-beam-spectrophotometer.jpeg",
    overview: "Spectrophotometer models are designed for reliable continuous operation. It is easy to use, thoroughly reliable and above all low cost. Features C-T Single Beam, Grating 1200 lines/mm optical system.",
    applications: [
      "Medical/pharmaceutical",
      "Industry environmental Monitoring",
      "Commodity Inspection",
      "Food Inspection",
      "Agricultural Chemistry",
      "Teaching in Colleges & Universities",
      "Metallurgy",
      "Geology",
      "Machine Manufacturing",
      "Petrochemical Industries",
      "Water and Waste water Labs",
      "Food and Beverage Labs"
    ],
    features: [
      "Monochromator with holographic flashing grating",
      "High wavelength precision & good monochromaticity",
      "Sample compartment equipped with 50 mm cell holder",
      "Direct concentration read-out facility",
      "4 LCD Display",
      "Silicon Photodiode Detector"
    ],
    accessories: [
      "Main Instrument : 1 Unit",
      "Operational Manual : 1 No.",
      "Power cable : 1 No.",
      "Glass Cell 10 mm : 4 no."
    ],
    specs: {
      "Model": "ALE-650",
      "Optical System": "C-T Single Beam, Grating 1200 lines/mm",
      "Wavelength Range": "320–1020 nm",
      "Spectral Bandwidth": "2 nm",
      "Wavelength Interval": "1 nm",
      "Wavelength Accuracy": "±2 nm",
      "Wavelength Repeatability": "≤1 nm",
      "Photometric Accuracy": "±1%T",
      "Photometric Repeatability": "0.5%T",
      "Photometric Range": "0 – 1.999A, 0 – 199.9%T",
      "Stray Light": "≤0.3%T @ 340 nm",
      "Stability": "±0.004A/h @ 500 nm",
      "Display": "4 LCD",
      "Photometric Mode": "T, A, C",
      "Detector": "Si Photodiode",
      "Light Source": "Tungsten lamp",
      "Power Requirement": "AC (220V/50Hz)",
      "Dimensions": "450 × 520 × 320 mm",
      "Weight": "10 kg"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-4.pdf",
    models: [
      {
        id: "ale-650",
        name: "Microprocessor Single-Beam Spectrophotometer",
        modelNumber: "ALE-650",
        description: "Reliable single-beam spectrophotometer for continuous laboratory operation.",
        image: "/images/products/Microprocessor-single-beam-spectrophotometer.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-4.pdf",
        features: [
          "Monochromator with holographic flashing grating",
          "High wavelength precision & low stray light",
          "Sample compartment with 50 mm cell holder",
          "Direct concentration read-out function"
        ],
        accessories: [
          "Main Instrument : 1 Unit",
          "Operational Manual : 1 No.",
          "Power cable : 1 No.",
          "Glass Cell 10 mm : 4 no."
        ],
        specs: {
          "Optical System": "C-T Single Beam, Grating 1200 lines/mm",
          "Wavelength Range": "320–1020 nm",
          "Spectral Bandwidth": "2 nm",
          "Wavelength Interval": "1 nm",
          "Wavelength Accuracy": "±2 nm",
          "Wavelength Repeatability": "≤1 nm",
          "Photometric Accuracy": "±1%T",
          "Photometric Repeatability": "0.5%T",
          "Photometric Range": "0 – 1.999A, 0 – 199.9%T",
          "Stray Light": "≤0.3%T @ 340 nm",
          "Stability": "±0.004A/h @ 500 nm",
          "Display": "4 LCD",
          "Photometric Mode": "T, A, C",
          "Detector": "Si Photodiode",
          "Light Source": "Tungsten lamp",
          "Power Requirement": "AC (220V/50Hz)",
          "Dimensions": "450 × 520 × 320 mm",
          "Weight": "10 kg"
        }
      }
    ]
  },
  {
    slug: "photo-colorimeter",
    name: "Auto Zero Photo Colorimeter",
    desc: "Superior quality colorimetric analysis",
    icon: Pipette,
    category: "Analytical",
    mainImage: "/images/products/Auto-zero-photocolorimeter.jpeg",
    overview: "The company provides the superior quality of Photo Colorimeter in the national as well as international market. Microprocessor and Digital Photo Colorimeters are the finest colorimeters that combine convenience in operation with high precision & accuracy in analysis. In addition to this, they are considered to be one of the major Photoelectric Colorimeter manufacturers and exporters in India. High standard glass filters covering complete visible range of 400 to 700 nm are mounted on a rotating disc. Highly sensitive photo sensor and use of latest IC technology makes the instruments highly rugged, accurate & economical in maintenance. A minimum sample volume of 1ml is required to carry out the analysis & latest microcontroller technology to give results in the form of Abs. It is extremely useful for blood chemistries in chemical / clinical labs, pharmaceutical industries, medicine plants, water treatment plants, agricultural universities etc.",
    applications: ["Clinical and chemical laboratories", "Pharmaceutical industries", "Water treatment plants", "Agricultural universities"],
    features: [
      "Using Latest Microcontroller",
      "1ml sample volume",
      "Range from 400 to 700nm",
      "Auto Zero Facility",
      "Highly Stable & Accurate",
      "Direct readout of absorbance",
      "Easy to operate & user friendly",
      "Long life photo diode detector",
      "Battery Backup Facility available in Model 509"
    ],
    accessories: [
      "Test Tube Set of 5",
      "Dust Cover",
      "Instruction Manual",
      "Battery Backup Facility available in Model 509"
    ],
    specs: {
      "High Std. Glass Filters": "8 Filters",
      "Minimum Volume": "1 ml",
      "Display": "3 Digit LED",
      "Range": "400 – 700 nm",
      "Output": "OD : 0 to 1.99",
      "Resolution": "OD : 0.01",
      "Auto Zero Facility": "Available",
      "Accuracy": "± 0.5% FSI",
      "Detector": "Photo Diode",
      "Light Source": "3.5v, 100mA, White LED",
      "Power": "230 V ± 10% AC, 50Hz",
      "Dimensions": "195 X 230 X 95 (L x B x H)",
      "Weight": "3 Kg. (Approx.)"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-3.pdf",
    models: [
      {
        id: "ale-508",
        name: "Auto Zero Photo Colorimeter",
        modelNumber: "ALE-508",
        description: "Standard model with 8 filters and auto zero facility.",
        image: "/images/products/Auto-zero-photocolorimeter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-3.pdf",
        features: [
          "Using Latest Microcontroller",
          "1ml sample volume",
          "Range from 400 to 700nm",
          "Auto Zero Facility",
          "Highly Stable & Accurate",
          "Direct readout of absorbance"
        ],
        accessories: [
          "Test Tube Set of 5",
          "Dust Cover",
          "Instruction Manual"
        ],
        specs: {
          "High Std. Glass Filters": "8 Filters",
          "Minimum Volume": "1 ml",
          "Display": "3 Digit LED",
          "Range": "400 – 700 nm",
          "Output": "OD : 0 to 1.99",
          "Resolution": "OD : 0.01",
          "Auto Zero Facility": "Available",
          "Accuracy": "± 0.5% FSI",
          "Detector": "Photo Diode",
          "Light Source": "3.5v, 100mA, White LED",
          "Power": "230 V ± 10% AC, 50Hz",
          "Dimensions": "195 X 230 X 95 (L x B x H)",
          "Weight": "3 Kg. (Approx.)",
          "Battery Backup Facility": "---"
        }
      },
      {
        id: "ale-509",
        name: "Auto Zero Photo Colorimeter (Battery Backup)",
        modelNumber: "ALE-509",
        description: "Advanced model with built-in battery backup for uninterrupted analysis.",
        image: "/images/products/Auto-zero-photocolorimeter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-3.pdf",
        features: [
          "Using Latest Microcontroller",
          "1ml sample volume",
          "Range from 400 to 700nm",
          "Auto Zero Facility",
          "Highly Stable & Accurate",
          "Direct readout of absorbance",
          "Battery Backup Facility"
        ],
        accessories: [
          "Test Tube Set of 5",
          "Dust Cover",
          "Instruction Manual",
          "Built-in Battery"
        ],
        specs: {
          "High Std. Glass Filters": "8 Filters",
          "Minimum Volume": "1 ml",
          "Display": "3 Digit LED",
          "Range": "400 – 700 nm",
          "Output": "OD : 0 to 1.99",
          "Resolution": "OD : 0.01",
          "Auto Zero Facility": "Available",
          "Accuracy": "± 0.5% FSI",
          "Detector": "Photo Diode",
          "Light Source": "3.5v, 100mA, White LED",
          "Power": "230 V ± 10% AC, 50Hz",
          "Dimensions": "195 X 230 X 95 (L x B x H)",
          "Weight": "3 Kg. (Approx.)",
          "Battery Backup Facility": "With Battery Backup"
        }
      }
    ]
  },
  {
    slug: "melting-boiling-point-apparatus",
    name: "Digital Melting / Boiling Point Apparatus",
    desc: "Precision determination of melting & boiling points",
    icon: Thermometer,
    category: "Analytical",
    mainImage: "/images/products/melting-boiling-point-apparatus.png",
    overview: "This is a compact instrument designed for accurate determinations of melting points of solid samples and boiling point of liquid samples. The apparatus consists of in-built magnetic stirrer, an electronic controller with indicator for precisely adjusting the rate of heating of silicon oil-bath, an ON/OFF switch, a pilot lamp, with magnifier, a glare free background illuminator, a high/low range temperature selector switch and digital temperature indicator with PT100 RTD sensor.",
    applications: ["Chemical analysis", "Quality control", "Pharmaceutical research", "Educational laboratories"],
    features: [
      "Covered cylindrical Silicon Oil Bath for safety of operator",
      "Built-in Magnetic Stirrer with electronic speed controller",
      "Electronic Controller for adjusting the heating rate",
      "Digital Display of Temperature with PT-100 Sensor",
      "Glare-free back-ground LED light with adjustable light intensity",
      "Provision for holding the melting point display when sample melts",
      "Built-in image magnifier for clear vision of sample"
    ],
    accessories: [
      "Magnetic Rotor",
      "Oil Jar",
      "Heating Assembly",
      "Silicon Oil",
      "Set of 100 Capillaries",
      "Temperature Probe"
    ],
    specs: {
      "Temperature Range": "2° above RT – 300°C",
      "Heating Rate Control": "Electronic",
      "Stirrer Speed Control": "Electronic",
      "Temperature Sensor": "PT-100",
      "Back-ground Light": "Yes, variable intensity",
      "Hold Facility": "Yes",
      "Quality Standard": "FIVE STAGES OF QUALITY CHECKING BEFORE DISPATCH"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-2.pdf",
    models: [
      {
        id: "ale-930",
        name: "Digital Melting Point Apparatus",
        modelNumber: "ALE-930",
        description: "Accurate melting point determination with 1° readability and 3 digit LED display.",
        image: "/images/products/melting-boiling-point-apparatus.png",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-2.pdf",
        features: [
          "Built-in Magnetic Stirrer",
          "Electronic Heating Rate Control",
          "Digital Display with PT-100 Sensor",
          "Glare-free background light",
          "Hold Facility"
        ],
        accessories: [
          "Magnetic Rotor",
          "Oil Jar",
          "Heating Assembly",
          "Silicon Oil",
          "Set of 100 Capillaries",
          "Temperature Probe"
        ],
        specs: {
          "Temperature Range": "2° above RT – 300°C",
          "Readability": "1°",
          "Display Type": "3 Digit LED",
          "Display Parameter": "Temperature",
          "Inbuilt Stirrer": "Yes",
          "Heating Rate Control": "Electronic",
          "Stirrer Speed Control": "Electronic",
          "Temperature Sensor": "PT-100",
          "Back-ground Light": "Yes, variable intensity",
          "Hold Facility": "Yes"
        }
      },
      {
        id: "ale-934",
        name: "Digital Melting Point Apparatus (High Resolution)",
        modelNumber: "ALE-934",
        description: "High resolution melting point determination with 0.1° readability and 4 digit LED display.",
        image: "/images/products/melting-boiling-point-apparatus.png",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-2.pdf",
        features: [
          "High Readability (0.1°)",
          "4 Digit LED Display",
          "Built-in Magnetic Stirrer",
          "Electronic Heating Rate Control",
          "Glare-free background light",
          "Hold Facility"
        ],
        accessories: [
          "Magnetic Rotor",
          "Oil Jar",
          "Heating Assembly",
          "Silicon Oil",
          "Set of 100 Capillaries",
          "Temperature Probe"
        ],
        specs: {
          "Temperature Range": "2° above RT – 300°C",
          "Readability": "0.1°",
          "Display Type": "4 Digit LED",
          "Display Parameter": "Temperature",
          "Inbuilt Stirrer": "Yes",
          "Heating Rate Control": "Electronic",
          "Stirrer Speed Control": "Electronic",
          "Temperature Sensor": "PT-100",
          "Back-ground Light": "Yes, variable intensity",
          "Hold Facility": "Yes"
        }
      }
    ]
  },
  {
    slug: "digital-conductivity-meter",
    name: "Digital Conductivity Meter",
    desc: "Reliable and accurate measurement of Electrical Conductivity (EC)",
    icon: Waves,
    category: "Analytical",
    mainImage: "/images/products/Digital_conductivity_meter.jpeg",
    overview: "Digital Conductivity Meters are reliable and accurate test instruments for measurement of Electrical Conductivity (EC) of aqueous solutions. They measure Conductivity and TDS in five ranges. The resolution is 0.1µS/cm and 0.1 ppm respectively, in the lowest range. The cell constant is flashed on a digital display and can be adjusted from the front panel. The instruments have the \"check\" facility to calibrate the instrument.\n\nConductivity Meters are ideal for monitoring salt contents in water and soluble salts in soils. They are extremely useful instruments for agriculture and soil analysis labs, swimming pools, fertilizer plants, petroleum refineries, textile plants etc.",
    applications: [
      "Agriculture and soil analysis labs",
      "Swimming pools",
      "Fertilizer plants",
      "Petroleum refineries",
      "Textile plants",
      "Water quality monitoring"
    ],
    features: [
      "Highly Stable & Accurate",
      "Cell Constant Adjustment Facility",
      "3½ Digit Display",
      "Easy to operate & user friendly",
      "ATC Facility available in Model 875"
    ],
    accessories: [
      "Conductivity Cell",
      "Cell Stand",
      "Operation Manual",
      "Dust Cover"
    ],
    specs: {
      "Model": "ALE-874 / ALE-875",
      "Display": "3½ digit LED",
      "Range": "0-200 μS, 0-2.0, 20.0, 200 & 0-1000mS",
      "Conductivity Cell": "Platinum DIP Type",
      "Resolution": "0.1 μS",
      "Accuracy": "± 1% FS ±1Digit",
      "Power Supply": "230V ±10% AC, 50 Hz",
      "Dimensions": "280x180x88 (LxBxH)",
      "Weight": "3 kg"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-2 copy.pdf",
    models: [
      {
        id: "ale-874",
        name: "Digital Conductivity Meter (Manual Temp Comp)",
        modelNumber: "ALE-874",
        description: "Digital Conductivity Meter with manual temperature compensation (0-50°C). Ideal for stable laboratory setups.",
        image: "/images/products/Digital_conductivity_meter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-2 copy.pdf",
        features: [
          "Highly Stable & Accurate",
          "Cell Constant Adjustment Facility",
          "3½ Digit Display",
          "Easy to operate & user friendly"
        ],
        accessories: [
          "Conductivity Cell",
          "Cell Stand",
          "Operation Manual",
          "Dust Cover"
        ],
        specs: {
          "Model": "ALE - 874",
          "Display": "3½ digit LED",
          "Range": "0-200 μS 0-2.0, 20.0, 200 & 0-1000mS",
          "Temperature Compensation": "Manual 0-50°C",
          "Cell Constant Adjustment": "Adjustable",
          "Conductivity Cell": "Platinum DIP Type",
          "Resolution": "0.1 μS",
          "Accuracy": "± 1% FS ±1Digit",
          "Power Supply": "230V ±10% AC, 50 Hz",
          "Dimension": "280x180x88 (LxBxH)",
          "Weight": "3 kg"
        }
      },
      {
        id: "ale-875",
        name: "Digital Conductivity Meter (Auto Temp Comp)",
        modelNumber: "ALE-875",
        description: "Digital Conductivity Meter equipped with Automatic Temperature Compensation (ATC 0-50°C) for maximum operational speed and accuracy.",
        image: "/images/products/Digital_conductivity_meter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE-2 copy.pdf",
        features: [
          "Highly Stable & Accurate",
          "Cell Constant Adjustment Facility",
          "3½ Digit Display",
          "Easy to operate & user friendly",
          "ATC Facility (0-50°C)"
        ],
        accessories: [
          "Conductivity Cell",
          "Cell Stand",
          "Operation Manual",
          "Dust Cover"
        ],
        specs: {
          "Model": "ALE - 875",
          "Display": "3½ digit LED",
          "Range": "0-200 μS 0-2.0, 20.0, 200 & 0-1000mS",
          "Temperature Compensation": "ATC 0-50°C",
          "Cell Constant Adjustment": "Adjustable",
          "Conductivity Cell": "Platinum DIP Type",
          "Resolution": "0.1 μS",
          "Accuracy": "± 1% FS ±1Digit",
          "Power Supply": "230V ±10% AC, 50 Hz",
          "Dimension": "280x180x88 (LxBxH)",
          "Weight": "3 kg"
        }
      }
    ]
  },
  {
    slug: "digital-photo-colorimeter",
    name: "Digital Photo Colorimeter",
    desc: "Convenience in operation with high precision and accuracy of Absorbance analysis",
    icon: Pipette,
    category: "Analytical",
    mainImage: "/images/products/Digital_PhotoColorimeter.jpeg",
    overview: "Digital Photo Colorimeters are the finest colorimeters that combine convenience in operation with high precision & accuracy of Absorbance analysis. High standard glass filters covering 400-700 nm are mounted on a rotating disc. Highly sensitive photo sensor and use of latest IC technology makes the instruments highly rugged. A minimum sample volume of 1ml is used. In-built shutter increases the life of the photocell.\n\nIt is extremely useful for blood chemistries in chemical/clinical labs, pharmaceutical industries, medicine plants, water treatment plants, agricultural universities etc.",
    applications: [
      "Blood chemistry in chemical/clinical labs",
      "Pharmaceutical industries",
      "Medicine plants",
      "Water treatment plants",
      "Agricultural universities"
    ],
    features: [
      "1ml sample volume",
      "Range from 400 to 700nm",
      "Long life photo diode detector",
      "Highly stable & accurate",
      "Easy to operate & user friendly",
      "Direct readout of absorbance",
      "Battery Backup Facility available in Model 506"
    ],
    accessories: [
      "Test Tube Set of 5",
      "Dust Cover",
      "Instruction Manual"
    ],
    specs: {
      "Model": "ALE-505 / ALE-506",
      "Minimum Volume": "1 ml",
      "Display": "3 Digit LED",
      "Range": "400 - 700 nm",
      "Output": "OD : 0 to 1.99",
      "Resolution": "OD : 0.01",
      "Accuracy": "± 0.5% FSI",
      "Detector": "Photo Diode",
      "Filters": "8 filters",
      "Light Source": "3.5v, 100mA, White LED",
      "Power": "230 V ± 10% AC, 50Hz",
      "Dimensions": "195 X 230 X 95 (L x B x H)",
      "Weight": "3 Kg. (Approx.)"
    },
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE copy.pdf",
    models: [
      {
        id: "ale-505",
        name: "Digital Photo Colorimeter (Standard)",
        modelNumber: "ALE-505",
        description: "Standard model featuring 8 filters, a minimum volume of 1 ml, and a high-precision white LED light source.",
        image: "/images/products/Digital_PhotoColorimeter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE copy.pdf",
        features: [
          "1ml sample volume",
          "Range from 400 to 700nm",
          "Long life photo diode detector",
          "Highly stable & accurate",
          "Easy to operate & user friendly",
          "Direct readout of absorbance"
        ],
        accessories: [
          "Test Tube Set of 5",
          "Dust Cover",
          "Instruction Manual"
        ],
        specs: {
          "Model": "ALE - 505",
          "Minimum Volume": "1 ml",
          "Display": "3 Digit LED",
          "Range": "400 - 700 nm",
          "Output": "OD : 0 to 1.99",
          "Resolution": "OD : 0.01",
          "Accuracy": "± 0.5% FSI",
          "Detector": "Photo Diode",
          "Filters": "8 filters",
          "Light Source": "3.5v, 100mA, White LED",
          "Power": "230 V ± 10% AC, 50Hz",
          "Dimensions": "195 X 230 X 95 (L x B x H)",
          "Weight": "3 Kg. (Approx.)",
          "Battery Backup Facility": "---"
        }
      },
      {
        id: "ale-506",
        name: "Digital Photo Colorimeter (Battery Backup)",
        modelNumber: "ALE-506",
        description: "Advanced model with built-in battery backup support, allowing seamless on-field testing and operation during power failures.",
        image: "/images/products/Digital_PhotoColorimeter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE copy.pdf",
        features: [
          "1ml sample volume",
          "Range from 400 to 700nm",
          "Long life photo diode detector",
          "Highly stable & accurate",
          "Easy to operate & user friendly",
          "Direct readout of absorbance",
          "Battery Backup Facility"
        ],
        accessories: [
          "Test Tube Set of 5",
          "Dust Cover",
          "Instruction Manual"
        ],
        specs: {
          "Model": "ALE - 506",
          "Minimum Volume": "1 ml",
          "Display": "3 Digit LED",
          "Range": "400 - 700 nm",
          "Output": "OD : 0 to 1.99",
          "Resolution": "OD : 0.01",
          "Accuracy": "± 0.5% FSI",
          "Detector": "Photo Diode",
          "Filters": "8 filters",
          "Light Source": "3.5v, 100mA, White LED",
          "Power": "230 V ± 10% AC, 50Hz",
          "Dimensions": "195 X 230 X 95 (L x B x H)",
          "Weight": "3 Kg. (Approx.)",
          "Battery Backup Facility": "With Battery Backup"
        }
      }
    ]
  },
  {
    slug: "digital-tds-meter",
    name: "Digital TDS Meter",
    desc: "Reliable and accurate measurement of TDS in aqueous solutions",
    icon: Waves,
    category: "Analytical",
    mainImage: "/images/products/Digital_TDS_meter.jpeg",
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE 885.pdf",
    overview: "Digital TDS Meters are reliable and accurate test instruments for measurement of TDS of aqueous solutions. They measure TDS in five ranges. The cell constant is flashed on a digital display & can be adjusted. The instruments have the \"Check\" facility to calibrate the instrument. These instruments are ideal for monitoring salt contents in water and soluble salts in soils. They are extremely useful instruments for agriculture and soil analysis labs, swimming pools, fertilizer plants, petroleum refineries, textile plants etc.",
    applications: [
      "Agriculture and soil analysis labs",
      "Swimming pools",
      "Fertilizer plants",
      "Petroleum refineries",
      "Textile plants",
      "Water and soil salt monitoring"
    ],
    features: [
      "Rugged, reliable & easy to operate",
      "Highly Stable & Accurate",
      "User friendly",
      "Cell Constant adjustable",
      "3 ½ Digit LED display",
      "Platinum DIP type measuring cell",
      "Resolution is 0.1 ppm respectively"
    ],
    accessories: [
      "TDS Cell",
      "Cell Stand",
      "Operation Manual",
      "Dust Cover"
    ],
    specs: {
      "Model": "ALE-885",
      "Display": "3 ½ Digit LED",
      "Measurement": "TDS",
      "Range": "0 to 200 ppm, 0 to 2000 ppm, 0 to 20.00 ppt (20,000 ppm), 0 to 200.0 ppt (2,00,000 ppm) & 0 to 1000 ppt (10,00,000 ppm)",
      "Resolution": "0.1 ppm",
      "Accuracy": "±2% FS ±1 Digit",
      "Temperature Compensation": "Manual : 0° to 50°C",
      "Cell Constant": "Adjustable on Digital Display",
      "Measuring Cell": "Platinum DIP Type",
      "Power": "230V ±10% AC, 50 Hz",
      "Dimensions": "280x180x88 mm (L x B x H)",
      "Weight": "3kg"
    },
    models: [
      {
        id: "ale-885",
        name: "Digital TDS Meter",
        modelNumber: "ALE-885",
        description: "Digital TDS Meter designed for reliable and accurate measurement of TDS in aqueous solutions across five ranges.",
        image: "/images/products/Digital_TDS_meter.jpeg",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE 885.pdf",
        features: [
          "Rugged, reliable & easy to operate",
          "Highly Stable & Accurate",
          "User friendly",
          "Cell Constant adjustable",
          "3 ½ Digit LED display",
          "Platinum DIP type measuring cell",
          "Resolution is 0.1 ppm respectively"
        ],
        accessories: [
          "TDS Cell",
          "Cell Stand",
          "Operation Manual",
          "Dust Cover"
        ],
        specs: {
          "Display": "3 ½ Digit LED",
          "Measurement": "TDS",
          "Range": "0 to 200 ppm, 0 to 2000 ppm, 0 to 20.00 ppt (20,000 ppm), 0 to 200.0 ppt (2,00,000 ppm) & 0 to 1000 ppt (10,00,000 ppm)",
          "Resolution": "0.1 ppm",
          "Accuracy": "±2% FS ±1 Digit",
          "Temperature Compensation": "Manual : 0° to 50°C",
          "Cell Constant": "Adjustable on Digital Display",
          "Measuring Cell": "Platinum DIP Type",
          "Power": "230V ±10% AC, 50 Hz",
          "Dimensions": "280x180x88 mm (L x B x H)",
          "Weight": "3kg"
        }
      }
    ]
  },
  {
    slug: "digital-colony-counter",
    name: "Digital Colony Counter",
    desc: "Designed for quick and accurate counting of bacterial and mould colonies in petri dishes",
    icon: Microscope,
    category: "Analytical",
    brochure: "/brochures/(ALE)-PRODUCT CATALOGUE 552:553.pdf",
    overview: "Digital & Microprocessor Colony Counter is designed for quick and accurate counting of bacterial and mould colonies in petri dishes. Simply place the petri dish on the illuminated pad and touch the dish with the pen provided to mark each colony in turn. This causes a count to be registered on the digital display and an audible tone confirms each count made. Marking the dish with the pen avoids missing colonies or double counting. The digital count on the display can be reset manually any time by pressing reset key provided. Optimum viewing of colonies is aided by peripheral glare free illuminations. An Integral magnifying glass provides for easier counting of small colonies.",
    applications: [
      "Bacterial colony counting",
      "Mould colony counting in petri dishes",
      "Clinical and microbiological laboratories",
      "Quality control laboratories"
    ],
    features: [
      "Rugged and reliable",
      "Easy to operate & User friendly",
      "Readout 0 - 9999 (Model No-552)",
      "Readout 0 - 999999 (Model No-553)",
      "Auto marker pen",
      "Uniform glare free illumination",
      "Audible confirmation of each count",
      "Wolfhugel glass grid with focusing facility",
      "110 mm dia magnifying glass"
    ],
    accessories: [
      "Marking Pen",
      "Magnifying Lens",
      "Adaptor",
      "Operation Manual",
      "Dust Cover"
    ],
    specs: {
      "Model": "ALE-552 / ALE-553",
      "Dish Size": "110 mm",
      "Magnification": "1.7x",
      "Power": "230 V, ±10% AC, 50 Hz, 40W",
      "Dimensions": "260 x 220 x 168 mm (L x B x H) (Approx.)",
      "Weight": "3 Kg (Approx.)",
      "Quality Standard": "Five Stages of Quality Checking Before Dispatch"
    },
    models: [
      {
        id: "ale-552",
        name: "Digital Colony Counter (4-Digit Display)",
        modelNumber: "ALE-552",
        description: "Standard colony counter with 4-digit display registering up to 9999 max count.",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE 552:553.pdf",
        features: [
          "Rugged and reliable",
          "Easy to operate & User friendly",
          "Readout 0 - 9999",
          "Auto marker pen",
          "Uniform glare free illumination",
          "Audible confirmation of each count",
          "Wolfhugel glass grid with focusing facility",
          "110 mm dia magnifying glass"
        ],
        accessories: [
          "Marking Pen",
          "Magnifying Lens",
          "Adaptor",
          "Operation Manual",
          "Dust Cover"
        ],
        specs: {
          "Digital Display": "4 Digits",
          "Max. Counts": "9999 max. Count",
          "Dish Size": "110 mm",
          "Magnification": "1.7x",
          "Power": "230 V, ±10% AC, 50 Hz, 40W",
          "Dimensions": "260 x 220 x 168 mm (L x B x H) (Approx.)",
          "Weight": "3 Kg (Approx.)"
        }
      },
      {
        id: "ale-553",
        name: "Digital Colony Counter (6-Digit Display)",
        modelNumber: "ALE-553",
        description: "High capacity colony counter with 6-digit display registering up to 999999 max count.",
        brochure: "/brochures/(ALE)-PRODUCT CATALOGUE 552:553.pdf",
        features: [
          "Rugged and reliable",
          "Easy to operate & User friendly",
          "Readout 0 - 999999",
          "Auto marker pen",
          "Uniform glare free illumination",
          "Audible confirmation of each count",
          "Wolfhugel glass grid with focusing facility",
          "110 mm dia magnifying glass"
        ],
        accessories: [
          "Marking Pen",
          "Magnifying Lens",
          "Adaptor",
          "Operation Manual",
          "Dust Cover"
        ],
        specs: {
          "Digital Display": "6 Digits",
          "Max. Counts": "999999 max. Count",
          "Dish Size": "110 mm",
          "Magnification": "1.7x",
          "Power": "230 V, ±10% AC, 50 Hz, 40W",
          "Dimensions": "260 x 220 x 168 mm (L x B x H) (Approx.)",
          "Weight": "3 Kg (Approx.)"
        }
      }
    ]
  }
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
