import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const memories = [
  {
    title: "The Beginning",
    desc: "The first SCC event we worked on together.",
    image: "/images/prac.jpeg",
  },
  {
    title: "Christmas CSR",
    desc: "Bringing a little extra joy to Christmas.",
    image: "/images/sccevent.jpeg",
  },
  {
    title: "SCC Trip",
    desc: "Months of planning, and finally a trip full of memories.",
    image: "/images/trip.jpeg",
  },
  {
    title: "Starlit Romance",
    desc: "A day that showed how much your students appreciate you.",
    image: "/images/val.jpeg",
  },
  {
    title: "Hack-O-Rama Winners",
    desc: "Not only organizing, but winning too.",
    image: "/images/hack.jpeg",
  },
  {
    title: "Ramazan Celebration",
    desc: "Good food, good company, great memories.",
    image: "/images/cel.jpeg",
  },
  {
    title: "Birthday Celebration",
    desc: "Cake, laughter, photos, and gifts.",
    image: "/images/birth.jpeg",
  },
  {
    title: "Ms. Anjana's Birthday",
    desc: "A surprise planned together.",
    image: "/images/birtha.jpeg",
  },
  {
    title: "Ms. Upeksha's Birthday",
    desc: "Not a big surprise, but an unforgettable moment.",
    image: "/images/upe.jpeg",
  },
  {
    title: "Participating Everywhere",
    desc: "We did not just organize. We took part in almost every event together.",
    image: "/images/event.jpeg",
  },
  {
    title: "Small Gifts",
    desc: "Remember the little gifts I gave?",
    image: "/images/saban.jpeg",
  },
  {
    title: "Little Treats",
    desc: "Food was always the number one priority.",
    image: "/images/bada.jpeg",
  },
  {
    title: "SCC Lunch Out",
    desc: "One table, countless conversations.",
    image: "/images/lunch.jpeg",
  },
  {
    title: "SCC Closing Ceremony",
    desc: "The final day of my presidency.",
    image: "/images/scc.jpeg",
  },
  {
    title: "Academic Excellence",
    desc: "Following the advice you gave from day one.",
    image: "/images/grad.jpeg",
  },
  {
    title: "Remember This WhatsApp Message?",
    desc: "Done & Dusted, as you say.",
    image: "/images/chat.jpeg",
  },
  {
    title: "First Class Graduate",
    desc: "The journey ended with a First Class.",
    image: "/images/first.jpeg",
  },
  {
    title: "So Many More Memories...",
    desc: "Some memories were never captured, only remembered.",
    image: "/images/memories.jpg",
  },
];

const getWrappedOffset = (itemIndex, activeIndex) => {
  let diff = itemIndex - activeIndex;

  if (diff > memories.length / 2) diff -= memories.length;
  if (diff < -memories.length / 2) diff += memories.length;

  return diff;
};

export default function Memories() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % memories.length);
    }, 4300);

    return () => clearInterval(interval);
  }, []);

  const visibleMemories = useMemo(
    () =>
      memories
        .map((memory, memoryIndex) => ({
          ...memory,
          memoryIndex,
          offset: getWrappedOffset(memoryIndex, index),
        }))
        .filter((memory) => Math.abs(memory.offset) <= 3),
    [index],
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black text-white lg:h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(168,85,247,0.32),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.22),transparent_24%),radial-gradient(circle_at_50%_94%,rgba(147,51,234,0.30),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <section className="relative z-10 mx-auto flex min-h-screen lg:h-screen w-full max-w-7xl flex-col items-center justify-between px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-6">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-3xl font-black leading-none sm:text-4xl lg:text-6xl">
            Memories in Motion
          </h1>
        </motion.div>

        <div
          className="relative flex h-[60vh] min-h-[27rem] w-full items-center justify-center sm:h-[62vh] lg:h-[min(64vh,36rem)]"
          style={{ perspective: "1800px" }}
        >
          <div className="absolute inset-x-4 top-1/2 h-28 -translate-y-1/2 rounded-full bg-purple-400/25 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[84%] w-[min(78vw,56rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_90px_rgba(168,85,247,0.24)]" />

          {visibleMemories.map((memory) => {
            const { offset } = memory;
            const depth = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <div
                key={memory.memoryIndex}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: "translate(-50%, -50%)",
                  zIndex: isActive ? 80 : 40 - depth,
                }}
              >
                <motion.article
                  className="group relative w-[min(82vw,22rem)] sm:w-[min(56vw,25rem)] lg:w-[min(34vw,29rem)]"
                  animate={{
                    x: `calc(${offset} * min(20vw, 17rem))`,
                    y: depth * 13,
                    z: -depth * 155,
                    rotateY: offset * -48,
                    rotateX: isActive ? 0 : 4,
                    rotateZ: offset * 2.3,
                    scale: isActive ? 1 : 0.7 - depth * 0.035,
                    opacity: isActive ? 1 : depth === 1 ? 0.35 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 84, damping: 16 }}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: isActive ? 80 : 40 - depth,
                    filter: isActive
                      ? "drop-shadow(0 34px 42px rgba(168, 85, 247, 0.38))"
                      : "drop-shadow(0 18px 26px rgba(0, 0, 0, 0.38))",
                  }}
                  onClick={() => setIndex(memory.memoryIndex)}
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.35rem] border bg-slate-950/84 shadow-2xl backdrop-blur-xl transition duration-500 ${
                      isActive
                        ? "border-purple-200/70 shadow-purple-500/30"
                        : "border-white/15"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.30),transparent_24%,transparent_62%,rgba(168,85,247,0.24))] opacity-70" />
                    <div className="absolute -inset-x-20 top-0 h-24 rotate-[-8deg] bg-white/20 blur-2xl transition duration-700 group-hover:translate-y-16" />

                    <div className="relative p-2.5 sm:p-3">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={memory.image}
                          alt={memory.title}
                          className="h-[clamp(12rem,34vh,19rem)] w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/10" />
                        <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.26em] text-purple-100 backdrop-blur-md">
                          Memory {memory.memoryIndex + 1}
                        </div>
                      </div>

                      <div className="px-2 py-3 text-center sm:px-3 sm:py-4">
                        <h2 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
                          {memory.title}
                        </h2>
                        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
                          {memory.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>

        {/* REMOVED: title navigation buttons section */}

        <div className="flex w-full flex-col items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/impact")}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold text-lg transition"
          >
            Continue to Impact →
          </motion.button>
        </div>
      </section>
    </main>
  );
}
