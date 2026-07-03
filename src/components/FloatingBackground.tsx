import { useMemo } from "react";

type Floater = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  emoji: string;
};

const EMOJIS = ["🌸", "💕", "✨", "🌷", "💖", "⭐", "🦋", "🍓", "🌼"];

/** Decorative floating emojis drifting up the screen. Pure CSS animations. */
export default function FloatingBackground() {
  const floaters = useMemo<Floater[]>(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 26,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 10,
        emoji: EMOJIS[i % EMOJIS.length],
      })),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* soft blurry color blobs */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl animate-floaty" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-300/40 blur-3xl animate-floaty [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl animate-floaty [animation-delay:4s]" />

      {/* drifting emojis */}
      {floaters.map((f) => (
        <span
          key={f.id}
          className="animate-risefade absolute bottom-[-40px] select-none opacity-0"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
}
