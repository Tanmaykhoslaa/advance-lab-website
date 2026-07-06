import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#070A13] text-slate-100 overflow-hidden font-sans select-none">
      {/* Premium animated background blobs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-900/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 90, -40, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-900/15 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 50, 70, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-teal-900/15 blur-[90px] pointer-events-none"
      />

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glassmorphic Maintenance Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg p-8 md:p-12 rounded-3xl border border-white/[0.07] bg-slate-950/45 backdrop-blur-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6)] text-center flex flex-col items-center"
      >
        {/* Animated Icon Container */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/5 border border-amber-500/30 text-amber-500 mb-8 shadow-[0_0_32px_rgba(245,158,11,0.15)] relative group"
        >
          {/* Pulsing ring around icon */}
          <div className="absolute inset-0 rounded-2xl border border-amber-500/50 animate-ping opacity-25" />
          <Wrench className="w-8 h-8 transition-transform duration-500 group-hover:rotate-45" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 font-serif"
        >
          Website Temporarily Unavailable
        </motion.h1>

        {/* Subtle decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-4"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-6"
        >
          This website is currently unavailable. Please check back later or
          contact the website owner for more information.
        </motion.p>

        {/* Footer detail */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xs text-slate-400 font-light mt-4"
        >
          Thank you for your patience.
        </motion.p>
      </motion.div>
    </div>
  );
};

// Set maintenance flag so routing logic in App.tsx dynamically routes all traffic here
Index.isMaintenance = true;

export default Index;
