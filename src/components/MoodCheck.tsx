import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quiz } from "../data/content";

const responses: Record<string, string> = {
  Blue: "Oh sweetheart. 💙 It's okay to feel like this — being sad doesn't make you weak, it makes you human. Wrap yourself in a blanket, let it out, and remember this feeling is a cloud, not the sky. It will drift on.",
  Meh: "Meh days happen to the best of us. 🌥️ You're doing fine just by being here. Maybe grab your favorite snack and a drink of water — small kindnesses count.",
  Okay: "Okay is a solid starting point! 🙂 Proud of you for keeping going. Let's gently nudge 'okay' a tiny bit brighter together.",
  Good: "Yay, good! 🌼 Hold onto that. You earned it. Don't let today take any more than it already has.",
  Loved: "Because you ARE loved. 🥰 More than you'll ever know. I'll keep reminding you until you believe it.",
};

export default function MoodCheck() {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <section className="relative z-10 mx-auto mt-16 w-full max-w-2xl px-6">
      <div className="rounded-[2rem] border border-white/60 bg-white/70 p-7 text-center shadow-xl shadow-pink-200/40 backdrop-blur sm:p-10">
        <span className="font-display inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
          💭 Quick Check-In
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-purple-600">
          How's your heart right now?
        </h2>
        <p className="mt-2 text-sm text-rose-900/60">
          no wrong answer — just tap how you feel 💗
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {quiz.map((m) => {
            const active = picked === m.label;
            return (
              <motion.button
                key={m.label}
                onClick={() => setPicked(m.label)}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                animate={active ? { scale: [1, 1.2, 1] } : {}}
                className={`flex flex-col items-center gap-1 rounded-2xl px-4 py-3 text-3xl shadow-md transition-colors ${
                  active
                    ? "bg-gradient-to-br from-pink-400 to-purple-500"
                    : "bg-white hover:bg-pink-50"
                }`}
              >
                <span>{m.emoji}</span>
                <span
                  className={`text-xs font-semibold ${
                    active ? "text-white" : "text-rose-400"
                  }`}
                >
                  {m.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {picked && (
            <motion.div
              key={picked}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className="mt-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 p-5 text-left text-rose-800 ring-1 ring-pink-100"
            >
              {responses[picked]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
