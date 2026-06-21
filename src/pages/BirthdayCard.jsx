import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const images = [
  "/images/era.jpeg",
  "/images/era1.jpeg",
  "/images/era2.jpeg",
  "/images/era3.jpeg",
];

const letter = `Today is your birthday, and I realized that a simple WhatsApp message could never hold everything I wanted to say. So instead, I created this small website.

Not because it's fancy. Not because it's perfect. But because some people deserve more than a birthday wish.

They deserve a heartfelt thank you.

And if anyone deserves that from me, it's you.

When people look at me today, they see a First Class graduate. They see an Academic Excellence achiever. They see the first President of SCC. They see someone who takes responsibility, helps others, and somehow manages to get things done.

But very few people know the person I was before all of that.

There was a time when I smiled in front of people while quietly fighting battles inside. A time when I questioned myself more than anyone else ever could. A time when I felt the weight of my future resting heavily on my shoulders.

I never spoke much about it.

I just carried it.

Quietly.

Like I always do.

Then, somewhere along the way, you became part of my story.

Nothing changed overnight. There was no dramatic turning point. But little by little, things started becoming lighter. It was like sunlight slowly finding its way into a dark room.

You encouraged me.

You trusted me.

You believed in me.

And sometimes, when someone has forgotten how to believe in themselves, those simple things can change everything.

You probably never realized it. To you, it may have been a few conversations, a few words, a few ordinary moments.

But to me, those moments were never ordinary.

They became memories I carried home.

Memories I still carry today.

Then SCC happened.

Out of all the students you could have chosen, you trusted me to build something from nothing. You trusted me to become its first President. You gave me a responsibility that was far bigger than a title.

And there is one moment I will never forget.

One day, in front of everyone, you said something like,

"I gave that responsibility to Hasaranga, so I don't have to worry."

You may not even remember saying it.

But I remember hearing it.

Because sometimes a single sentence becomes a lifetime memory.

At that moment, I wasn't hearing a lecturer speak.

I was hearing someone say,

"I trust you."

And those words meant more to me than you will ever know.

The truth is, Madam, many people appreciated me after I succeeded. Many people believed in me after I proved myself.

But you believed in me before any of those things happened.

That is what makes you different.

You saw something in me before I could see it in myself.

You saw potential in a student who was still trying to find his place. You saw strength in a boy who was secretly exhausted.

And because of that, I slowly became the person I am today.

I have to admit, when I first met you, I thought you were very strict.

Actually... a little scary too.

But over time, I discovered something completely different behind that strong personality - a genuinely kind heart.

The kind of heart students remember long after lectures end.

The kind of heart that changes lives without asking for recognition.

The kind of heart that makes people feel seen.

I rarely shared my struggles with anyone, but talking to you always felt different.

It felt safe.

It felt lighter.

It felt like, for a moment, I didn't have to carry everything alone.

You were never just teaching modules.

You were quietly healing people.

Including me.

You healed a boy who didn't even care if he woke up the next day.

And today, that same boy stands here as a First Class graduate.

If my university journey were a book, your name wouldn't appear on every page.

But it would be written on the pages that changed the entire story.

Now my university life is coming to an end.

Soon there will be no more SCC work, no more random messages, and no more,

"Madam, can I ask something?"

Life will move forward.

New students will arrive.

New leaders will emerge.

New stories will begin.

And one day, I will simply become another graduate among the thousands of students you have taught.

But you will never be just another lecturer to me.

Years from now, when people ask how I became the person I am, I will tell them about my parents, who sacrificed so much to give me a future.

And I will tell them about a lecturer named Erangi who helped me believe in myself again.

One day, I hope you can proudly say,

"That is my student."

Because wherever life takes me, I will always proudly say,

"She is the lecturer who believed in me when I couldn't."

Before I finish, there is one last thing I want to say.

If I have ever disappointed you...

If I have ever tested your patience...

If any word, action, or mistake of mine hurt you, even unintentionally...

I am truly sorry.

Not because my university journey is ending.

But because some people become too important for us to leave behind with regrets.

And you are one of those people.

Thank you for every lesson.

Thank you for every opportunity.

Thank you for every bit of trust you placed in me.

But most importantly, thank you for changing a life without even realizing you were doing it.

Happy Birthday, Madam.

May life give you the same happiness, kindness, and love that you have given to so many others.

And if there is just one thing I hope you remember after reading this letter, it is this:

Long after I forget lecture notes, assignment marks, presentation slides, and classroom walls...

I will never forget you.

With love, gratitude, and endless respect,

Hasaranga Samarakoon
`;

const shimmerDots = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: `${(i * 31 + 11) % 100}%`,
  top: `${(i * 47 + 17) % 100}%`,
  delay: (i % 9) * 0.22,
}));

export default function BirthdayCard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [imgIndex, setImgIndex] = useState(0);

  const progress = useMemo(
    () => Math.min(100, Math.round((text.length / letter.length) * 100)),
    [text],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!open) return;

    setText("");
    let i = 0;

    const interval = setInterval(() => {
      setText(letter.slice(0, i));
      i += 2;

      if (i > letter.length) {
        setText(letter);
        clearInterval(interval);
        triggerConfetti();
      }
    }, 8);

    return () => clearInterval(interval);
  }, [open]);

  const triggerConfetti = () => {
    const duration = 4500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        spread: 95,
        startVelocity: 34,
        origin: { x: Math.random() > 0.5 ? 0 : 1, y: 0.62 },
        colors: ["#f0abfc", "#c084fc", "#ffffff", "#f9a8d4", "#a78bfa"],
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black px-4 py-6 text-white sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(236,72,153,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.28),transparent_28%),radial-gradient(circle_at_50%_92%,rgba(126,34,206,0.28),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      {shimmerDots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute h-1 w-1 rounded-full bg-pink-100/80 shadow-[0_0_16px_rgba(244,114,182,0.9)]"
          style={{ left: dot.left, top: dot.top }}
          animate={{ opacity: [0.12, 1, 0.12], scale: [0.7, 1.7, 0.7] }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center justify-center">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.section
              key="closed"
              initial={{ opacity: 0, scale: 0.88, rotateX: 18 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -40 }}
              transition={{ duration: 0.8 }}
              className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]"
              style={{ perspective: "1700px" }}
            >
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-purple-200/80">
                  Final birthday message
                </p>
                <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                  A Letter For You
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
                  A small website can end, but some gratitude deserves one last
                  beautiful page.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpen(true)}
                  className="mt-8 rounded-full bg-purple-600 px-8 py-4 text-base font-bold text-white shadow-[0_20px_55px_rgba(147,51,234,0.38)] transition hover:bg-purple-700 sm:text-lg"
                >
                  💌 Open Letter
                </motion.button>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0], rotateY: [-8, 8, -8] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto h-[24rem] w-[min(88vw,34rem)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-x-8 bottom-0 h-12 rounded-full bg-black/60 blur-2xl" />
                <div className="absolute inset-0 rounded-[2rem] border border-white/12 bg-white/[0.06] shadow-[0_40px_90px_rgba(0,0,0,0.46)] backdrop-blur-xl" />
                <div className="absolute inset-x-8 top-8 h-56 origin-top rounded-t-[2rem] bg-gradient-to-b from-pink-200 via-fuchsia-300 to-purple-700 shadow-[0_26px_60px_rgba(168,85,247,0.30)] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                <div className="absolute inset-x-8 bottom-8 h-48 rounded-b-[2rem] bg-gradient-to-br from-purple-900 via-fuchsia-700 to-pink-400 shadow-2xl [clip-path:polygon(0_0,50%_42%,100%_0,100%_100%,0_100%)]" />
                <div className="absolute left-1/2 top-24 h-32 w-32 -translate-x-1/2 rounded-full border border-white/20 bg-black/30 p-2 shadow-[0_0_55px_rgba(244,114,182,0.44)] backdrop-blur-md">
                  <img
                    src="/images/era2.jpeg"
                    alt="Erangi"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.section>
          ) : (
            <motion.section
              key="open"
              initial={{ opacity: 0, y: 50, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85 }}
              className="grid w-full gap-5 lg:grid-cols-[0.88fr_1.12fr]"
              style={{ perspective: "1800px" }}
            >
              <aside className="relative hidden min-h-[42rem] lg:block">
                {images.map((image, index) => {
                  const offset =
                    (index - imgIndex + images.length) % images.length;
                  const active = offset === 0;

                  return (
                    <motion.div
                      key={image}
                      animate={{
                        x: offset * 22,
                        y: offset * 28,
                        rotateZ: offset * 5 - 7,
                        rotateY: active ? -8 : -18,
                        scale: active ? 1 : 0.9,
                        opacity: offset > 2 ? 0 : active ? 1 : 0.45,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 18,
                      }}
                      className="absolute left-8 top-10 h-[34rem] w-[26rem] overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/[0.06] p-3 shadow-[0_34px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl"
                      style={{
                        zIndex: active ? 30 : 20 - offset,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <img
                        src={image}
                        alt="Erangi"
                        className="h-full w-full rounded-[1.25rem] object-cover"
                      />
                    </motion.div>
                  );
                })}
              </aside>

              <motion.article
                className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.065] shadow-[0_34px_90px_rgba(0,0,0,0.46)] backdrop-blur-2xl"
                whileHover={{ rotateY: -1.8, rotateX: 1.2 }}
                transition={{ type: "spring", stiffness: 90, damping: 18 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.14),transparent_28%,rgba(168,85,247,0.14)_72%,transparent)]" />
                <div className="relative border-b border-white/10 p-5 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200/80">
                        Birthday letter
                      </p>
                      <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                        Dear Erangi Madam,
                      </h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 lg:hidden">
                      <img
                        src={images[imgIndex]}
                        alt="Erangi"
                        className="h-28 w-36 object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.25 }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    {progress}% revealed
                  </p>
                </div>

                <div className="relative max-h-[64vh] overflow-y-auto p-5 sm:p-7 [scrollbar-color:rgba(216,180,254,0.6)_rgba(255,255,255,0.08)] [scrollbar-width:thin]">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-gray-200 sm:text-base sm:leading-8">
                    {text}
                  </pre>

                  <AnimatePresence>
                    {text.length === letter.length && (
                      <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="mt-10 rounded-2xl border border-pink-200/20 bg-pink-300/10 p-6 text-center"
                      >
                        <h2 className="text-2xl font-bold text-pink-300 sm:text-3xl">
                          Thank You Madam
                        </h2>

                        <button
                          onClick={() => navigate("/support-jar")}
                          className="mt-5 rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white shadow-[0_16px_36px_rgba(147,51,234,0.28)] transition hover:bg-purple-700 sm:text-base"
                        >
                          One More Thing I Think You May Need
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
