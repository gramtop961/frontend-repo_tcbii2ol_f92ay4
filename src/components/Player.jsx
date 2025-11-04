import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2 } from "lucide-react";
import { useState } from "react";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <div className="sticky bottom-4 z-40">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/70 to-blue-950/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(30,64,175,0.45)]">
        <div className="px-4 py-3 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
                alt="cover"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-white">Neon Skyline</p>
              <p className="text-xs text-blue-200/80">Astri Valen</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-white/10 text-blue-100"><Shuffle size={16} /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-blue-100"><SkipBack size={18} /></button>
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-[0_10px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.45)] transition-all"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} fill="white" className="text-white" />}
              </button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-blue-100"><SkipForward size={18} /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-blue-100"><Repeat size={16} /></button>
            </div>

            <div className="flex items-center gap-3 w-full max-w-md">
              <span className="text-[10px] text-blue-200/80">1:12</span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <span className="text-[10px] text-blue-200/80">3:45</span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end gap-3">
            <button className="p-2 rounded-lg hover:bg-white/10 text-blue-100"><Volume2 size={16} /></button>
            <div className="w-24">
              <input type="range" min="0" max="100" defaultValue={70} className="w-full accent-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
