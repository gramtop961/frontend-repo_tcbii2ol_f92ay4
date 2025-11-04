import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Playlist from "./components/Playlist";
import Player from "./components/Player";

function App() {
  return (
    <div className="min-h-screen bg-blue-950 text-blue-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_800px_at_80%_-10%,rgba(59,130,246,0.25),transparent)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_600px_at_10%_10%,rgba(99,102,241,0.18),transparent)]" />

      <Navbar />
      <Hero />
      <Playlist />
      <div className="h-24" />
      <Player />
      <div className="h-8" />
    </div>
  );
}

export default App;
