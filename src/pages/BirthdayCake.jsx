import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const sparkles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 29 + 7) % 100}%`,
  top: `${(i * 43 + 13) % 100}%`,
  delay: (i % 7) * 0.28,
  size: i % 4 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
}));

const candles = [
  { id: 1, x: "-translate-x-20 sm:-translate-x-24", delay: 0 },
  { id: 2, x: "-translate-x-7 sm:-translate-x-8", delay: 0.16 },
  { id: 3, x: "translate-x-7 sm:translate-x-8", delay: 0.08 },
  { id: 4, x: "translate-x-20 sm:translate-x-24", delay: 0.24 },
];

export default function BirthdayCake() {
  const navigate = useNavigate();
  const [blown, setBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const cakePulse = useMemo(
    () => ({
      scale: blown ? [1, 1.035, 1] : [1, 1.012, 1],
      rotateY: blown ? [0, -2, 2, 0] : [0, 1.2, 0],
    }),
    [blown]
  );

  const blowCandles = () => {
    if (blown) return;

    setBlown(true);

    confetti({
      particleCount: 180,
      spread: 120,
      startVelocity: 42,
      origin: { y: 0.58 },
      colors: ["#f0abfc", "#c084fc", "#ffffff", "#f9a8d4", "#a78bfa"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 140,
        spread: 180,
        startVelocity: 36,
        origin: { y: 0.72 },
        colors: ["#f0abfc", "#c084fc", "#ffffff", "#f9a8d4", "#a78bfa"],
      });
      setShowMessage(true);
    }, 1050);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black px-4 py-5 text-white sm:px-6 lg:h-screen lg:py-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(236,72,153,0.24),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.30),transparent_28%),radial-gradient(circle_at_50%_94%,rgba(126,34,206,0.28),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className={`absolute rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.85)] ${sparkle.size}`}
          style={{ left: sparkle.left, top: sparkle.top }}
          animate={{ opacity: [0.18, 1, 0.18], scale: [0.8, 1.6, 0.8] }}
          transition={{
            duration: 2.8,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-2.5rem)] w-full max-w-7xl items-center gap-6 lg:min-h-[calc(100vh-3rem)] lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-pink-300 via-fuchsia-200 to-purple-300 bg-clip-text text-transparent">
              Happy Birthday
            </span>
            <br />
            <span className="text-white">Ms. Erangi Piumika</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
            Make a wish, blow the candles, and let the whole page celebrate this
            beautiful day.
          </p>

          <AnimatePresence mode="wait">
            {!showMessage ? (
              <motion.button
                key="blow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={blowCandles}
                disabled={blown}
                className="mt-7 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3.5 text-base font-bold text-white shadow-[0_20px_55px_rgba(236,72,153,0.38)] transition hover:from-pink-400 hover:to-purple-500 disabled:cursor-wait disabled:opacity-80 sm:px-9 sm:py-4"
              >
                {blown ? "Making the wish sparkle..." : "Blow The Candles"}
              </motion.button>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-7"
              >
                <p className="text-lg font-semibold text-pink-200">
                  Your wish is now floating among the stars.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/birthday-card")}
                  className="mt-5 rounded-full bg-purple-600 px-7 py-3.5 text-base font-bold text-white shadow-[0_20px_55px_rgba(147,51,234,0.36)] transition hover:bg-purple-700 sm:px-9 sm:py-4"
                >
                  Open Birthday Letter
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="relative flex min-h-[34rem] items-center justify-center sm:min-h-[38rem] lg:min-h-[42rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.86, rotateX: 18 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute top-2 z-20"
            style={{ perspective: "1400px" }}
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotateY: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-32 w-32 rounded-[2rem] border border-white/15 bg-white/[0.07] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:h-40 sm:w-40"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-5 -z-10 rounded-full bg-pink-400/25 blur-3xl" />
              <img
                src="/images/era2.jpeg"
                alt="Erangi"
                className="h-full w-full rounded-[1.5rem] object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            animate={cakePulse}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative mt-20 h-[29rem] w-[min(92vw,36rem)]"
            style={{ transformStyle: "preserve-3d", perspective: "1700px" }}
          >
            <div className="absolute bottom-2 left-1/2 h-10 w-[88%] -translate-x-1/2 rounded-full bg-black/55 blur-2xl" />

            <div className="absolute left-1/2 top-16 z-30 h-20 w-[72%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-pink-100 via-fuchsia-200 to-purple-300 shadow-[inset_0_-18px_30px_rgba(147,51,234,0.36),0_24px_55px_rgba(236,72,153,0.22)]" />
            <div className="absolute left-1/2 top-24 z-20 h-24 w-[72%] -translate-x-1/2 rounded-b-[2rem] bg-gradient-to-b from-fuchsia-400 via-purple-500 to-purple-800 shadow-[inset_0_-22px_28px_rgba(0,0,0,0.22)]" />

            <div className="absolute left-1/2 top-40 z-20 h-24 w-[88%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-pink-100 via-fuchsia-200 to-purple-300 shadow-[inset_0_-20px_34px_rgba(147,51,234,0.38),0_24px_55px_rgba(147,51,234,0.26)]" />
            <div className="absolute left-1/2 top-50 z-10 h-28 w-[88%] -translate-x-1/2 rounded-b-[2.4rem] bg-gradient-to-b from-fuchsia-500 via-purple-600 to-purple-950 shadow-[inset_0_-28px_34px_rgba(0,0,0,0.26)]" />

            <div className="absolute bottom-20 left-1/2 z-10 h-28 w-full -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-pink-100 via-fuchsia-200 to-purple-300 shadow-[inset_0_-24px_38px_rgba(147,51,234,0.40),0_30px_70px_rgba(147,51,234,0.28)]" />
            <div className="absolute bottom-7 left-1/2 h-32 w-full -translate-x-1/2 rounded-b-[3rem] bg-gradient-to-b from-fuchsia-500 via-purple-700 to-black shadow-[inset_0_-32px_40px_rgba(0,0,0,0.34)]" />

            <div className="absolute left-1/2 top-[6.2rem] z-40 h-16 w-[62%] -translate-x-1/2 overflow-hidden rounded-b-[2rem]">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 h-14 w-10 rounded-b-full bg-pink-100/95"
                  style={{ left: `${i * 15}%` }}
                />
              ))}
            </div>

            <div className="absolute left-1/2 top-[13.1rem] z-30 h-16 w-[78%] -translate-x-1/2 overflow-hidden rounded-b-[2rem]">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 h-14 w-11 rounded-b-full bg-pink-100/95"
                  style={{ left: `${i * 13}%` }}
                />
              ))}
            </div>

            {candles.map((candle) => (
              <div
                key={candle.id}
                className={`absolute left-1/2 top-7 z-50 flex flex-col items-center ${candle.x}`}
              >
                <AnimatePresence>
                  {!blown ? (
                    <motion.div
                      key="flame"
                      animate={{
                        scale: [1, 1.22, 0.92, 1],
                        rotate: [-4, 5, -2, -4],
                        opacity: [0.9, 1, 0.82, 0.95],
                      }}
                      transition={{
                        duration: 0.62,
                        delay: candle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative mb-1 h-9 w-5 rounded-[70%_70%_55%_55%] bg-gradient-to-b from-white via-yellow-200 to-orange-500 shadow-[0_0_26px_rgba(251,146,60,1)]"
                    />
                  ) : (
                    <motion.div
                      key="smoke"
                      initial={{ opacity: 0.8, y: 0, scale: 0.7 }}
                      animate={{ opacity: 0, y: -72, x: [0, 14, -8], scale: 2 }}
                      transition={{ duration: 2.2, delay: candle.delay }}
                      className="mb-1 h-8 w-8 rounded-full bg-white/35 blur-xl"
                    />
                  )}
                </AnimatePresence>

                <div className="h-16 w-4 rounded-t-md border border-white/30 bg-[repeating-linear-gradient(45deg,#ffffff_0_7px,#f0abfc_7px_14px)] shadow-[0_12px_24px_rgba(0,0,0,0.22)]" />
              </div>
            ))}

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-28 z-50 h-64 w-64 -translate-x-1/2 rounded-full border border-dashed border-white/18"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
