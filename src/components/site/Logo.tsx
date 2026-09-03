import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    {/* AD Mark SVG */}
    <svg viewBox="0 0 100 60" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* The D - Foreground */}
      <path d="M 40 10 H 70 A 20 20 0 0 1 70 50 H 65 L 57.5 38 H 70 A 8 8 0 0 0 70 22 H 47.5 Z" className="fill-foreground" />
      {/* The A - Primary (Orange) */}
      <path d="M 15 50 L 40 10 L 65 50 L 51 50 L 40 32.4 L 29 50 Z" className="fill-primary" />
      {/* Inner triangle for A */}
      <path d="M 35 50 L 40 42 L 45 50 Z" className="fill-primary" />
    </svg>
    {/* Text */}
    <div className="flex flex-col items-center justify-center pt-1">
      <span className="font-black text-foreground text-[22px] tracking-[0.12em] uppercase font-sans leading-none flex items-center">
        ADVANC<span className="text-primary">E</span>
      </span>
      <span className="flex items-center gap-1.5 text-[7px] font-bold tracking-[0.2em] uppercase text-muted-foreground mt-1.5 w-full">
        <span className="flex-1 h-[1px] bg-muted-foreground/30"></span>
        <span>LAB <span className="text-primary">E</span>QUIPMENTS</span>
        <span className="flex-1 h-[1px] bg-muted-foreground/30"></span>
      </span>
    </div>
  </Link>
);
