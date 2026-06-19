import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const images = [
  "/images/era.jpeg",
  "/images/era1.jpeg",
  "/images/era2.jpeg",
  "/images/era3.jpeg",
];

const letter = `Dear Madam,

Today is your special day.

This website was created not just to say Happy Birthday,
but to express deep gratitude.

You believed in me when I was still unsure of myself.

You gave me opportunities that shaped my journey,
from academics to leadership in the Student Circle of Computing.

Everything I have achieved carries a part of your guidance.

Some people teach.
Some guide.
And some quietly change lives forever.

You are one of them.

Happy Birthday Madam 🎂❤️

— Hasaranga`;

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [imgIndex, setImgIndex] = useState(0);

  // 🌄 slideshow (smooth + stable)
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✍️ typing effect
  useEffect(() => {
    if (!open) return;

    let i = 0;

    const interval = setInterval(() => {
      setText(letter.slice(0, i));
      i++;

      if (i > letter.length) {
        clearInterval(interval);
        triggerConfetti();
      }
    }, 20);

    return () => clearInterval(interval);
  }, [open]);

  // 🎉 confetti (clean burst system)
  const triggerConfetti = () => {
    const duration = 5000;
    const end = Date.now() + duration;

    const shootLeft = () => {
      confetti({
        particleCount: 8,
        spread: 90,
        startVelocity: 35,
        origin: { x: 0, y: 0.6 }, // LEFT SIDE
      });
    };

    const shootRight = () => {
      confetti({
        particleCount: 6,
        spread: 70,
        startVelocity: 35,
        origin: { x: 1, y: 0.6 }, // RIGHT SIDE
      });
    };

    const frame = () => {
      shootLeft();
      shootRight();

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* 🌄 BACKGROUND SLIDESHOW */}
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute w-full h-full object-cover scale-105"
        />
      </AnimatePresence>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* ❤️ floating hearts (stable, not re-generated every render) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400/20 animate-pulse text-2xl"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        {!open ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-6"
          >
            <div className="text-7xl">💌</div>

            <h1 className="text-3xl md:text-5xl font-bold">A Letter For You</h1>

            <p className="text-gray-300">Click to open your birthday message</p>

            <button
              onClick={() => setOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold text-lg transition"
            >
              Open Letter ✨
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {/* FULL IMAGE (no compression feel) */}
            <img
              src={images[imgIndex]}
              className="w-full h-[250px] md:h-[420px] object-cover rounded-2xl mb-8 border border-white/10"
            />

            {/* LETTER */}
            <pre className="whitespace-pre-wrap text-gray-200 leading-relaxed text-sm md:text-base font-sans">
              {text}
            </pre>

            {/* END MESSAGE */}
            {text.length === letter.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-10 space-y-3"
              >
                <h2 className="text-3xl font-bold text-pink-300">
                  ❤️ Thank You Madam
                </h2>

                <p className="text-gray-400">
                  This journey was made with gratitude.
                </p>

                <p className="text-gray-500 text-sm">— The End —</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
