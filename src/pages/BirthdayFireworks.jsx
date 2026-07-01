import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const palette = [
  "#ff4f9a",
  "#ffd166",
  "#8be9fd",
  "#c084fc",
  "#f8fafc",
  "#34d399",
];

const wishes = [
  "Tonight, the sky writes your name.",
  "Every spark is a tiny birthday wish.",
];

function createBurst(width, height, forcedX, forcedY) {
  const x = forcedX ?? width * (0.18 + Math.random() * 0.64);
  const y = forcedY ?? height * (0.16 + Math.random() * 0.46);
  const count = 34 + Math.floor(Math.random() * 18);
  const color = palette[Math.floor(Math.random() * palette.length)];

  return Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.12;
    const speed = 1.35 + Math.random() * 4.15;

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: 0.016 + Math.random() * 0.014,
      size: 1 + Math.random() * 2.15,
      color,
    };
  });
}

export default function BirthdayFireworks() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const [needsTap, setNeedsTap] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);

  const playMusic = async () => {
    try {
      audioRef.current.volume = 0.72;
      await audioRef.current.play();
      setNeedsTap(false);
    } catch {
      setNeedsTap(true);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.45);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const launch = (forcedX, forcedY) => {
      if (document.hidden || particlesRef.current.length > 190) return;

      particlesRef.current.push(
        ...createBurst(width, height, forcedX, forcedY),
      );
    };

    const draw = () => {
      context.globalCompositeOperation = "source-over";
      context.fillStyle = "rgba(3, 2, 12, 0.2)";
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      particlesRef.current = particlesRef.current.filter((spark) => {
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += 0.028;
        spark.vx *= 0.992;
        spark.alpha -= spark.decay;

        if (spark.alpha <= 0) return false;

        context.beginPath();
        context.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        context.fillStyle = spark.color;
        context.shadowBlur = 8;
        context.shadowColor = spark.color;
        context.globalAlpha = Math.max(spark.alpha, 0);
        context.fill();
        context.globalAlpha = 1;
        context.shadowBlur = 0;
        return true;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    playMusic();

    const opening = setTimeout(() => launch(width * 0.5, height * 0.28), 350);
    const interval = setInterval(() => launch(), 980);
    const words = setInterval(
      () => setWishIndex((current) => (current + 1) % wishes.length),
      2600,
    );

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(opening);
      clearInterval(interval);
      clearInterval(words);
      cancelAnimationFrame(rafRef.current);
      audioRef.current?.pause();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05020d] text-white">
      <audio ref={audioRef} src="/audio/birthday.mp3" loop preload="auto" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,79,154,0.24),transparent_28%),radial-gradient(circle_at_16%_18%,rgba(139,233,253,0.18),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(255,209,102,0.18),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-4 py-6 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.78, y: 34 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border border-dashed border-white/20"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], y: [0, -8, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-48 w-48 rounded-full border border-white/20 bg-white/10 p-2 shadow-[0_0_80px_rgba(255,79,154,0.42)] backdrop-blur-md sm:h-64 sm:w-64"
          >
            <img
              src="/images/era2.jpeg"
              alt="Erangi"
              className="h-full w-full rounded-full object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.75 }}
          className="mt-8 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100/80"
        >
          Birthday sky show
        </motion.p>

        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          A whole sky lighting up for Ms. Erangi
        </h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={wishIndex}
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
            transition={{ duration: 0.55 }}
            className="mt-5 min-h-8 max-w-2xl text-base leading-relaxed text-white/74 sm:text-xl"
          >
            {wishes[wishIndex]}
          </motion.p>
        </AnimatePresence>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {needsTap && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={playMusic}
              className="rounded-full border border-white/25 bg-white/12 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-white/18"
            >
              Play birthday song
            </motion.button>
          )}

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/birthday-cake")}
            className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 px-7 py-3 text-sm font-black text-white shadow-[0_24px_70px_rgba(255,79,154,0.36)] transition sm:px-8 sm:text-base"
          >
            Continue to cake
          </motion.button>
        </div>
      </section>
    </main>
  );
}
