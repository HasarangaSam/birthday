import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const supportNotes = [
  {
    mood: "Tired",
    label: "When you feel tired",
    text: "You do not have to be strong every minute. Rest is not weakness. It is how a kind heart survives long enough to keep shining.",
  },
  {
    mood: "Overthinking",
    label: "When overthinking starts",
    text: "Not every thought deserves a meeting in your mind. Some thoughts are only clouds passing through. Let them pass.",
  },
  {
    mood: "Doubt",
    label: "When you doubt yourself",
    text: "The students who remember you are proof that your work matters. You have changed lives in ways you may never fully see.",
  },
  {
    mood: "Heavy",
    label: "When today feels heavy",
    text: "Take only the next small step. You do not need to solve the whole future tonight.",
  },
  {
    mood: "Unseen",
    label: "When you feel unappreciated",
    text: "Some of the biggest impact is quiet. A seed does not hear applause when it grows, but it still becomes something beautiful.",
  },
  {
    mood: "Low",
    label: "When motivation is low",
    text: "You are allowed to begin again slowly. Progress does not always look powerful; sometimes it looks like simply not giving up.",
  },
  {
    mood: "Emotional",
    label: "When you feel emotional",
    text: "Being emotional is not a flaw. It means you care deeply, and caring deeply is one of your greatest strengths.",
  },
  {
    mood: "Alone",
    label: "When you feel alone",
    text: "You may stand like a strong lecturer in front of the world, but you do not have to carry everything alone inside.",
  },
  {
    mood: "Overthinking",
    label: "When your mind is noisy",
    text: "Breathe. Name one thing you can see, one thing you can hear, and one thing you can do next. Come back to this moment.",
  },
  {
    mood: "Doubt",
    label: "When you question your worth",
    text: "Your worth is not measured by one bad day, one mistake, or one person's reaction. You are more than a moment.",
  },
  {
    mood: "Courage",
    label: "When you miss confidence",
    text: "Confidence does not mean never shaking. Sometimes confidence is moving forward while your hands still tremble.",
  },
  {
    mood: "Unseen",
    label: "When you feel invisible",
    text: "You are seen. You are remembered. You are respected. Some hearts carry your kindness quietly every day.",
  },
  {
    mood: "Tired",
    label: "When work feels endless",
    text: "You have done enough for today. Close one tab in your mind. The rest can wait until tomorrow.",
  },
  {
    mood: "Gentle",
    label: "When you blame yourself",
    text: "Please speak to yourself like you would speak to a student you care about. You deserve that same gentleness too.",
  },
  {
    mood: "Courage",
    label: "When you need courage",
    text: "Courage is not loud. Courage is the quiet decision to try one more time.",
  },
  {
    mood: "Hope",
    label: "When life feels uncertain",
    text: "You do not need the whole map. Sometimes the next honest step is enough light.",
  },
  {
    mood: "Emotional",
    label: "When your heart feels full",
    text: "Let yourself feel it. Tears are not failure; sometimes they are simply the heart making room.",
  },
  {
    mood: "Unseen",
    label: "When you forget your impact",
    text: "A lecturer teaches a subject. A mentor changes the way a student sees themselves. You have done both.",
  },
  {
    mood: "Hope",
    label: "When you need hope",
    text: "This difficult feeling is temporary. You have survived hard days before, and you are still here.",
  },
  {
    mood: "Gentle",
    label: "For any day",
    text: "You are loved, appreciated, respected, and needed. Not because you are perfect, but because you are you.",
  },
];

const moods = ["All", ...Array.from(new Set(supportNotes.map((note) => note.mood)))];

const backgroundHearts = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 41 + 17) % 100}%`,
  size: 12 + (i % 5) * 6,
  delay: (i % 8) * 0.28,
}));

const foldedPapers = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${12 + (i * 21) % 68}%`,
  top: `${34 + (i * 15) % 48}%`,
  rotate: -18 + (i % 8) * 5,
}));

export default function EmotionalSupportJar() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState("All");
  const [noteIndex, setNoteIndex] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const [noteOpen, setNoteOpen] = useState(false);

  const filteredNotes = useMemo(
    () =>
      selectedMood === "All"
        ? supportNotes
        : supportNotes.filter((note) => note.mood === selectedMood),
    [selectedMood],
  );

  const currentNote = supportNotes[noteIndex];

  const chooseMood = (mood) => {
    setSelectedMood(mood);
    setNoteOpen(false);
    setDrawCount(0);
  };

  const openNote = () => {
    const pool = filteredNotes.length ? filteredNotes : supportNotes;
    const nextNote = pool[drawCount % pool.length];

    setNoteIndex(supportNotes.indexOf(nextNote));
    setNoteOpen(true);
    setDrawCount((prev) => prev + 1);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1b1014] px-4 py-6 text-[#fff8ee] sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(190,88,93,0.30),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(121,64,89,0.30),transparent_28%),linear-gradient(135deg,#211113_0%,#2a1722_48%,#130d10_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,248,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,248,238,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.38)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,#120b0c_70%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {backgroundHearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="absolute font-serif text-[#f2b7ad]/20"
            style={{
              left: heart.left,
              top: heart.top,
              fontSize: `${heart.size}px`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.12, 0.38, 0.12] }}
            transition={{
              duration: 5 + (heart.id % 5) * 0.5,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            &hearts;
          </motion.span>
        ))}
      </div>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#e7b9a4]/80">
            For difficult days
          </p>
          <h1 className="mt-4 font-serif text-5xl font-black leading-none text-[#fff4dd] sm:text-6xl lg:text-7xl">
            Emotional Support Jar
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#ead8ca]/80 sm:text-lg lg:mx-0">
            Choose how the day feels, then open one folded note from the jar.
            One small reminder at a time.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => chooseMood(mood)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  selectedMood === mood
                    ? "border-[#f4d8b8] bg-[#f4d8b8] text-[#4b242c] shadow-[0_12px_30px_rgba(244,216,184,0.18)]"
                    : "border-[#f4d8b8]/20 bg-[#fff8ee]/8 text-[#ead8ca]/80 hover:bg-[#fff8ee]/14"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <motion.button
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={openNote}
              className="rounded-full bg-[#b65d66] px-8 py-4 text-base font-black text-white shadow-[0_22px_50px_rgba(182,93,102,0.30)] transition hover:bg-[#c96f77]"
            >
              Open Note
            </motion.button>
            <button
              onClick={() => navigate("/birthday-card")}
              className="rounded-full border border-[#f4d8b8]/20 bg-[#fff8ee]/8 px-6 py-4 text-sm font-bold text-[#ead8ca] transition hover:bg-[#fff8ee]/14"
            >
              Back to Letter
            </button>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 hidden font-serif text-3xl italic text-[#e7b9a4]/60 lg:block"
          >
            The End
          </motion.p>
        </div>

        <div className="relative flex min-h-[43rem] items-center justify-center">
          <div className="absolute bottom-11 h-16 w-[min(86vw,42rem)] rounded-[50%] bg-[#5a2f25]/70 blur-sm" />
          <div className="absolute bottom-0 h-24 w-[min(92vw,48rem)] rounded-t-[50%] border border-[#f4d8b8]/10 bg-gradient-to-b from-[#7a4536] to-[#351b18] shadow-[0_-20px_70px_rgba(0,0,0,0.34)]" />

          <motion.div
            key={drawCount}
            animate={{
              y: [0, -8, 0],
              rotateY: [-3, 3, -3],
              rotateZ: noteOpen ? [0, -2, 2, 0] : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative h-[34rem] w-[min(88vw,30rem)]"
            style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
          >
            <div className="absolute inset-x-8 bottom-3 h-12 rounded-full bg-black/55 blur-2xl" />

            <motion.div
              animate={noteOpen ? { y: -16, rotateZ: -9 } : { y: 0, rotateZ: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="absolute left-1/2 top-1 z-40 h-16 w-56 -translate-x-1/2 rounded-[50%] border border-[#fff4dd]/25 bg-[#d6b08a]/70 shadow-[0_18px_50px_rgba(0,0,0,0.34)] backdrop-blur-xl"
            />

            <div className="absolute left-1/2 top-10 z-10 h-[28rem] w-[23rem] -translate-x-1/2 overflow-hidden rounded-b-[7rem] rounded-t-[3.5rem] border border-[#fff4dd]/22 bg-[#fff8ee]/10 shadow-[0_34px_90px_rgba(0,0,0,0.44)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 bottom-0 h-[76%] bg-gradient-to-t from-[#b65d66]/28 via-[#d9a27c]/12 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,248,238,0.34),transparent_26%,transparent_62%,rgba(182,93,102,0.18))]" />

              <div className="absolute left-1/2 top-28 z-30 w-48 -translate-x-1/2 rounded-sm border border-[#6a3941]/20 bg-[#f4d8b8] px-4 py-3 text-center font-serif text-sm font-black uppercase tracking-[0.16em] text-[#6a3941] shadow-xl">
                Notes for Madam
              </div>

              {foldedPapers.map((paper) => (
                <motion.div
                  key={paper.id}
                  className="absolute h-10 w-20 rounded-sm border border-[#6a3941]/20 bg-[#f7e5c6] shadow-lg"
                  style={{
                    left: paper.left,
                    top: paper.top,
                    rotate: `${paper.rotate}deg`,
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotateZ: [paper.rotate - 2, paper.rotate + 2, paper.rotate - 2],
                  }}
                  transition={{
                    duration: 3.6 + (paper.id % 4) * 0.35,
                    delay: paper.id * 0.08,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute left-0 top-1/2 h-px w-full bg-[#6a3941]/20" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-[#6a3941]/15" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {noteOpen && (
              <motion.article
                key={`${noteIndex}-${drawCount}`}
                initial={{
                  opacity: 0,
                  x: -80,
                  y: 120,
                  rotateX: 70,
                  rotateZ: -10,
                  scale: 0.46,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  rotateZ: -1.5,
                  scale: 1,
                }}
                exit={{ opacity: 0, y: -40, rotateZ: 8, scale: 0.92 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="absolute bottom-14 right-0 max-w-md rounded-sm border border-[#7a4548]/20 bg-[#f7e5c6] p-6 text-left text-[#47262b] shadow-[0_30px_70px_rgba(0,0,0,0.38)] sm:right-8"
                style={{
                  transformStyle: "preserve-3d",
                  backgroundImage:
                    "linear-gradient(rgba(122,69,72,0.08) 1px, transparent 1px)",
                  backgroundSize: "100% 1.9rem",
                }}
              >
                <div className="absolute -right-3 -top-3 h-10 w-10 rotate-12 rounded-full bg-[#b65d66] shadow-lg" />
                <p className="font-serif text-sm font-black uppercase tracking-[0.22em] text-[#9b5059]">
                  {currentNote.label}
                </p>
                <p className="mt-4 font-serif text-xl leading-relaxed sm:text-2xl">
                  {currentNote.text}
                </p>
              </motion.article>
            )}
          </AnimatePresence>

          <p className="absolute bottom-3 left-2 font-serif text-2xl italic text-[#e7b9a4]/55 lg:hidden">
            The End
          </p>
        </div>
      </section>
    </main>
  );
}
