import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Treat() {
  const navigate = useNavigate();

  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "No 😏",
    "Are you sure? 🙈",
    "Try again 😂",
    "Not that easy 😆",
    "Only Yes works 😜",
    "Come on Madam 😄",
  ];

  const moveNoButton = () => {
    const maxX = window.innerWidth / 3;
    const maxY = 150;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setNoPos({ x, y });

    setMessageIndex((prev) => (prev + 1) % messages.length);
  };

  const handleYes = () => {
    setShowSuccess(true);

    setTimeout(() => {
      navigate("/birthday-cake");
    }, 2500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-black via-pink-950 to-black text-white px-4 sm:px-6">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {!showSuccess ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10 text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 md:mb-8"
          >
            One Important Question...
          </motion.h1>

          <p className="text-white text-center mb-10 md:mb-12 z-10 text-lg sm:text-xl md:text-2xl font-semibold max-w-2xl">
            Madam, will you give me a birthday treat? 😄
          </p>

          <div className="relative h-40 sm:h-44 w-full flex items-center justify-center z-10">
            {/* YES */}
            <button
              onClick={handleYes}
              className="
    bg-gradient-to-b
    from-green-400
    to-green-600

    px-8 sm:px-10
    py-3

    rounded-full
    font-bold
    text-white
    text-base sm:text-lg

    shadow-[0_6px_0_rgb(21,128,61)]

    hover:translate-y-[2px]
    hover:shadow-[0_4px_0_rgb(21,128,61)]

    active:translate-y-[6px]
    active:shadow-none

    transition-all
    duration-200

    hover:scale-110
  "
            >
              Yes 💖
            </button>

            {/* NO */}
            <motion.button
              animate={{
                x: noPos.x,
                y: noPos.y,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              className="
              absolute

              bg-gradient-to-b
              from-red-400
              to-red-600

              px-5 sm:px-8
              py-3

              rounded-full
              font-bold
              text-white
              text-sm sm:text-lg

              shadow-[0_6px_0_rgb(127,29,29)]

              select-none
            "
            >
              {messages[messageIndex]}
            </motion.button>
          </div>

          <div className="mt-8 md:mt-10 text-center z-10">
            <p className="text-gray-400 text-sm sm:text-base font-semibold">
              Choose carefully... 😏
            </p>

            <p className="text-pink-300 mt-3 text-xs sm:text-sm">
              💡 Hint: The red button has completed advanced escape training...
              nobody has successfully captured it yet 😜
            </p>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center z-10 max-w-xl"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-6xl sm:text-7xl md:text-8xl mb-6"
          >
            🎉
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-300">
            I knew you'd say YES 😄
          </h2>

          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            Thank you Madam 💖
          </p>

          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Preparing your birthday surprise...
          </p>
        </motion.div>
      )}
    </div>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Treat() {
//   const navigate = useNavigate();

//   const [noPos, setNoPos] = useState({ x: 0, y: 0 });
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [messageIndex, setMessageIndex] = useState(0);

//   const messages = [
//     "No 😏",
//     "Are you sure? 🙈",
//     "Try again 😂",
//     "Not that easy 😆",
//     "Only Yes works 😜",
//     "Come on Madam 😄",
//   ];

//   const moveNoButton = () => {
//     const maxX = window.innerWidth / 3;
//     const maxY = 150;

//     const x = Math.random() * maxX - maxX / 2;
//     const y = Math.random() * maxY - maxY / 2;

//     setNoPos({ x, y });

//     setMessageIndex((prev) => (prev + 1) % messages.length);
//   };

//   const handleYes = () => {
//     setShowSuccess(true);

//     setTimeout(() => {
//       navigate("/birthday-cake");
//     }, 2500);
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-black via-pink-950 to-black text-white px-6">
//       {/* Floating hearts */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-pink-400/20 animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               fontSize: `${20 + Math.random() * 30}px`,
//             }}
//           >
//             ❤️
//           </div>
//         ))}
//       </div>

//       {!showSuccess ? (
//         <>
//           <motion.h1
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-bold text-center mb-8 z-10"
//           >
//             One Important Question...
//           </motion.h1>

//           <p className="text-white text-center mb-12 z-10 text-2xl font-semibold">
//             Madam, will you give me a birthday treat? 😄
//           </p>

//           <div className="relative h-40 w-full flex items-center justify-center z-10">
//             {/* YES */}
//             <button
//               onClick={handleYes}
//               className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-bold text-lg transition hover:scale-110"
//             >
//               Yes 💖
//             </button>

//             {/* NO */}
//             <motion.button
//               animate={{
//                 x: noPos.x,
//                 y: noPos.y,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 250,
//               }}
//               onMouseEnter={moveNoButton}
//               className="absolute bg-red-500 px-8 py-3 rounded-full font-bold text-lg"
//             >
//               {messages[messageIndex]}
//             </motion.button>
//           </div>

//           <p className="text-gray-500 mt-10 text-center z-10">
//             Choose carefully... 😏
//           </p>
//         </>
//       ) : (
//         <motion.div
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="text-center z-10"
//         >
//           <div className="text-8xl mb-6">🎉</div>

//           <h2 className="text-4xl font-bold text-pink-300">
//             I knew you'd say YES 😄
//           </h2>

//           <p className="text-gray-300 mt-4 text-lg">Thank you Madam 💖</p>

//           <p className="text-gray-400 mt-6">
//             Preparing your birthday surprise...
//           </p>
//         </motion.div>
//       )}
//     </div>
//   );
// }
