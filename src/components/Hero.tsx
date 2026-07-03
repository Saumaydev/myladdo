import { motion } from "framer-motion";
import mascotBear from "../assets/mascot-bear.png";

export default function Hero() {
  return (
    <header className="relative z-10 flex flex-col items-center px-6 pt-14 text-center sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
        className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-sm font-semibold text-pink-500 shadow-md ring-1 ring-pink-100 backdrop-blur"
      >
        <span className="animate-spinslow">✨</span>
        a little surprise made just for you
        <span className="animate-spinslow">✨</span>
      </motion.div>

      {/* Mascot */}
      <motion.img
        src={mascotBear}
        alt="A cute teddy bear holding a heart"
        draggable={false}
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.15 }}
        className="animate-wiggle w-44 select-none drop-shadow-[0_12px_24px_rgba(244,114,182,0.35)] sm:w-56"
      />

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display mt-2 text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 sm:text-6xl"
      >
        My Laddo, My Love. 🌸
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-4 max-w-xl text-base text-rose-900/70 sm:text-lg"
      >
        I heard today was rough, and I'm really sorry you got hurt — physically or in
        your heart. You didn't deserve a single bad moment of it. So I built you a
        tiny corner of the internet that's only allowed to be{" "}
        <span className="font-semibold text-pink-500">soft, silly, and yours</span>.
        Take a breath. I've got you. 💗
      </motion.p>

      <motion.a
        href="#start"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="animate-glow mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3.5 font-display text-lg font-semibold text-white shadow-lg shadow-pink-300/50"
      >
        Let's feel better 💛
        <span className="text-xl">↓</span>
      </motion.a>
    </header>
  );
}
