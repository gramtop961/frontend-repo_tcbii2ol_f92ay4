import { Heart, Play } from "lucide-react";

const demoTracks = [
  {
    id: 1,
    title: "Neon Skyline",
    artist: "Astri Valen",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Blue Horizon",
    artist: "Luca Kaze",
    cover:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Midnight Drive",
    artist: "Sora Night",
    cover:
      "https://images.unsplash.com/photo-1520350094754-58a0a5c6c50b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Ocean Pulse",
    artist: "Kyra Wave",
    cover:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Playlist() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Pilihan Hari Ini</h2>
          <p className="text-sm text-blue-200/80">Suasana modern, ritme futuristik</p>
        </div>
        <button className="text-sm text-blue-100 hover:text-white transition-colors">Lihat semua</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {demoTracks.map((t) => (
          <div
            key={t.id}
            className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={t.cover}
                alt={t.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white px-3 py-2 text-xs hover:bg-white/15 transition">
                  <Play size={14} fill="white" className="text-white" /> Putar
                </button>
                <button className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white p-2 hover:bg-white/15 transition">
                  <Heart size={14} className="text-pink-300" />
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="font-medium text-white truncate">{t.title}</p>
              <p className="text-sm text-blue-200/80 truncate">{t.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
