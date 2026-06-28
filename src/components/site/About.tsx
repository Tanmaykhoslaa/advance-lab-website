import { useState, useEffect } from "react";
import { Factory, ShieldCheck, Globe2, User2, MapPin, Briefcase, FlaskConical, Wrench, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";

const profileData = [
  { icon: User2, label: "Name of CEOs", value: "Mr. Abhishek Suri & Mrs. Aashima Suri" },
  { icon: Briefcase, label: "Nature of Business", value: "Manufacturer, Exporter & Supplier of Scientific & Laboratory Instruments" },
  { icon: MapPin, label: "Market Covered", value: "India, Nepal, Sri Lanka, Sudan, Bangladesh, Zordan, England, Nigeria, Brazil & USA" },
];

const Interactive3DCard = ({
  children,
  isActive,
  style,
  onClick,
  className
}: {
  children: React.ReactNode;
  isActive: boolean;
  style: any;
  onClick?: () => void;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], isActive ? ["8deg", "-8deg"] : ["0deg", "0deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], isActive ? ["-8deg", "8deg"] : ["0deg", "0deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
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
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`absolute inset-0 w-full h-full rounded-[2.5rem] p-8 sm:p-10 border transition-all duration-300 ${className || ""}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const commitmentsData = [
    {
      id: 0,
      title: "Research & Development",
      icon: FlaskConical,
      content: (
        <>
          <div>
            <div className="h-12 w-12 rounded-xl bg-[hsl(43_72%_49%)] flex items-center justify-center mb-6 shadow-md shadow-[hsl(43_72%_49%/0.2)]">
              <FlaskConical className="h-6 w-6 text-[hsl(222_55%_14%)]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Research & Development</h3>
            <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
              <p>
                Advance Lab Equipments has one of the finest in-house Research & Development and Product Development facilities. Our R&D department is engaged continuously in development of new products and improvement in the existing ones.
              </p>
              <p>
                In order to be competitive, the R&D team continuously works for technological development of product range. We have been adding a few instruments every year to our range.
              </p>
            </div>
          </div>
          <div className="text-[hsl(43_72%_60%)] font-extrabold text-xs uppercase tracking-widest mt-4">
            Innovation & Excellence
          </div>
        </>
      ),
      bgColor: "bg-gradient-to-br from-[hsl(222_55%_14%)] to-[hsl(222_50%_20%)]",
      borderColor: "border-[hsl(222_55%_10%)]",
      textColor: "text-white"
    },
    {
      id: 1,
      title: "After Sales Services",
      icon: Wrench,
      content: (
        <>
          <div>
            <div className="h-12 w-12 rounded-xl bg-[hsl(222_55%_14%)] flex items-center justify-center mb-6 shadow-md shadow-[hsl(222_55%_14%/0.15)]">
              <Wrench className="h-6 w-6 text-[hsl(43_72%_60%)]" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-4 tracking-tight">After Sales Services</h3>
            <div className="space-y-4 text-[hsl(220_15%_45%)] text-sm sm:text-base leading-relaxed">
              <p>
                We are very keen that the end users of our instruments should be fully satisfied. For this purpose, we ensure timely after sales services to all the end users of our products.
              </p>
              <p>
                Many of our dealers have sent their Service Engineers to our factory for training. Our Service Engineers visit all our dealers within India at least once in a month to sort out queries.
              </p>
            </div>
          </div>
          <div className="text-[hsl(43_72%_49%)] font-extrabold text-xs uppercase tracking-widest mt-4">
            Customer First Approach
          </div>
        </>
      ),
      bgColor: "bg-white",
      borderColor: "border-[hsl(215_20%_90%)]",
      textColor: "text-[hsl(222_55%_18%)]"
    },
    {
      id: 2,
      title: "Quality Control",
      icon: ShieldCheck,
      content: (
        <>
          <div>
            <div className="h-12 w-12 rounded-xl bg-[hsl(43_72%_49%)] flex items-center justify-center mb-6 shadow-md shadow-[hsl(43_72%_49%/0.2)]">
              <ShieldCheck className="h-6 w-6 text-[hsl(222_55%_14%)]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Quality Control</h3>
            <div className="space-y-3 text-white/80 text-sm sm:text-base leading-relaxed mb-4">
              <p>
                Advance Lab Equipments has a well designed control system to monitor all manufacturing stages. This ensures the desired and consistent quality of the products.
              </p>
            </div>
            <div className="font-semibold text-xs text-[hsl(43_72%_60%)] bg-white/5 p-4 rounded-2xl border border-white/10 leading-relaxed backdrop-blur-sm">
              Advance Lab Equipments is an AN ISO 9001:2015 certified company. Every single product like UV-Visible Spectrophotometer, Flame Photometer, etc. is examined at each stage.
            </div>
          </div>
          <div className="text-[hsl(43_72%_60%)] font-extrabold text-xs uppercase tracking-widest mt-2">
            AN ISO 9001:2015 Certified
          </div>
        </>
      ),
      bgColor: "bg-gradient-to-br from-[hsl(222_55%_14%)] to-[hsl(222_50%_20%)]",
      borderColor: "border-[hsl(222_55%_10%)]",
      textColor: "text-white"
    }
  ];

  const getCardStyles = (cardIndex: number) => {
    const relativeIndex = (cardIndex - currentIndex + 3) % 3;

    if (relativeIndex === 0) {
      return {
        zIndex: 30,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        rotateX: 0,
      };
    } else if (relativeIndex === 1) {
      return {
        zIndex: 20,
        x: isMobile ? 12 : 35,
        y: isMobile ? -12 : -20,
        scale: 0.92,
        opacity: 0.8,
        rotateY: -6,
        rotateX: 4,
      };
    } else {
      return {
        zIndex: 10,
        x: isMobile ? 24 : 70,
        y: isMobile ? -24 : -40,
        scale: 0.84,
        opacity: 0.5,
        rotateY: -12,
        rotateX: 8,
      };
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  };

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
        <div className="max-w-6xl mx-auto mb-32 bg-white rounded-[3rem] border border-[hsl(215_20%_90%)] shadow-2xl p-8 sm:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Navigation controls and Info */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[hsl(43_72%_49%)]">Our Pillars</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[hsl(222_55%_18%)] mt-2 tracking-tight">
                  Excellence in every detail
                </h2>
                <p className="text-[hsl(220_15%_45%)] text-sm sm:text-base leading-relaxed mt-4">
                  We strive to ensure top manufacturing standards, seamless developer services, and continuous innovation.
                </p>
              </div>

              {/* Vertical Step Selector */}
              <div className="space-y-3">
                {commitmentsData.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                        isActive
                          ? "bg-[hsl(222_55%_14%)] text-white shadow-lg"
                          : "hover:bg-[hsl(215_20%_94%)] text-[hsl(220_15%_45%)]"
                      }`}
                    >
                      <span className={`text-xs font-black tracking-wider transition-colors duration-300 ${
                        isActive ? "text-[hsl(43_72%_49%)]" : "text-[hsl(220_15%_55%)]"
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className="font-bold text-sm sm:text-base">{item.title}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeStepSelectorGlow"
                          className="absolute right-4 w-2 h-2 rounded-full bg-[hsl(43_72%_49%)] shadow-[0_0_12px_2px_hsl(43_72%_49%)]"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Chevron Controls */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="h-12 w-12 rounded-full border border-[hsl(215_20%_85%)] bg-white text-[hsl(222_55%_18%)] flex items-center justify-center hover:bg-[hsl(222_55%_14%)] hover:text-white hover:border-[hsl(222_55%_14%)] transition-all duration-300 shadow-sm"
                  aria-label="Previous Commitment"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-12 w-12 rounded-full border border-[hsl(215_20%_85%)] bg-white text-[hsl(222_55%_18%)] flex items-center justify-center hover:bg-[hsl(222_55%_14%)] hover:text-white hover:border-[hsl(222_55%_14%)] transition-all duration-300 shadow-sm"
                  aria-label="Next Commitment"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Column: 3D Perspective Card Stack */}
            <div className="lg:col-span-7 flex items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[420px] h-[480px] sm:h-[430px]" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
                {commitmentsData.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  const cardStyle = getCardStyles(idx);
                  return (
                    <Interactive3DCard
                      key={item.id}
                      isActive={isActive}
                      onClick={() => idx !== currentIndex && setCurrentIndex(idx)}
                      style={cardStyle}
                      className={`${item.bgColor} ${item.borderColor}`}
                    >
                      {item.content}
                    </Interactive3DCard>
                  );
                })}
              </div>
            </div>

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
          <div className="bg-gradient-to-r from-[hsl(222_55%_14%)] to-[hsl(222_50%_20%)] px-6 sm:px-10 py-6 sm:py-8 relative overflow-hidden">
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
                className="grid sm:grid-cols-3 items-center px-6 sm:px-10 py-6 sm:py-8 cursor-default"
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
