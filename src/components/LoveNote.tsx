import { motion } from "framer-motion";

export default function LoveNote() {
  return (
    <section className="relative z-10 mx-auto mt-20 w-full max-w-2xl px-6 pb-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-8 text-white shadow-2xl shadow-purple-300/50 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-8 -top-8 text-8xl opacity-20">
          💗
        </div>
        <div className="pointer-events-none absolute -bottom-10 -left-6 text-8xl opacity-20">
          ✨
        </div>

        <div className="text-5xl">🌷</div>
        <h2 className="font-script mt-4 text-3xl text-white sm:text-4xl">
          one more thing...
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-pink-50">
          Whatever happened today, it doesn't change a single thing about how
          wonderful you are. You are{" "}
          <span className="font-bold text-white">kind, strong, and so deeply loved</span>{" "}
          — even on the messy days. <em>Especially</em> on the messy days.
        </p>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-pink-100">
          I can't be there to fix it, but I'd hold you tight if I could. So please
          drink some water, be gentle with yourself, and know that someone, somewhere,
          is thinking about your smile right now. 🫶
        </p>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="font-display mt-7 text-2xl font-bold"
        >
          I'm here. Always. 💗
        </motion.div>

        <p className="mt-6 text-sm text-pink-200/80">
          made with my whole heart, just for you 💌
        </p>
      </motion.div>
    </section>
  );
}
