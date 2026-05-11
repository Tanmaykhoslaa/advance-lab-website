import { Factory, ShieldCheck, Globe2, User2, MapPin, Briefcase, FlaskConical, Wrench } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const profileData = [
  { icon: User2, label: "Name of CEOs", value: "Mr. Abhishek Suri & Mrs. Aashima Suri" },
  { icon: Briefcase, label: "Nature of Business", value: "Manufacturer, Exporter & Supplier of Scientific & Laboratory Instruments" },
  { icon: MapPin, label: "Market Covered", value: "India, Nepal, Sri Lanka, Sudan, Bangladesh, Zordan, England, Nigeria, Brazil & USA" },
];

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className || ""}`}
    >
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="h-full w-full bg-white rounded-[2rem] p-8 sm:p-10 border border-[hsl(215_20%_90%)] shadow-soft group hover:shadow-2xl hover:border-[hsl(43_72%_49%/0.6)] transition-all duration-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {children}
      </div>
    </motion.div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[hsl(215_20%_96%)] relative overflow-hidden perspective-[1000px]">
      {/* 3D Floating background elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-[hsl(43_72%_49%/0.05)] blur-[80px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[hsl(222_55%_14%/0.04)] blur-[60px] pointer-events-none" 
      />
      
      <div className="container relative z-10">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow justify-center mb-6">About Our Legacy</p>
            <h2 className="text-4xl sm:text-6xl font-black text-[hsl(222_55%_18%)] mb-8 tracking-tight">
              Advance Lab <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(43_72%_49%)] to-[hsl(43_80%_60%)]">Equipments</span>
            </h2>
            <p className="text-[hsl(220_15%_45%)] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              Situated at Panchkula, Haryana, our company reaches new heights under the visionary leadership of 
              <span className="font-bold text-[hsl(222_55%_14%)]"> Mr. Abhishek Suri & Mrs. Aashima Suri</span>. 
              We set benchmarks in the quality-conscious market through continuous innovation and excellence.
            </p>
          </motion.div>
        </div>

        {/* Core Pillars - 3D Tilt Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32" style={{ perspective: "1200px" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <TiltCard>
              <div className="h-16 w-16 rounded-2xl bg-[hsl(222_55%_14%)] flex items-center justify-center mb-8 shadow-xl group-hover:bg-[hsl(43_72%_49%)] group-hover:rotate-6 transition-all duration-500" style={{ transform: "translateZ(30px)" }}>
                <Factory className="h-8 w-8 text-[hsl(43_72%_60%)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-4" style={{ transform: "translateZ(20px)" }}>Infrastructure</h3>
              <p className="text-base text-[hsl(220_15%_48%)] leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                Our manufacturing unit features advanced laboratory facilities and a dedicated R&D wing, enabling groundbreaking instrument production while maintaining consistent quality.
              </p>
            </TiltCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <TiltCard>
              <div className="h-16 w-16 rounded-2xl bg-[hsl(222_55%_14%)] flex items-center justify-center mb-8 shadow-xl group-hover:bg-[hsl(43_72%_49%)] group-hover:-rotate-6 transition-all duration-500" style={{ transform: "translateZ(30px)" }}>
                <ShieldCheck className="h-8 w-8 text-[hsl(43_72%_60%)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-4" style={{ transform: "translateZ(20px)" }}>Quality Control</h3>
              <p className="text-base text-[hsl(220_15%_48%)] leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                From raw material selection to finished goods, every aspect is guided by strict QC policies. Instruments undergo rigorous testing for assembly and performance.
              </p>
            </TiltCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <TiltCard>
              <div className="h-16 w-16 rounded-2xl bg-[hsl(222_55%_14%)] flex items-center justify-center mb-8 shadow-xl group-hover:bg-[hsl(43_72%_49%)] group-hover:rotate-6 transition-all duration-500" style={{ transform: "translateZ(30px)" }}>
                <Globe2 className="h-8 w-8 text-[hsl(43_72%_60%)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-4" style={{ transform: "translateZ(20px)" }}>Global Network</h3>
              <p className="text-base text-[hsl(220_15%_48%)] leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                We thrive on a well-organized network spanning nations including Nepal, Sri Lanka, Bangladesh, USA, and beyond, recognized as a premier Exporter.
              </p>
            </TiltCard>
          </motion.div>
        </div>

        {/* Detailed Commitments Section */}
        <div className="max-w-6xl mx-auto mb-32 space-y-24">
          
          {/* R&D */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[hsl(222_55%_14%)] flex items-center justify-center shadow-lg">
                  <FlaskConical className="h-6 w-6 text-[hsl(43_72%_60%)]" />
                </div>
                <h3 className="text-3xl font-bold text-[hsl(222_55%_18%)]">Research & Development</h3>
              </div>
              <div className="space-y-4 text-[hsl(220_15%_45%)] text-lg leading-relaxed">
                <p>
                  Advance Lab Equipments has one of the finest in-house Research & Development and Product Development facilities. Company’s Research & Development department is engaged continuously in development of new products and improvement in the existing ones.
                </p>
                <p>
                  In order to be competitive, the R&D team continuously works for technological development of product range. Advance Lab Equipments has a most modern in house R&D Lab. We have been adding a few instruments every year to our range of products.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[hsl(222_55%_14%)] to-[hsl(222_50%_20%)] p-8 flex items-center justify-center">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
               <FlaskConical className="w-48 h-48 text-[hsl(43_72%_49%)] opacity-80 animate-float" />
            </motion.div>
          </div>

          {/* After Sales */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[hsl(43_72%_49%)] to-[#ffe680] p-8 flex items-center justify-center md:order-1 order-2">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "24px 24px" }} />
               <Wrench className="w-48 h-48 text-[hsl(222_55%_14%)] opacity-80 animate-float" style={{ animationDelay: "1s" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="md:order-2 order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[hsl(43_72%_49%)] flex items-center justify-center shadow-lg">
                  <Wrench className="h-6 w-6 text-[hsl(222_55%_14%)]" />
                </div>
                <h3 className="text-3xl font-bold text-[hsl(222_55%_18%)]">After Sales Services</h3>
              </div>
              <div className="space-y-4 text-[hsl(220_15%_45%)] text-lg leading-relaxed">
                <p>
                  We are very keen that the end users of our instruments should be fully satisfied with the quality and performance of our products. For this purpose, we ensure timely after sales services to all the end users of our products.
                </p>
                <p>
                  Many of our dealers have sent their Service Engineers to our factory for training on After Sales Services. Besides this, our Service Engineers visit all our dealers at least once in a month within India to sort out the problems of their customers, if any.
                </p>
                <p>
                  As a result, the users of our instruments are fully satisfied with the quality of the instruments and our "After Sales Services". They have been recommending to their known friends for use of our instruments. This has resulted in substantial increase in demand for our products.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quality Control */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[hsl(222_55%_14%)] flex items-center justify-center shadow-lg">
                  <ShieldCheck className="h-6 w-6 text-[hsl(43_72%_60%)]" />
                </div>
                <h3 className="text-3xl font-bold text-[hsl(222_55%_18%)]">Quality Control</h3>
              </div>
              <div className="space-y-4 text-[hsl(220_15%_45%)] text-lg leading-relaxed">
                <p>
                  Advance Lab Equipments has a well designed control system to monitor all the manufacturing stages. This ensures the desired and consistent quality of the products being manufactured. All the operating procedures are standardized, documented and validated.
                </p>
                <p>
                  All analytical, laboratory, pharmaceutical, clinical and Field Instruments manufactured by Advance Lab Equipments are checked at various stages of manufacturing to ensure that their quality is maintained. In case of even a minor defect found, the same is returned to production floor for rectification.
                </p>
                <p className="font-semibold text-[hsl(222_55%_14%)] bg-[hsl(43_72%_49%/0.1)] p-4 rounded-xl border border-[hsl(43_72%_49%/0.2)]">
                  Advance Lab Equipments is an ISO 9001-2015 certified company. Every single product of our company like UV-Visible Spectrophotometer, Flame Photometer, pH Meters, Colorimeters, Colony Counters, etc. are examined at each stage like assembly, testing, outlook, performance of the instrument, and its packing.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[hsl(222_55%_14%)] to-[hsl(222_50%_20%)] p-8 flex items-center justify-center">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
               <ShieldCheck className="w-48 h-48 text-[hsl(43_72%_49%)] opacity-80 animate-float" style={{ animationDelay: "2s" }} />
            </motion.div>
          </div>

        </div>

        {/* Company Profile Table - 3D Hover & Float */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-[hsl(215_20%_90%)] shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500"
        >
          <div className="bg-gradient-to-r from-[hsl(222_55%_14%)] to-[hsl(222_50%_20%)] px-10 py-8 relative overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" 
            />
            <h3 className="text-2xl font-bold text-white flex items-center gap-4 relative z-10">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-inner">
                <Briefcase className="h-6 w-6 text-[hsl(43_72%_49%)]" /> 
              </div>
              Company Profile
            </h3>
          </div>
          <div className="divide-y divide-[hsl(215_20%_94%)] relative z-10 bg-white">
            {profileData.map((item, i) => (
              <motion.div 
                whileHover={{ x: 8, backgroundColor: "hsl(215 20% 98%)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={item.label} 
                className="grid sm:grid-cols-3 items-center px-10 py-8 cursor-default"
              >
                <div className="flex items-center gap-4 text-[hsl(222_55%_18%)] font-bold text-lg mb-2 sm:mb-0">
                  <div className="h-10 w-10 rounded-full bg-[hsl(43_72%_49%/0.1)] flex items-center justify-center shrink-0 border border-[hsl(43_72%_49%/0.2)]">
                    <item.icon className="h-4 w-4 text-[hsl(43_72%_49%)]" />
                  </div>
                  {item.label}
                </div>
                <div className="sm:col-span-2 text-[hsl(220_15%_45%)] text-base font-medium leading-relaxed">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
