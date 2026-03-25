"use client";

import { useEffect, useRef, useState } from "react";
import { MicVocal, Music2, Pause, Play, Radio, Waves } from "lucide-react";
import type { KaraokeTrack } from "@/data/music";
import { cn } from "@/lib/utils";

const PREVIEW_BARS = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  height: 28 + ((index * 17) % 44)
}));

function formatTime(time: number) {
  if (!Number.isFinite(time) || time < 0) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function getActiveLineIndex(track: KaraokeTrack, currentTime: number) {
  for (let index = track.lyrics.length - 1; index >= 0; index -= 1) {
    if (currentTime >= track.lyrics[index].start) {
      return index;
    }
  }

  return -1;
}

function getLineProgress(track: KaraokeTrack, index: number, currentTime: number) {
  const line = track.lyrics[index];

  if (!line || currentTime < line.start) {
    return 0;
  }

  const nextStart =
    track.lyrics[index + 1]?.start ?? track.durationSeconds;
  const rawProgress = (currentTime - line.start) / (nextStart - line.start);

  return Math.min(1, Math.max(0, rawProgress));
}

export function KaraokePlayer({ track }: { track: KaraokeTrack }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const lyricRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [karaokeMode, setKaraokeMode] = useState(true);

  const activeLineIndex = getActiveLineIndex(track, currentTime);
  const displayDuration = duration > 0 ? duration : track.durationSeconds;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const syncPlayer = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
      setIsPlaying(!audio.paused);
    };

    syncPlayer();

    audio.addEventListener("loadedmetadata", syncPlayer);
    audio.addEventListener("timeupdate", syncPlayer);
    audio.addEventListener("play", syncPlayer);
    audio.addEventListener("pause", syncPlayer);
    audio.addEventListener("ended", syncPlayer);

    return () => {
      audio.removeEventListener("loadedmetadata", syncPlayer);
      audio.removeEventListener("timeupdate", syncPlayer);
      audio.removeEventListener("play", syncPlayer);
      audio.removeEventListener("pause", syncPlayer);
      audio.removeEventListener("ended", syncPlayer);
    };
  }, []);

  useEffect(() => {
    if (!karaokeMode || activeLineIndex < 0) {
      return;
    }

    lyricRefs.current[activeLineIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, [activeLineIndex, karaokeMode]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      return;
    }

    audio.pause();
  };

  const handleSeek = (value: number) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.85fr)]">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#081520]/80 p-6 shadow-soft-xl backdrop-blur-xl md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.2),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_32%)]" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-100/90">
                <Radio className="h-3.5 w-3.5" />
                Hidden Route
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  /music
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {track.title}
                </h1>
                <p className="mt-2 text-base text-cyan-50/75">{track.artist}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-right">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                Tempo
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">{track.bpm}</p>
              <p className="text-xs text-white/45">BPM</p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/68">{track.tagline}</p>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Demo Track
                </p>
                <p className="mt-2 text-xl font-medium text-white">
                  Neon tide instrumental
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-cyan-300 text-slate-950">
                <Music2 className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-6 flex h-24 items-end gap-2 overflow-hidden rounded-2xl border border-white/8 bg-[#07111a] px-3 py-4">
              {PREVIEW_BARS.map((bar) => (
                <span
                  key={bar.id}
                  className={cn(
                    "w-full rounded-full bg-gradient-to-t from-cyan-300/35 to-amber-200/85 transition-all duration-300",
                    isPlaying ? "animate-pulseSoft" : "opacity-60"
                  )}
                  style={{ height: `${bar.height}px`, animationDelay: `${bar.id * 80}ms` }}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={togglePlayback}
                className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isPlaying ? "Pause" : "Play"}
              </button>

              <button
                type="button"
                onClick={() => setKaraokeMode((value) => !value)}
                className={cn(
                  "inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition",
                  karaokeMode
                    ? "border-cyan-300/45 bg-cyan-300/10 text-cyan-100"
                    : "border-white/10 bg-white/5 text-white/70"
                )}
              >
                <MicVocal className="h-4 w-4" />
                Karaoke mode {karaokeMode ? "on" : "off"}
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <input
                aria-label="Seek track"
                type="range"
                min={0}
                max={displayDuration}
                step={0.1}
                value={Math.min(currentTime, displayDuration)}
                onChange={(event) => handleSeek(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/12 accent-cyan-300"
              />
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(displayDuration)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-white/42">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              secret feature
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              synced lyrics
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              auto scroll
            </span>
          </div>
        </div>

        <audio ref={audioRef} preload="metadata" src={track.audioSrc} />
      </section>

      <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-soft-xl backdrop-blur-xl">
        <div className="border-b border-white/8 px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-white/40">
                Karaoke Script
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Lirik berjalan</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-2 text-xs uppercase tracking-[0.25em] text-white/55">
              <Waves className="h-3.5 w-3.5" />
              {track.durationLabel}
            </div>
          </div>
        </div>

        <div className="relative h-[540px] overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#081520] via-[#081520]/85 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#081520] via-[#081520]/85 to-transparent" />

          <ol className="relative h-full space-y-3 overflow-y-auto px-4 py-24 md:px-6">
            {track.lyrics.map((line, index) => {
              const isActive = index === activeLineIndex;
              const isPast = index < activeLineIndex;
              const progress = getLineProgress(track, index, currentTime) * 100;

              return (
                <li
                  key={`${line.start}-${line.text}`}
                  ref={(element) => {
                    lyricRefs.current[index] = element;
                  }}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border px-5 py-5 transition-all duration-300",
                    isActive
                      ? "border-cyan-300/35 bg-white/10 shadow-[0_0_0_1px_rgba(103,232,249,0.16)]"
                      : "border-white/8 bg-white/[0.04]",
                    isPast && "border-white/6 bg-white/[0.025]"
                  )}
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-r-[28px] bg-gradient-to-r from-amber-300/16 via-cyan-300/18 to-transparent transition-all duration-200"
                    style={{ width: isActive ? `${progress}%` : isPast ? "100%" : "0%" }}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/35">
                        {formatTime(line.start)}
                      </p>
                      <p
                        className={cn(
                          "mt-3 text-lg leading-8 transition md:text-[1.65rem]",
                          isActive ? "font-semibold text-white" : "text-white/55",
                          isPast && "text-white/34"
                        )}
                      >
                        {line.text}
                      </p>
                    </div>
                    {isActive ? (
                      <span className="mt-1 inline-flex h-8 items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100">
                        active
                      </span>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}
