import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const images = [
  "/images/memory1.jpeg",
  "/images/memory2.jpeg",
  "/images/memory3.jpeg",
  "/images/memory4.jpeg",
];

export default function Birthday() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-hidden">
      {/* 🎊 Confetti */}
      <Confetti width={width} height={height} numberOfPieces={180} />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full animate-pulse"></div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20">
        {/* TOP SPACING */}
        <div className="h-10" />

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          🎉 Happy Birthday
        </h1>

        <h2 className="text-2xl md:text-3xl text-purple-300 mt-3 text-center">
          Ms. Erangi Piumika
        </h2>

        {/* IMAGE CARD */}
        <div className="mt-14 bg-white/5 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-md">
          <img
            src={images[index]}
            alt="memory"
            className="w-[320px] md:w-[420px] h-[260px] object-cover rounded-xl transition-all duration-700"
          />
        </div>

        {/* MESSAGE CARD */}
        <div className="mt-16 max-w-2xl text-center bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl space-y-5">
          <p className="text-gray-300 text-lg leading-relaxed">
            This is not just a birthday wish…
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            It is a reflection of everything you have given me — guidance,
            belief, confidence, and strength to grow into who I am today.
          </p>

          <p className="text-purple-300 font-semibold text-xl">
            Thank you for being the reason behind my success and transformation.
          </p>

          <p className="text-gray-400">— With endless gratitude ❤️</p>
        </div>

        {/* BOTTOM SPACING */}
        <div className="h-16" />

        {/* FOOTER */}
        <p className="text-gray-500 text-sm text-center">
          Built with respect, gratitude, and appreciation
        </p>

        <div className="h-10" />
      </div>
    </div>
  );
}
