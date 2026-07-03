import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { jokes } from "../data/content";
import catHug from "../assets/cat-hug.png";

export default function JokeBox() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const next = () => {
    setRevealed(false);
    setIndex((i) => (i + 1) % jokes.length);
  };

  return (
    <section className="relative z-10 mx-auto mt-16 w-full max-w-2xl px-6">
      <div className="flex flex-col items-center rounded-[2rem] border border-white/60 bg-white/70 p-7 text-center shadow-xl shadow-amber-200/40 backdrop-blur sm:p-10">
        <img
          src={catHug}
          alt="A happy cat surrounded by hearts"
          className="animate-wiggle w-24 select-none drop-shadow-lg sm:w-28"
        />
        <span className="font-display mt-2 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-600">
          🎭 The Giggle Generator
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-purple-600">
          Bad jokes, on the house
        </h2>

        <div className="mt-6 w-full min-h-[6rem] rounded-2xl bg-amber-50/80 p-5 ring-1 ring-amber-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <p className="font-display text-lg font-semibold text-rose-700">
                {jokes[index].q}
              </p>
              <AnimatePresence>
                {revealed && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-display mt-3 text-2xl font-bold text-amber-600"
                  >
                    {jokes[index].a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {!revealed ? (
            <motion.button
              onClick={() => setRevealed(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              className="font-display rounded-full bg-gradient-to-r from-amber-400 to-pink-400 px-7 py-3 font-bold text-white shadow-lg shadow-amber-200/50"
            >
              Reveal the punchline 🥁
            </motion.button>
          ) : (
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              className="font-display rounded-full bg-gradient-to-r from-purple-400 to-pink-500 px-7 py-3 font-bold text-white shadow-lg shadow-pink-200/50"
            >
              Another one please! 😂
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
