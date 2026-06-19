import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Surprise() {
  const navigate = useNavigate();

  const messages = [
    "You walked through memories... 📸",
    "You saw the difference you made... 🌱",
    "You discovered how much you are appreciated... ❤️",
    "But wait...",
    "There is one more thing before your birthday surprise...",
  ];

  const [index, setIndex] = useState(0);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1800);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowGift(true), 1500);
    }
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse"></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">
          🎁 A Small Surprise
        </h1>

        {/* Message Sequence */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed min-h-[100px]"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>

        {/* Gift Box */}
        {showGift && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="mt-16"
          >
            <button
              onClick={() => navigate("/treat")}
              className="text-8xl hover:scale-110 transition"
            >
              🎁
            </button>

            <p className="mt-6 text-purple-300">
              Click the gift box to continue
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
