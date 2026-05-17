import { useState, useRef, useEffect } from "react";
import { ArrowRight, ShieldCheck, Award, Headphones, ChevronDown, Activity, Cpu, Thermometer, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Live Telemetry States (Oscillating simulation)
  const [telemetry, setTelemetry] = useState({
    ec: 1413.2,
    abs: 0.013,
    temp: 24.8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ec: +(1413.0 + Math.random() * 0.4).toFixed(1),
        abs: +(0.012 + Math.random() * 0.002).toFixed(3),
        temp: +(24.7 + Math.random() * 0.2).toFixed(1),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Background glow coords
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // 3D Card tilt coords
    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cardX = e.clientX - cardRect.left - cardRect.width / 2;
      const cardY = e.clientY - cardRect.top - cardRect.height / 2;
      
      const rotateX = -(cardY / (cardRect.height / 2)) * 8; // Max 8 degrees
      const rotateY = (cardX / (cardRect.width / 2)) * 8;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[hsl(222_55%_10%)] min-h-[95vh] flex flex-col justify-center transition-all duration-300"
    >
      <style>{`
        @keyframes draw-path {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        .oscilloscope-path {
          stroke-dasharray: 200;
          animation: draw-path 6s linear infinite;
        }
        .glow-cursor {
          background: radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(212, 163, 89, 0.07), transparent 80%);
        }
      `}</style>

      {/* Dynamic Cursor Spotlight Overlay */}
      <div className="absolute inset-0 glow-cursor pointer-events-none transition-opacity duration-300" />

      {/* Tech Laser Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(43 72% 80% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(43 72% 80% / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Futuristic Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[hsl(43_72%_49%/0.08)] blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[hsl(222_55%_35%/0.22)] blur-[120px]" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-16 items-center py-20 lg:py-24">
        {/* Left Copy Column (5 cols) */}
        <div className="lg:col-span-6 space-y-8 animate-fade-in">
          {/* Scientific Trust Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[hsl(43_72%_49%/0.4)] bg-[hsl(43_72%_49%/0.1)] px-4 py-2 backdrop-blur-md shadow-[0_4px_20px_rgba(212,163,89,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[hsl(43_72%_55%)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(43_72%_55%)]" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(43_72%_75%)]">
              ISO 9001:2015 CERTIFIED · SINCE 2004
            </span>
          </div>

          {/* MNC Typographic Headline */}
          <div className="space-y-4">
            <h1 className="text-[2.8rem] sm:text-6xl xl:text-[4.2rem] font-extrabold leading-[1.05] tracking-tight text-white">
              Advance Lab <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-[hsl(43_72%_75%)] to-[hsl(43_72%_50%)] bg-clip-text text-transparent">
                Equipments
              </span>
            </h1>
            <p className="text-md sm:text-lg font-light text-[hsl(220_15%_78%)] max-w-xl leading-relaxed">
              Engineered for absolute reproducibility, trusted by global institutions. Discover our next-generation analytical instruments and workflow solutions designed to accelerate scientific breakthroughs.
            </p>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/#products"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[hsl(43_72%_49%)] text-[hsl(222_55%_10%)] text-sm font-bold hover:bg-[hsl(43_80%_53%)] shadow-gold hover:shadow-[0_12px_40px_-8px_hsl(43_80%_45%/0.60)] transition-all duration-300 active:scale-[0.98]"
            >
              Explore Catalog 
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 active:scale-[0.98]"
            >
              Request Telemetry
            </a>
          </div>

          {/* Corporate Stats Banner */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md">
            {[
              { icon: ShieldCheck, title: "NIST", desc: "Traceable Standard" },
              { icon: Award, title: "100%", desc: "Quality Tested" },
              { icon: Headphones, title: "24/7", desc: "Global Support" },
            ].map((s, idx) => (
              <div key={idx} className="space-y-1 group">
                <div className="flex items-center gap-2">
                  <s.icon className="h-4 w-4 text-[hsl(43_72%_55%)] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white tracking-wide">{s.title}</span>
                </div>
                <p className="text-[10px] text-[hsl(220_10%_65%)] leading-none">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right 3D Parallax Telemetry Showcase Column (6 cols) */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div 
            ref={cardRef}
            style={{
              transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.03 : 1})`,
              transition: hovered ? "none" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              transformStyle: "preserve-3d"
            }}
            className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl border border-white/10 bg-black/35 shadow-2xl p-3 flex items-center justify-center group/card overflow-visible"
          >
            {/* Holographic Glowing Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/[0.08] pointer-events-none group-hover/card:border-[hsl(43_72%_50%/0.3)] transition-colors duration-500" />
            
            {/* Interactive Image Frame */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-950/60">
              <img
                src={heroImg}
                alt="Advanced Scientific Laboratory"
                className="w-full h-full object-cover opacity-90 group-hover/card:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_55%_6%/0.8)] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Parallax Element 1: Dynamic Lab Telemetry HUD */}
            <div 
              style={{ transform: "translateZ(60px)" }}
              className="absolute -top-6 -right-6 md:-right-8 bg-black/60 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl min-w-[280px] space-y-4 hover:border-[hsl(43_72%_50%/0.4)] transition-all duration-300 select-none animate-float"
            >
              {/* Monospace Telemetry Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-[hsl(43_72%_50%)] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-white/90">PRECISION telemetry</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Dynamic Oscillating Values */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider block">Electrical Cond (EC)</span>
                  <span className="text-md font-mono font-bold text-white block tracking-tight">
                    {telemetry.ec} <span className="text-[10px] text-[hsl(43_72%_60%)]">µS/cm</span>
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider block">Absorbance (OD)</span>
                  <span className="text-md font-mono font-bold text-white block tracking-tight">
                    {telemetry.abs.toFixed(3)} <span className="text-[10px] text-[hsl(43_72%_60%)]">Abs</span>
                  </span>
                </div>
                <div className="space-y-1 col-span-2 pt-1 border-t border-white/5 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider block">Core Temperature</span>
                    <span className="text-xs font-mono font-semibold text-white">
                      {telemetry.temp}°C
                    </span>
                  </div>
                  <Thermometer className="h-4 w-4 text-[hsl(43_72%_55%)] opacity-70" />
                </div>
              </div>

              {/* Vector Oscilloscope Waveform */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-center">
                <svg className="w-full h-8 text-[hsl(43_72%_55%)] opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path
                    d="M0 10 L10 10 L15 2 L20 18 L25 10 L45 10 L50 2 L55 18 L60 10 L80 10 L85 2 L90 18 L95 10 L100 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="oscilloscope-path"
                  />
                </svg>
              </div>
            </div>

            {/* Overlapping Parallax Element 2: 1 Lakh+ Delivered Card */}
            <div 
              style={{ transform: "translateZ(40px)" }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-4 min-w-[220px] hover:scale-105 transition-transform"
            >
              <div className="h-11 w-11 rounded-xl bg-[hsl(222_55%_10%)] flex items-center justify-center shrink-0 shadow-lg">
                <Award className="h-6 w-6 text-[hsl(43_72%_50%)] animate-pulse" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[hsl(222_55%_10%)] leading-tight tracking-tight">1 Lakh+</div>
                <div className="text-[10px] font-semibold text-[hsl(220_15%_45%)] uppercase tracking-wider">Instruments Delivered</div>
              </div>
            </div>

            {/* Overlapping Parallax Element 3: Advanced AI / Precision Core Indicator */}
            <div 
              style={{ transform: "translateZ(80px)" }}
              className="absolute top-1/2 -left-12 -translate-y-1/2 bg-gradient-to-r from-[hsl(222_55%_10%)] to-black/85 border border-white/10 rounded-full h-12 w-12 flex items-center justify-center shadow-2xl backdrop-blur-md select-none group-hover/card:scale-110 transition-all duration-300"
            >
              <Cpu className="h-5 w-5 text-[hsl(43_72%_55%)]" />
              <span className="absolute -inset-1 rounded-full border border-[hsl(43_72%_55%/0.3)] animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Modern MNC Parallax Scroll cue */}
      <div className="flex justify-center pb-6 pt-4 relative z-10">
        <a
          href="/#about"
          className="flex flex-col items-center gap-1.5 text-[hsl(220_12%_60%)] hover:text-[hsl(43_72%_50%)] transition-colors group"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Discover precision</span>
          <ChevronDown className="h-4 w-4 animate-bounce group-hover:scale-125 transition-transform" />
        </a>
      </div>
    </section>
  );
};
