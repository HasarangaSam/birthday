import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Journey() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white px-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-10"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          You unlocked it… ⛓️‍💥
        </h1>

        {/* Message */}
        <p className="text-gray-300 max-w-2xl text-lg mb-10 leading-relaxed">
          This is not just a website.
          <br />
          <br />
          It is a small journey of gratitude built from every moment of
          guidance, belief, and support you gave.
          <br />
          <br />
          Everything you are about to see… comes from appreciation ❤️
          <br />
          <br />
          Now let’s continue into the memories we created together 📸
        </p>

        {/* ONLY BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/memories")}
          className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold text-lg transition"
        >
          Continue Journey →
        </motion.button>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-sm mt-8"
        >
          (Memories begin here… 📸)
        </motion.p>
      </motion.div>

      {/* floating visuals */}
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-16 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
    </div>
  );
}
