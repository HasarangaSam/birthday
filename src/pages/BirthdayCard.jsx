import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const images = [
  "/images/era.jpeg",
  "/images/era1.jpeg",
  "/images/era2.jpeg",
  "/images/era3.jpeg",
];

const letter = `Dear Erangi Madam,

Today is your birthday, and I realized that a simple WhatsApp message could never hold everything I wanted to say. So instead, I created this small website.

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

Actually... a little scary too. 😅

But over time, I discovered something completely different behind that strong personality—a genuinely kind heart.

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

You healed a boy who didn’t even care if he woke up the next day.

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

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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

  const triggerConfetti = () => {
    const duration = 5000;
    const end = Date.now() + duration;

    const shoot = () => {
      confetti({
        particleCount: 8,
        spread: 90,
        startVelocity: 35,
        origin: { x: Math.random() > 0.5 ? 0 : 1, y: 0.6 },
      });
    };

    const frame = () => {
      shoot();
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 sm:px-6">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-950 to-black" />

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400/20 animate-pulse text-xl sm:text-2xl"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-4xl">
        {!open ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-6"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl">💌</div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              A Letter For You
            </h1>

            <p className="text-gray-300 text-sm sm:text-base">
              Click to open your birthday message
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg transition"
            >
              Open Letter ✨
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
          >
            <img
              src={images[imgIndex]}
              className="w-full h-[200px] sm:h-[300px] md:h-[420px] object-cover rounded-2xl mb-6 border border-white/10"
            />

            <pre className="whitespace-pre-wrap text-gray-200 leading-relaxed text-sm sm:text-base font-sans">
              {text}
            </pre>

            {text.length === letter.length && (
              <div className="text-center mt-10 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-300">
                  ❤️ Thank You Madam
                </h2>

                <p className="text-gray-400 text-sm sm:text-base">
                  This journey was made with gratitude.
                </p>

                <p className="text-gray-500 text-xs sm:text-sm">— The End —</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";

// const images = [
//   "/images/era.jpeg",
//   "/images/era1.jpeg",
//   "/images/era2.jpeg",
//   "/images/era3.jpeg",
// ];

// const letter = `Dear Erangi Madam,

// Today is your birthday, and I realized that a simple WhatsApp message could never hold everything I wanted to say. So instead, I created this small website.

// Not because it's fancy. Not because it's perfect. But because some people deserve more than a birthday wish.

// They deserve a heartfelt thank you.

// And if anyone deserves that from me, it's you.

// When people look at me today, they see a First Class graduate. They see an Academic Excellence achiever. They see the first President of SCC. They see someone who takes responsibility, helps others, and somehow manages to get things done.

// But very few people know the person I was before all of that.

// There was a time when I smiled in front of people while quietly fighting battles inside. A time when I questioned myself more than anyone else ever could. A time when I felt the weight of my future resting heavily on my shoulders.

// I never spoke much about it.

// I just carried it.

// Quietly.

// Like I always do.

// Then, somewhere along the way, you became part of my story.

// Nothing changed overnight. There was no dramatic turning point. But little by little, things started becoming lighter. It was like sunlight slowly finding its way into a dark room.

// You encouraged me.

// You trusted me.

// You believed in me.

// And sometimes, when someone has forgotten how to believe in themselves, those simple things can change everything.

// You probably never realized it. To you, it may have been a few conversations, a few words, a few ordinary moments.

// But to me, those moments were never ordinary.

// They became memories I carried home.

// Memories I still carry today.

// Then SCC happened.

// Out of all the students you could have chosen, you trusted me to build something from nothing. You trusted me to become its first President. You gave me a responsibility that was far bigger than a title.

// And there is one moment I will never forget.

// One day, in front of everyone, you said something like,

// "I gave that responsibility to Hasaranga, so I don't have to worry."

// You may not even remember saying it.

// But I remember hearing it.

// Because sometimes a single sentence becomes a lifetime memory.

// At that moment, I wasn't hearing a lecturer speak.

// I was hearing someone say,

// "I trust you."

// And those words meant more to me than you will ever know.

// The truth is, Madam, many people appreciated me after I succeeded. Many people believed in me after I proved myself.

// But you believed in me before any of those things happened.

// That is what makes you different.

// You saw something in me before I could see it in myself.

// You saw potential in a student who was still trying to find his place. You saw strength in a boy who was secretly exhausted.

// And because of that, I slowly became the person I am today.

// I have to admit, when I first met you, I thought you were very strict.

// Actually... a little scary too. 😅

// But over time, I discovered something completely different behind that strong personality—a genuinely kind heart.

// The kind of heart students remember long after lectures end.

// The kind of heart that changes lives without asking for recognition.

// The kind of heart that makes people feel seen.

// I rarely shared my struggles with anyone, but talking to you always felt different.

// It felt safe.

// It felt lighter.

// It felt like, for a moment, I didn't have to carry everything alone.

// You were never just teaching modules.

// You were quietly healing people.

// Including me.

// You helped heal a boy who had stopped believing in himself.

// And today, that same boy stands here as a First Class graduate.

// If my university journey were a book, your name wouldn't appear on every page.

// But it would be written on the pages that changed the entire story.

// Now my university life is coming to an end.

// Soon there will be no more SCC work, no more random messages, and no more,

// "Madam, can I ask something?"

// Life will move forward.

// New students will arrive.

// New leaders will emerge.

// New stories will begin.

// And one day, I will simply become another graduate among the thousands of students you have taught.

// But you will never be just another lecturer to me.

// Years from now, when people ask how I became the person I am, I will tell them about my parents, who sacrificed so much to give me a future.

// And I will tell them about a lecturer named Erangi who helped me believe in myself again.

// One day, I hope you can proudly say,

// "That is my student."

// Because wherever life takes me, I will always proudly say,

// "She is the lecturer who believed in me when I couldn't."

// Before I finish, there is one last thing I want to say.

// If I have ever disappointed you...

// If I have ever tested your patience...

// If any word, action, or mistake of mine hurt you, even unintentionally...

// I am truly sorry.

// Not because my university journey is ending.

// But because some people become too important for us to leave behind with regrets.

// And you are one of those people.

// Thank you for every lesson.

// Thank you for every opportunity.

// Thank you for every bit of trust you placed in me.

// But most importantly, thank you for changing a life without even realizing you were doing it.

// Happy Birthday, Madam.

// May life give you the same happiness, kindness, and love that you have given to so many others.

// And if there is just one thing I hope you remember after reading this letter, it is this:

// Long after I forget lecture notes, assignment marks, presentation slides, and classroom walls...

// I will never forget you.

// With love, gratitude, and endless respect,

// Hasaranga Samarakoon
// `;
// export default function BirthdayCard() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [imgIndex, setImgIndex] = useState(0);

//   // 🌄 slideshow (smooth + stable)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImgIndex((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   // ✍️ typing effect
//   useEffect(() => {
//     if (!open) return;

//     let i = 0;

//     const interval = setInterval(() => {
//       setText(letter.slice(0, i));
//       i++;

//       if (i > letter.length) {
//         clearInterval(interval);
//         triggerConfetti();
//       }
//     }, 20);

//     return () => clearInterval(interval);
//   }, [open]);

//   // 🎉 confetti (clean burst system)
//   const triggerConfetti = () => {
//     const duration = 5000;
//     const end = Date.now() + duration;

//     const shootLeft = () => {
//       confetti({
//         particleCount: 8,
//         spread: 90,
//         startVelocity: 35,
//         origin: { x: 0, y: 0.6 }, // LEFT SIDE
//       });
//     };

//     const shootRight = () => {
//       confetti({
//         particleCount: 6,
//         spread: 70,
//         startVelocity: 35,
//         origin: { x: 1, y: 0.6 }, // RIGHT SIDE
//       });
//     };

//     const frame = () => {
//       shootLeft();
//       shootRight();

//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     };

//     frame();
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
//       {/* dark overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-950 to-black" />

//       {/* ❤️ floating hearts (stable, not re-generated every render) */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(18)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute text-pink-400/20 animate-pulse text-2xl"
//             style={{
//               left: `${(i * 37) % 100}%`,
//               top: `${(i * 53) % 100}%`,
//             }}
//           >
//             ❤️
//           </span>
//         ))}
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 w-full max-w-4xl px-6">
//         {!open ? (
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="text-center space-y-6"
//           >
//             <div className="text-7xl">💌</div>

//             <h1 className="text-3xl md:text-5xl font-bold">A Letter For You</h1>

//             <p className="text-gray-300">Click to open your birthday message</p>

//             <button
//               onClick={() => setOpen(true)}
//               className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold text-lg transition"
//             >
//               Open Letter ✨
//             </button>
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
//           >
//             {/* FULL IMAGE (no compression feel) */}
//             <img
//               src={images[imgIndex]}
//               className="w-full h-[250px] md:h-[420px] object-cover rounded-2xl mb-8 border border-white/10"
//             />

//             {/* LETTER */}
//             <pre className="whitespace-pre-wrap text-gray-200 leading-relaxed text-sm md:text-base font-sans">
//               {text}
//             </pre>

//             {/* END MESSAGE */}
//             {text.length === letter.length && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center mt-10 space-y-3"
//               >
//                 <h2 className="text-3xl font-bold text-pink-300">
//                   ❤️ Thank You Madam
//                 </h2>

//                 <p className="text-gray-400">
//                   This journey was made with gratitude.
//                 </p>

//                 <p className="text-gray-500 text-sm">— The End —</p>
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }
