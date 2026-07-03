import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { compliments } from "../data/content";

export default function ComplimentMachine() {
  const [index, setIndex] = useState<number | null>(null);
  const [tapCount, setTapCount] = useState(0);

  const getCompliment = () => {
    let next = Math.floor(Math.random() * compliments.length);
    if (next === index) next = (next + 1) % compliments.length;
    setIndex(next);
    setTapCount((c) => c + 1);
  };

  return (
    <section
      id="start"
      className="relative z-10 mx-auto mt-16 w-full max-w-2xl scroll-mt-8 px-6"
    >
      <div className="rounded-[2rem] border border-white/60 bg-white/70 p-7 text-center shadow-xl shadow-pink-200/40 backdrop-blur sm:p-10">
        <span className="font-display inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
          💖 The Compliment-O-Matic
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-purple-600">
          Tap for a compliment
        </h2>

        <div className="mt-6 flex min-h-[7.5rem] items-center justify-center">
          <AnimatePresence mode="wait">
            {index === null ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-rose-900/60"
              >
                press the big squishy button 👇
              </motion.p>
            ) : (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 18, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="font-display text-xl font-semibold text-rose-700 sm:text-2xl"
              >
                {compliments[index]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={getCompliment}
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.92 }}
          className="font-display mt-6 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 px-9 py-4 text-lg font-bold text-white shadow-lg shadow-pink-300/50"
        >
          {tapCount === 0 ? "Press me! 🎁" : "Again, again! 🔁"}
        </motion.button>

        {tapCount > 0 && (
          <p className="mt-4 text-sm text-purple-400">
            you've been complimented{" "}
            <span className="font-bold text-purple-600">{tapCount}</span> times — and
            you deserve every one. 🥹
          </p>
        )}
      </div>
    </section>
  );
}
