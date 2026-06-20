import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function BirthdayCake() {
  const navigate = useNavigate();

  const [blown, setBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandles = () => {
    if (blown) return;

    setBlown(true);

    confetti({
      particleCount: 250,
      spread: 180,
      startVelocity: 45,
      origin: { y: 0.65 },
    });

    setTimeout(() => {
      setShowMessage(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center px-4 sm:px-6 py-2">
      {/* BACKGROUND */}
      <motion.div
        animate={{ x: [0, 150, -80, 0], y: [0, -60, 80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute top-[-100px] left-[-100px]
          w-[260px] h-[260px]
          sm:w-[360px] sm:h-[360px]
          md:w-[450px] md:h-[450px]
          rounded-full bg-pink-500/20 blur-[80px] md:blur-[120px]
        "
      />

      <motion.div
        animate={{ x: [0, -120, 60, 0], y: [0, 70, -50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute bottom-[-120px] right-[-120px]
          w-[260px] h-[260px]
          sm:w-[360px] sm:h-[360px]
          md:w-[450px] md:h-[450px]
          rounded-full bg-purple-600/20 blur-[80px] md:blur-[120px]
        "
      />

      {/* STARS */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center -translate-y-4 md:-translate-y-6">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              text-3xl sm:text-4xl md:text-7xl
              font-black tracking-tight leading-tight
            "
          >
            <span className="bg-gradient-to-r from-pink-300 via-fuchsia-200 to-purple-300 bg-clip-text text-transparent">
              Happy Birthday
            </span>
            <br />
            <span className="text-white">Ms. Erangi Piumika ✨</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-white/60 text-sm sm:text-base md:text-lg"
          >
            Make a wish before blowing the candles 💖
          </motion.p>

          {/* CANDLES */}
          <div className="mt-6 flex gap-6 sm:gap-8 md:gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative flex flex-col items-center">
                {!blown && (
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="absolute -top-5 w-4 h-5 rounded-full bg-orange-400 shadow-[0_0_30px_rgba(255,140,0,1)]"
                  />
                )}

                {blown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: [0, 0.7, 0],
                      y: -50,
                      scale: [0.5, 2],
                    }}
                    transition={{ duration: 2 }}
                    className="absolute -top-2 w-8 h-8 rounded-full bg-gray-400/40 blur-xl"
                  />
                )}

                <div className="w-2 h-10 bg-white rounded-full" />
              </div>
            ))}
          </div>

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: blown ? [1, 1.04, 1] : 1 }}
            transition={{ duration: 0.8 }}
            className="mt-4 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 blur-2xl opacity-40" />

            <img
              src="/images/era2.jpeg"
              alt="Erangi"
              className="
                relative w-40 h-40
                sm:w-52 sm:h-52
                md:w-64 md:h-64
                object-cover rounded-full
                border-4 border-white/20 shadow-2xl
              "
            />
          </motion.div>

          {/* BUTTON */}
          {!blown && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={blowCandles}
              className="
                mt-4
                px-6 sm:px-8
                py-3 sm:py-4
                rounded-full font-semibold text-white
                text-sm sm:text-base
                bg-gradient-to-r from-pink-500 to-purple-600
                shadow-[0_0_40px_rgba(236,72,153,0.5)]
              "
            >
              🌬 Blow The Candles
            </motion.button>
          )}

          {/* MESSAGE */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                className="mt-3"
              >
                <p className="text-pink-200 text-base sm:text-lg">
                  ✨ Your wish is now floating among the stars ✨
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/birthday-card")}
                  className="
                    mt-3
                    px-6 sm:px-8
                    py-3 sm:py-4
                    rounded-full font-semibold text-white
                    text-sm sm:text-base
                    bg-gradient-to-r from-emerald-500 to-teal-500
                  "
                >
                  💌 Open Birthday Letter
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";

// export default function BirthdayCake() {
//   const navigate = useNavigate();

//   const [blown, setBlown] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);

//   const blowCandles = () => {
//     if (blown) return;

//     setBlown(true);

//     confetti({
//       particleCount: 250,
//       spread: 180,
//       startVelocity: 45,
//       origin: { y: 0.65 },
//     });

//     setTimeout(() => {
//       setShowMessage(true);
//     }, 1200);
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center px-4 sm:px-6 py-8">
//       {/* BACKGROUND */}

//       <motion.div
//         animate={{
//           x: [0, 150, -80, 0],
//           y: [0, -60, 80, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           top-[-100px]
//           left-[-100px]
//           w-[280px]
//           h-[280px]
//           sm:w-[380px]
//           sm:h-[380px]
//           md:w-[450px]
//           md:h-[450px]
//           rounded-full
//           bg-pink-500/20
//           blur-[90px]
//           md:blur-[120px]
//         "
//       />

//       <motion.div
//         animate={{
//           x: [0, -120, 60, 0],
//           y: [0, 70, -50, 0],
//         }}
//         transition={{
//           duration: 24,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           bottom-[-120px]
//           right-[-120px]
//           w-[280px]
//           h-[280px]
//           sm:w-[380px]
//           sm:h-[380px]
//           md:w-[450px]
//           md:h-[450px]
//           rounded-full
//           bg-purple-600/20
//           blur-[90px]
//           md:blur-[120px]
//         "
//       />

//       {/* STARS */}

//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             opacity: [0.2, 1, 0.2],
//             scale: [1, 1.4, 1],
//           }}
//           transition={{
//             duration: 2 + Math.random() * 3,
//             repeat: Infinity,
//           }}
//           className="absolute w-1 h-1 bg-white rounded-full"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//         />
//       ))}

//       {/* CONTENT */}

//       <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
//         <div className="flex flex-col items-center text-center">
//           {/* TITLE */}

//           <motion.h1
//             initial={{ opacity: 0, y: -25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="
//               text-3xl
//               sm:text-4xl
//               md:text-7xl
//               font-black
//               tracking-tight
//               leading-tight
//             "
//           >
//             <span className="bg-gradient-to-r from-pink-300 via-fuchsia-200 to-purple-300 bg-clip-text text-transparent">
//               Happy Birthday
//             </span>

//             <br />

//             <span className="text-white">Ms. Erangi Piumika ✨</span>
//           </motion.h1>

//           {/* SUBTITLE */}

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="mt-3 text-white/60 text-sm sm:text-base md:text-lg"
//           >
//             Make a wish before blowing the candles 💖
//           </motion.p>

//           {/* CANDLES */}

//           <div className="mt-8 flex gap-6 sm:gap-8 md:gap-10">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="relative flex flex-col items-center">
//                 {!blown && (
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.15, 1],
//                       opacity: [1, 0.7, 1],
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       repeat: Infinity,
//                     }}
//                     className="
//                       absolute
//                       -top-5
//                       w-4
//                       h-5
//                       rounded-full
//                       bg-orange-400
//                       shadow-[0_0_30px_rgba(255,140,0,1)]
//                     "
//                   />
//                 )}

//                 {blown && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.5,
//                     }}
//                     animate={{
//                       opacity: [0, 0.7, 0],
//                       y: -50,
//                       scale: [0.5, 2],
//                     }}
//                     transition={{
//                       duration: 2,
//                     }}
//                     className="
//                       absolute
//                       -top-2
//                       w-8
//                       h-8
//                       rounded-full
//                       bg-gray-400/40
//                       blur-xl
//                     "
//                   />
//                 )}

//                 <div className="w-2 h-10 bg-white rounded-full" />
//               </div>
//             ))}
//           </div>

//           {/* PHOTO */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{
//               opacity: 1,
//               scale: blown ? [1, 1.04, 1] : 1,
//             }}
//             transition={{ duration: 0.8 }}
//             className="mt-6 relative"
//           >
//             <div
//               className="
//                 absolute
//                 inset-0
//                 rounded-full
//                 bg-gradient-to-r
//                 from-pink-500
//                 via-fuchsia-500
//                 to-purple-500
//                 blur-2xl
//                 opacity-40
//               "
//             />

//             <img
//               src="/images/era2.jpeg"
//               alt="Erangi"
//               className="
//                 relative
//                 w-40
//                 h-40
//                 sm:w-52
//                 sm:h-52
//                 md:w-64
//                 md:h-64
//                 object-cover
//                 rounded-full
//                 border-4
//                 border-white/20
//                 shadow-2xl
//               "
//             />
//           </motion.div>

//           {/* BUTTON */}

//           {!blown && (
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={blowCandles}
//               className="
//                 mt-8
//                 px-6 sm:px-8
//                 py-3 sm:py-4
//                 rounded-full
//                 font-semibold
//                 text-white
//                 text-sm sm:text-base
//                 bg-gradient-to-r
//                 from-pink-500
//                 to-purple-600
//                 shadow-[0_0_40px_rgba(236,72,153,0.5)]
//               "
//             >
//               🌬 Blow The Candles
//             </motion.button>
//           )}

//           {/* MESSAGE */}

//           <AnimatePresence>
//             {showMessage && (
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                   filter: "blur(10px)",
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   filter: "blur(0px)",
//                 }}
//                 transition={{
//                   duration: 1,
//                 }}
//                 className="mt-6"
//               >
//                 <p className="text-pink-200 text-base sm:text-lg">
//                   ✨ Your wish is now floating among the stars ✨
//                 </p>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate("/birthday-card")}
//                   className="
//                     mt-4
//                     px-6 sm:px-8
//                     py-3 sm:py-4
//                     rounded-full
//                     font-semibold
//                     text-white
//                     text-sm sm:text-base
//                     bg-gradient-to-r
//                     from-emerald-500
//                     to-teal-500
//                   "
//                 >
//                   💌 Open Birthday Letter
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }
