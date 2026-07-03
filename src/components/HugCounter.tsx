import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Burst = { id: number; left: number; emoji: string };

const BURST_EMOJIS = ["💖", "💕", "💗", "🤗", "✨", "🌸", "🫶", "💞"];

export default function HugCounter() {
  const [hugs, setHugs] = useState(0);
  const [bursts, setBursts] = useState<Burst[]>([]);

  const sendHug = useCallback(() => {
    setHugs((h) => h + 1);
    const newBursts: Burst[] = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      left: 50 + (Math.random() * 70 - 35),
      emoji: BURST_EMOJIS[Math.floor(Math.random() * BURST_EMOJIS.length)],
    }));
    setBursts((b) => [...b, ...newBursts]);
    // clean up after the animation
    window.setTimeout(() => {
      setBursts((b) => b.filter((x) => !newBursts.some((n) => n.id === x.id)));
    }, 1800);
  }, []);

  // little reaction text that grows cuter with more hugs
  const reaction =
    hugs === 0
      ? "no hugs yet 😢 the button is so lonely..."
      : hugs < 5
        ? "aww, that's nice 🥰"
        : hugs < 15
          ? "okay now you're just collecting hugs 😳💕"
          : hugs < 30
            ? "HUG OVERLOAD. you are officially the softest 🧸"
            : "incredible. you've broken the hug-meter. we love a legend 🏆💗";

  const pct = Math.min(100, (hugs / 30) * 100);

  return (
    <section className="relative z-10 mx-auto mt-10 w-full max-w-2xl px-6">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-purple-100/70 to-pink-100/70 p-7 text-center shadow-xl shadow-purple-200/40 backdrop-blur sm:p-10">
        <span className="font-display inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-600">
          🤗 Virtual Hugs Delivered Fresh
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-pink-600">
          Tap to send yourself a hug
        </h2>

        {/* count */}
        <div className="mt-5 font-display text-5xl font-bold text-purple-600">
          {hugs}
          <span className="ml-2 text-2xl text-purple-400">hugs</span>
        </div>

        {/* progress meter */}
        <div className="mx-auto mt-4 h-4 w-full max-w-sm overflow-hidden rounded-full bg-white/70 ring-1 ring-purple-100">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={reaction}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-3 text-sm font-medium text-rose-700/80"
          >
            {reaction}
          </motion.p>
        </AnimatePresence>

        {/* big hug button with burst overlay */}
        <div className="relative mt-7 inline-block">
          {bursts.map((b) => (
            <motion.span
              key={b.id}
              initial={{ opacity: 0.9, y: 0, scale: 0.5 }}
              animate={{ opacity: 0, y: -180, scale: 1.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 text-3xl"
              style={{ left: `${b.left}%` }}
            >
              {b.emoji}
            </motion.span>
          ))}
          <motion.button
            onClick={sendHug}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.88 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" } }}
            className="font-display relative rounded-full bg-gradient-to-br from-pink-400 to-purple-500 px-12 py-6 text-2xl font-bold text-white shadow-xl shadow-pink-300/60 ring-4 ring-white"
          >
            🤗 Send a Hug
          </motion.button>
        </div>

        {hugs >= 15 && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-5 text-purple-500"
          >
            p.s. every single one of those hugs is real. i mean it. 🫶
          </motion.p>
        )}
      </div>
    </section>
  );
}
