import { motion } from "framer-motion";
import { ServerCrash } from "lucide-react";

interface MaintenancePageProps {}

const Index: React.FC<MaintenancePageProps> & { isMaintenance?: boolean } = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#090b11] overflow-hidden relative font-sans text-white px-4">
      {/* Background soft moving gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/5 to-transparent blur-[120px]"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-[15%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-teal-500/10 via-cyan-500/15 to-transparent blur-[120px]"
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo curve
        }}
        className="relative z-10 w-full max-w-lg bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-2xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] text-center group hover:border-white/15 transition-colors duration-500"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Technical Error Code Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono tracking-wider text-red-400 mb-8 uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          HTTP 500: Internal Server Error
        </div>

        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
          <ServerCrash className="w-8 h-8 text-indigo-400 group-hover:scale-105 transition-transform" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-4">
          Internal Server Error
        </h1>

        {/* Error Details */}
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto mb-8 font-light">
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>

        {/* Terminal/Code Log Box */}
        <div className="bg-black/40 border border-slate-800/80 rounded-xl p-4 text-left font-mono text-xs text-slate-500 max-w-md mx-auto space-y-1 select-none">
          <div className="text-indigo-400/80 flex items-center gap-1.5 mb-1.5 font-bold">
            <span>$</span> check-system-status
          </div>
          <div>[SYSTEM] Initializing service request diagnostics...</div>
          <div>[STATUS] Database connection: <span className="text-red-400/80 font-bold">FAILED</span></div>
          <div>[ERROR] code: <span className="text-slate-300">ERR_CONNECTION_REFUSED</span></div>
          <div>[RETRY] Backing off. Reconnecting in 300s...</div>
        </div>
      </motion.div>
    </div>
  );
};

// Flag to indicate that maintenance mode is active.
// When this file is restored to the original Index.tsx, isMaintenance will be undefined.
Index.isMaintenance = true;

export default Index;
