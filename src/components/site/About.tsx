import { useState, useEffect } from "react";
import { Factory, ShieldCheck, Globe2, User2, MapPin, Briefcase, FlaskConical, Wrench, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";

const profileData = [
  { icon: User2, label: "Name of CEOs", value: "Mr. Abhishek Suri " },
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
      className={`absolute inset-0 w-full h-full p-8 sm:p-10 border-4 transition-all duration-300 ${className || ""}`}
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
        className="h-full w-full bg-card p-8 sm:p-10 border border-border shadow-dark group hover:shadow-orange hover:border-primary transition-all duration-500 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary transform translate-x-8 -translate-y-8 rotate-45 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            <div className="h-12 w-12 bg-primary flex items-center justify-center mb-6 shadow-md shadow-orange">
              <FlaskConical className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight uppercase">Research & Development</h3>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Advance Lab Equipments features state-of-the-art in-house R&D facilities. Our dedicated team continuously innovates and enhances our product range to maintain top manufacturing standards.
              </p>
            </div>
          </div>
          <div className="text-primary font-black text-xs uppercase tracking-widest mt-4">
            Innovation & Excellence
          </div>
        </>
      ),
      bgColor: "bg-background",
      borderColor: "border-primary/30",
      textColor: "text-foreground"
    },
    {
      id: 1,
      title: "After Sales Services",
      icon: Wrench,
      content: (
        <>
          <div>
            <div className="h-12 w-12 bg-card flex items-center justify-center mb-6 border border-border shadow-md">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight uppercase">After Sales Services</h3>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                We prioritize total customer satisfaction by providing timely and reliable after-sales services. Our trained Service Engineers conduct regular visits across India to promptly resolve any technical queries.
              </p>
            </div>
          </div>
          <div className="text-primary font-black text-xs uppercase tracking-widest mt-4">
            Customer First Approach
          </div>
        </>
      ),
      bgColor: "bg-card",
      borderColor: "border-border",
      textColor: "text-foreground"
    },
    {
      id: 2,
      title: "Quality Control",
      icon: ShieldCheck,
      content: (
        <>
          <div>
            <div className="h-12 w-12 bg-primary flex items-center justify-center mb-6 shadow-md shadow-orange">
              <ShieldCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight uppercase">Quality Control</h3>
            <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              <p>
                Our well-designed control system meticulously monitors all manufacturing stages, ensuring consistent, premium quality across our entire product range.
              </p>
            </div>
            <div className="font-bold text-[10px] uppercase tracking-wider text-primary bg-background p-3 border-l-4 border-primary leading-relaxed">
              As an ISO 9001:2015 certified company, every single instrument is rigorously examined at each stage of production.
            </div>
          </div>
          <div className="text-primary font-black text-xs uppercase tracking-widest mt-2">
            AN ISO 9001:2015 Certified
          </div>
        </>
      ),
      bgColor: "bg-background",
      borderColor: "border-primary/30",
      textColor: "text-foreground"
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
    <section id="about" className="py-16 lg:py-24 bg-card relative overflow-hidden perspective-[1000px]">
      {/* 3D Floating background elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none"
      />
      
      <div className="container relative z-10">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow justify-center mb-4 lg:mb-6">About Our Legacy</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 lg:mb-8 tracking-tight uppercase font-serif">
              Advance Lab <span className="text-primary">Equipments</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Situated at Panchkula, Haryana, our company reaches new heights under the visionary leadership of
              <span className="font-bold text-foreground"> Mr. Abhishek Suri</span>.
              We set benchmarks in the quality-conscious market through continuous innovation and excellence.
            </p>
          </motion.div>
        </div>

        {/* Core Pillars - 3D Tilt Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32" style={{ perspective: "1200px" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <TiltCard className="h-full">
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-primary flex items-center justify-center mb-6 sm:mb-8 shadow-orange group-hover:scale-110 transition-transform duration-500" style={{ transform: "translateZ(30px)" }}>
                <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground mb-4" style={{ transform: "translateZ(20px)" }}>Infrastructure</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                Our manufacturing unit features advanced laboratory facilities and a dedicated R&D wing, enabling groundbreaking instrument production while maintaining consistent quality.
              </p>
            </TiltCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <TiltCard className="h-full">
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-primary flex items-center justify-center mb-6 sm:mb-8 shadow-orange group-hover:scale-110 transition-transform duration-500" style={{ transform: "translateZ(30px)" }}>
                <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground mb-4" style={{ transform: "translateZ(20px)" }}>Quality Control</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                From raw material selection to finished goods, every aspect is guided by strict QC policies. Instruments undergo rigorous testing for assembly and performance.
              </p>
            </TiltCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <TiltCard className="h-full">
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-primary flex items-center justify-center mb-6 sm:mb-8 shadow-orange group-hover:scale-110 transition-transform duration-500" style={{ transform: "translateZ(30px)" }}>
                <Globe2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground mb-4" style={{ transform: "translateZ(20px)" }}>Global Network</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                We thrive on a well-organized network spanning nations including Nepal, Sri Lanka, Bangladesh, USA, and beyond, recognized as a premier Exporter.
              </p>
            </TiltCard>
          </motion.div>
        </div>

        {/* Detailed Commitments Section */}
        <div className="max-w-6xl mx-auto mb-20 lg:mb-32 bg-background border border-border shadow-dark p-6 sm:p-12 overflow-hidden relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary transform translate-x-16 -translate-y-16 rotate-45" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

            {/* Left Column: Navigation controls and Info */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Pillars</span>
                <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground mt-2 tracking-tight font-serif">
                  Excellence in <br/> every detail
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4 border-l-2 border-primary pl-4">
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
                      className={`relative w-full text-left p-4 transition-all duration-300 flex items-center gap-4 border-2 ${isActive
                          ? "bg-card text-foreground border-primary shadow-dark"
                          : "hover:bg-card/50 text-muted-foreground border-transparent"
                        }`}
                    >
                      <span className={`text-xs font-black tracking-wider transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"
                        }`}>
                        0{idx + 1}
                      </span>
                      <span className="font-bold text-sm sm:text-base uppercase tracking-wider">{item.title}</span>

                      {isActive && (
                        <motion.div
                          layoutId="activeStepSelectorGlow"
                          className="absolute right-4 w-2 h-2 bg-primary shadow-orange"
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
                  className="h-12 w-12 border border-border bg-card text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                  aria-label="Previous Commitment"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-12 w-12 border border-border bg-card text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
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
          className="max-w-4xl mx-auto bg-background border border-border shadow-dark overflow-hidden hover:shadow-orange/20 transition-shadow duration-500 relative"
        >
          <div className="bg-card border-b border-primary/30 px-6 sm:px-10 py-6 sm:py-8 relative overflow-hidden">
            <h3 className="text-3xl font-black uppercase tracking-tight text-foreground flex items-center gap-4 relative z-10 font-serif">
              <div className="h-12 w-12 bg-primary flex items-center justify-center border border-primary/50 shadow-inner">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              Company Profile
            </h3>
          </div>
          <div className="divide-y divide-border relative z-10 bg-background">
            {profileData.map((item, i) => (
              <motion.div
                whileHover={{ x: 8, backgroundColor: "var(--card)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={item.label}
                className="grid sm:grid-cols-3 items-center px-6 sm:px-10 py-6 sm:py-8 cursor-default"
              >
                <div className="flex items-center gap-4 text-foreground font-bold uppercase tracking-wider text-sm mb-2 sm:mb-0">
                  <div className="h-10 w-10 bg-card flex items-center justify-center shrink-0 border border-border">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  {item.label}
                </div>
                <div className="sm:col-span-2 text-muted-foreground text-base font-medium leading-relaxed">
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
