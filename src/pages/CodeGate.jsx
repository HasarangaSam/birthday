import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CodeGate() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const navigate = useNavigate();
  const correctAnswer = "17";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.trim() === correctAnswer) {
      setError(false);
      setUnlocking(true);

      setTimeout(() => {
        navigate("/journey");
      }, 1800);
    } else {
      setError(true);
      setAnswer("");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black text-white px-4 sm:px-6 overflow-hidden">
      {/* Glow background */}
      <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-600/20 blur-[120px] md:blur-[140px] rounded-full animate-pulse"></div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
          🔐 Access Restricted
        </h1>

        <p className="text-center text-gray-300 text-sm sm:text-base mb-6">
          Solve the C++ challenge to unlock the journey
        </p>

        {/* Code Box */}
        <div className="bg-black/60 p-4 rounded-lg text-green-300 text-xs sm:text-sm overflow-x-auto mb-6 border border-green-500/20">
          <pre>{`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    int y = 3;

    cout << x * y + 2 << endl;

    return 0;
}`}</pre>
        </div>

        {/* Question */}
        <p className="mb-4 text-center text-base sm:text-lg">
          What is the output of this program?
        </p>

        {/* INPUT */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer..."
            className={`w-full p-3 sm:p-4 rounded-lg bg-black/40 border text-center text-base sm:text-lg focus:outline-none transition
              ${
                error
                  ? "border-red-500 shake"
                  : "border-white/20 focus:border-purple-400"
              }
            `}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base"
          >
            Unlock Journey
          </motion.button>
        </form>

        {/* ERROR */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center text-sm sm:text-base mt-4"
          >
            ❌ Wrong answer. Think like a programmer.
          </motion.p>
        )}

        {/* UNLOCK */}
        {unlocking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-green-400 text-base sm:text-lg animate-pulse"
          >
            🔓 Unlocking journey...
          </motion.div>
        )}
      </motion.div>

      {/* SHAKE ANIMATION STYLE */}
      <style>{`
        .shake {
          animation: shake 0.3s;
        }

        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function CodeGate() {
//   const [answer, setAnswer] = useState("");
//   const [error, setError] = useState(false);
//   const [unlocking, setUnlocking] = useState(false);

//   const navigate = useNavigate();
//   const correctAnswer = "17";

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answer.trim() === correctAnswer) {
//       setError(false);
//       setUnlocking(true);

//       setTimeout(() => {
//         navigate("/journey");
//       }, 1800);
//     } else {
//       setError(true);
//       setAnswer("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black text-white px-4 overflow-hidden">
//       {/* Glow background */}
//       <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full animate-pulse"></div>

//       {/* MAIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
//       >
//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
//           🔐 Access Restricted
//         </h1>

//         <p className="text-center text-gray-300 mb-6">
//           Solve the C++ challenge to unlock the journey
//         </p>

//         {/* Code Box */}
//         <div className="bg-black/60 p-4 rounded-lg text-green-300 text-sm overflow-x-auto mb-6 border border-green-500/20">
//           <pre>{`#include <iostream>
// using namespace std;

// int main() {
//     int x = 5;
//     int y = 3;

//     cout << x * y + 2 << endl;

//     return 0;
// }`}</pre>
//         </div>

//         {/* Question */}
//         <p className="mb-4 text-center text-lg">
//           What is the output of this program?
//         </p>

//         {/* INPUT */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <motion.input
//             whileFocus={{ scale: 1.03 }}
//             type="text"
//             value={answer}
//             onChange={(e) => setAnswer(e.target.value)}
//             placeholder="Enter your answer..."
//             className={`p-3 rounded-lg bg-black/40 border text-center text-lg focus:outline-none transition
//               ${error ? "border-red-500 shake" : "border-white/20 focus:border-purple-400"}
//             `}
//           />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold"
//           >
//             Unlock Journey
//           </motion.button>
//         </form>

//         {/* ERROR */}
//         {error && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-400 text-center mt-4"
//           >
//             ❌ Wrong answer. Think like a programmer.
//           </motion.p>
//         )}

//         {/* UNLOCK */}
//         {unlocking && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-6 text-center text-green-400 text-lg animate-pulse"
//           >
//             🔓 Unlocking journey...
//           </motion.div>
//         )}
//       </motion.div>

//       {/* SHAKE ANIMATION STYLE */}
//       <style>{`
//         .shake {
//           animation: shake 0.3s;
//         }

//         @keyframes shake {
//           0% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           50% { transform: translateX(5px); }
//           75% { transform: translateX(-5px); }
//           100% { transform: translateX(0); }
//         }
//       `}</style>
//     </div>
//   );
// }
