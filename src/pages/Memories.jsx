import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    desc: "Months of planning, and finally a trip full memories.",
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
    desc: "Not a big surprise, but an unforgettable and meaningful moment.",
    image: "/images/upe.jpeg",
  },
  {
    title: "Participating Everywhere",
    desc: "We didn’t just organize — we took part in almost every event together.",
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
    desc: "Some memories were never captured, only remembered.❤️",
    image: "/images/memories.jpg",
  },
];

export default function Memories() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % memories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = memories[index];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black text-white px-4 sm:px-6 py-8">
      <div className="text-center w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10">
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
              className="w-full max-w-[600px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
            >
              {/* IMAGE */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-purple-300">
                  {current.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="flex flex-wrap justify-center mt-8 gap-2">
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
        <div className="mt-8 md:mt-10">
          <button
            onClick={() => navigate("/impact")}
            className="bg-purple-600 hover:bg-purple-700 px-5 sm:px-6 py-3 rounded-full font-semibold transition text-sm sm:text-base"
          >
            Continue to Impact →
          </button>
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// const memories = [
//   {
//     title: "The Beginning",
//     desc: "The first SCC event we worked on together.",
//     image: "/images/prac.jpeg",
//   },
//   {
//     title: "Christmas CSR",
//     desc: "Bringing a little extra joy to Christmas.",
//     image: "/images/sccevent.jpeg",
//   },
//   {
//     title: "SCC Trip",
//     desc: "Months of planning, days of memories.",
//     image: "/images/trip.jpeg",
//   },
//   {
//     title: "Starlit Romance",
//     desc: "A day that showed how much your students appreciate you.",
//     image: "/images/val.jpeg",
//   },
//   {
//     title: "Hack-O-Rama Winners",
//     desc: "Not only organizing, but winning too.",
//     image: "/images/hack.jpeg",
//   },
//   {
//     title: "Ramazan Celebration",
//     desc: "Good food, good company, great memories.",
//     image: "/images/cel.jpeg",
//   },
//   {
//     title: "Birthday Celebration",
//     desc: "Cake, laughter, photos, and gifts.",
//     image: "/images/birth.jpeg",
//   },
//   {
//     title: "Ms. Anjana's Birthday",
//     desc: "A surprise planned together.",
//     image: "/images/birtha.jpeg",
//   },
//   {
//     title: "Ms. Upeksha's Birthday",
//     desc: "A small gift with a big meaning.",
//     image: "/images/upe.jpeg",
//   },
//   {
//     title: "Participating Everywhere",
//     desc: "Not just organizing events, but enjoying them too.",
//     image: "/images/event.jpeg",
//   },
//   {
//     title: "Small Gifts",
//     desc: "Remember the little gifts I gave?",
//     image: "/images/saban.jpeg",
//   },
//   {
//     title: "Little Treats",
//     desc: "Food was always the number one priority.",
//     image: "/images/bada.jpeg",
//   },
//   {
//     title: "SCC Lunch Out",
//     desc: "One table, countless conversations.",
//     image: "/images/lunch.jpeg",
//   },
//   {
//     title: "SCC Closing Ceremony",
//     desc: "The final day of my presidency.",
//     image: "/images/scc.jpeg",
//   },
//   {
//     title: "Academic Excellence",
//     desc: "Following the advice you gave from day one.",
//     image: "/images/grad.jpeg",
//   },
//   {
//     title: "Remember This WhatsApp Message?",
//     desc: "Done & Dusted, as you say.",
//     image: "/images/chat.jpeg",
//   },
//   {
//     title: "First Class Graduate",
//     desc: "The journey ended with a First Class.",
//     image: "/images/first.jpeg",
//   },
//   {
//     title: "So Many More Memories...",
//     desc: "Some memories were never captured, only remembered.❤️",
//     image: "/images/memories.jpg",
//   },
// ];

// export default function Memories() {
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();

//   // auto switch memory
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % memories.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const current = memories[index];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black text-white px-6">
//       <div className="text-center w-full max-w-4xl">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-10">
//           📸 Memories Timeline
//         </h1>

//         {/* CARD VIEW */}
//         <div className="relative flex items-center justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8, y: 20 }}
//               animate={{ opacity: 1, scale: 1.05, y: 0 }}
//               exit={{ opacity: 0, scale: 0.8, y: -20 }}
//               transition={{ duration: 0.8 }}
//               className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md w-full md:w-[600px]"
//             >
//               {/* IMAGE */}
//               <img
//                 src={current.image}
//                 alt={current.title}
//                 className="w-full h-72 object-cover"
//               />

//               {/* CONTENT */}
//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold text-purple-300">
//                   {current.title}
//                 </h2>

//                 <p className="text-gray-300 mt-3 leading-relaxed">
//                   {current.desc}
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* DOT INDICATORS */}
//         <div className="flex justify-center mt-8 gap-2">
//           {memories.map((_, i) => (
//             <div
//               key={i}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 i === index ? "bg-purple-500 scale-125" : "bg-gray-600"
//               }`}
//             />
//           ))}
//         </div>

//         {/* NAVIGATION */}

//         <div className="mt-10">
//           <button
//             onClick={() => navigate("/impact")}
//             className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition"
//           >
//             Continue to Impact →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
