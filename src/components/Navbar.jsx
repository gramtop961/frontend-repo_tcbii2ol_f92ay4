import { Music, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-blue-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_8px_30px_rgb(30,64,175,0.35)]">
            <Music className="text-white" size={22} />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">NeoWave</p>
            <p className="text-xs text-blue-200/80">Modern Blue Music</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2">
          <Search size={16} className="text-blue-200" />
          <input
            placeholder="Cari lagu, artis, album..."
            className="bg-transparent outline-none text-sm text-blue-50 placeholder:text-blue-200/60 w-64"
          />
        </div>

        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-[0_10px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.45)] transition-all">
          <User size={16} /> Masuk
        </button>
      </div>
    </header>
  );
}
