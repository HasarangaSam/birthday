import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const images = [
  "/images/era.jpeg",
  "/images/era1.jpeg",
  "/images/era2.jpeg",
  "/images/era3.jpeg",
];

const letter = `Dear Erangi Madam,

Today is your birthday, and I felt that a simple WhatsApp message wasn't enough for someone who has had such a meaningful impact on my life. I wanted to surprise you in a more memorable and creative way, so I created this website as a small birthday gift filled with gratitude.

You are not just my favourite lecturer. You are one of the most important teachers in my life so far. Since childhood, I was always a bright and active student. Even at Bandaranayaka College, I performed well academically, became section first, and was often one of the favourite students among teachers. Leadership always came naturally to me.

But when I entered a private university like ICBT Gampaha, everything felt different. It was a very heavy moment in my life. I carried a lot of disappointment and guilt inside me. My parents struggled financially to support my education. They only have me, and I only have them. No relatives, no grandparents, just the three of us. Because of that, I always felt pressure in my heart. I kept questioning myself: "Am I really capable of completing this degree?" "What if I fail again?" Even though my parents believed in me, I did not fully believe in myself at that time.

But everything slowly started to change when you believed in me. Your encouragement gave me hope again, and it felt like I was slowly returning to my better self. From that moment, I decided to work harder and prove to myself that I could do it.

As someone who often stays alone, I understand how painful loneliness and having no one to help can be. That is why I started helping my batchmates and juniors with their academics without expecting anything in return. I just wanted to give something back. Even though I am an introvert, it was not always easy. Slowly, people started to recognize me. They trusted me and came to me for help. Many of them said talking to me felt like relief because I listen without judging. But I never had someone like that in my life before.

Then came SCC. Becoming the first President of SCC is one of the most meaningful chapters of my university life. I took that responsibility with the hope of making the ICBT Gampaha IT faculty a better place. I did my best and created a legacy with my team. I met genuine people, shared unforgettable moments, and grew a lot as a person.

At first, I honestly thought you were very strict and a bit hard to approach. But later I understood something else. You are actually a kind person with a strong personality and a good heart. I rarely shared my problems with anyone, but you were different. Talking with you, even for a minute, felt like relief. You are a healer in your own way. You healed a boy who did not even care if he woke up the next day.

From a self-doubting student, to an academic excellence achiever, to a First Class graduate, this is my journey.

Now my university life is coming to an end. No more questions and no more random messages asking for advice. But I will never forget you. I promise I will continue my journey with everything you taught me. One day, you can proudly say, "That is my student." And I will proudly say, "She is the one who believed in me when I could not believe in myself."

If you ever need anything, you can always call me. I do not like calls, but I will still answer yours.

Happy Birthday, Madam. I wish you all the happiness in the world. Keep your kind heart and your child-like smile forever. As they say, "Some people come into our lives and quietly change everything." You are one of them.

- Hasaranga Samarakoon
`;
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
