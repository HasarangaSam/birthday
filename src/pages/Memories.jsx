import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memories = [
  {
    title: "The Beginning",
    desc: "The first time I stepped into your guidance — it changed everything.",
    image: "/images/prac.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/sccevent.jpeg",
  },
  {
    title: "The Beginning",
    desc: "The first time I stepped into your guidance — it changed everything.",
    image: "/images/trip.jpeg",
  },
  {
    title: "Student Circle of Computing",
    desc: "You trusted me as the first president. That trust became my strength.",
    image: "/images/val.jpeg",
  },
  {
    title: "Academic Growth",
    desc: "From uncertainty to First Class — every step had your support.",
    image: "/images/hack.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/cel.jpeg",
  },
  {
    title: "Birthday Celebration 🎉",
    desc: "A memory full of laughter, joy, and gratitude.",
    image: "/images/birth.jpeg",
  },
  {
    title: "Birthday Celebration 🎉",
    desc: "A memory full of laughter, joy, and gratitude.",
    image: "/images/birtha.jpeg",
  },
  {
    title: "Birthday Celebration 🎉",
    desc: "A memory full of laughter, joy, and gratitude.",
    image: "/images/upe.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/event.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/saban.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/bada.jpeg",
  },
  {
    title: "Birthday Celebration 🎉",
    desc: "A memory full of laughter, joy, and gratitude.",
    image: "/images/lunch.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/scc.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/grad.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/chat.jpeg",
  },
  {
    title: "Gratitude",
    desc: "You didn’t just teach — you shaped my life direction.",
    image: "/images/first.jpeg",
  },
];

export default function Memories() {
  const [index, setIndex] = useState(0);

  // auto switch memory
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % memories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = memories[index];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black text-white px-6">
      <div className="text-center w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          📸 Memories Timeline
        </h1>

        {/* CARD VIEW */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1.05, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md w-full md:w-[600px]"
            >
              {/* IMAGE */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-72 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-purple-300">
                  {current.title}
                </h2>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center mt-8 gap-2">
          {memories.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-purple-500 scale-125" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="mt-10">
          <a
            href="/impact"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Continue to Impact →
          </a>
        </div>
      </div>
    </div>
  );
}
