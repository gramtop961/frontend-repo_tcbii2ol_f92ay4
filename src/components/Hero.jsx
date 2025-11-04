import Spline from "@splinetool/react-spline";
import { Play, Headphones } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/y0Vf0o97k0yJ0kLM/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-950/60 to-blue-950"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/5 px-3 py-1 text-xs text-blue-100">
            <Headphones size={14} /> Aksen biru neo — Vibe modern
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Musik terasa lebih futuristik
          </h1>
          <p className="text-blue-100/90 max-w-prose">
            Jelajahi playlist kurasi, nikmati audio jernih, dan player minimalis yang
            berfokus pada nuansa modern beraksen biru.
          </p>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl text-sm font-medium shadow-[0_10px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.45)] transition-all">
              <Play size={18} fill="white" className="text-white" /> Mulai Putar
            </button>
            <button className="px-5 py-3 rounded-xl text-sm font-medium text-blue-100 border border-white/10 hover:bg-white/5 transition-colors">
              Lihat Koleksi
            </button>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
