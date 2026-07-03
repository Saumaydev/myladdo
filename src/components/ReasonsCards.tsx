import { motion } from "framer-motion";
import { reasons } from "../data/content";
import bunnyJoy from "../assets/bunny-joy.png";

export default function ReasonsCards() {
  return (
    <section className="relative z-10 mx-auto mt-16 w-full max-w-5xl px-6">
      <div className="text-center">
        <img
          src={bunnyJoy}
          alt="A joyful bunny"
          className="animate-wiggle mx-auto w-28 select-none drop-shadow-lg sm:w-32"
        />
        <span className="font-display mt-2 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-600">
          🌈 Reminder Zone
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-purple-600 sm:text-4xl">
          Reasons you're kind of the best
        </h2>
        <p className="mx-auto mt-2 max-w-md text-rose-900/60">
          (Non-negotiable facts. Do not argue with the list. The list is correct.)
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 120, delay: i * 0.08 }}
            whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
            className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-pink-200/40 backdrop-blur"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 text-3xl shadow-inner">
              {r.emoji}
            </div>
            <h3 className="font-display mt-4 text-xl font-bold text-pink-600">
              {r.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-rose-900/70">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
