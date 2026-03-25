import type { Metadata } from "next";
import { KaraokePlayer } from "@/components/karaoke-player";
import { Container } from "@/components/container";
import { secretTrack } from "@/data/music";

export const metadata: Metadata = {
  title: "Music",
  description: "Secret music route with a karaoke-style synced lyrics player.",
  robots: {
    index: false,
    follow: false
  }
};

export default function MusicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b12] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.12),transparent_24%),linear-gradient(180deg,#050b12_0%,#081520_55%,#050b12_100%)]" />
      <div className="absolute inset-0 bg-noise opacity-[0.12]" />

      <Container className="relative py-10 md:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-white/35">
              hidden feature
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/60">
              Route ini sengaja tidak dimasukkan ke navbar. Aksesnya langsung lewat
              URL <span className="font-mono text-cyan-200">/music</span>.
            </p>
          </div>
        </div>

        <KaraokePlayer track={secretTrack} />
      </Container>
    </main>
  );
}
