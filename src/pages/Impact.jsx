import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const impacts = [
  {
    icon: "💡",
    title: "You Gave Me Confidence",
    text: `Before I met you, I often questioned myself and my abilities.
    You saw potential in me before I fully saw it in myself.
    That belief slowly became confidence.`,
  },
  {
    icon: "🚀",
    title: "You Trusted Me With Leadership",
    text: `Making me the first President of the Student Circle of Computing
    was more than a title. It was a responsibility, a challenge,
    and a message that said, "I believe you can do this."`,
  },
  {
    icon: "📚",
    title: "You Shaped My Academic Journey",
    text: `Behind every achievement, every distinction,
    and every proud academic moment was guidance,
    encouragement, and support that pushed me forward.`,
  },
  {
    icon: "🌱",
    title: "You Helped Me Grow",
    text: `Not only as a student,
    but as a person.
    
    You helped me become more responsible,
    more disciplined,
    and more confident in facing challenges.`,
  },
  {
    icon: "❤️",
    title: "You Gave Me Hope",
    text: `There are teachers who teach subjects.
    
    There are mentors who shape careers.
    
    And then there are rare people who quietly change lives.
    
    Thank you for being one of them.`,
  },
];

export default function Impact() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-black via-indigo-950 to-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          🌱 The Difference You Made
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          When I look back at how far I have come, I realize that many of the
          opportunities, achievements, and moments I am proud of today started
          with someone believing in me.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-purple-300"
        >
          Scroll down ↓
        </motion.p>
      </section>

      {/* Impact Cards */}
      <div className="px-6 pb-20">
        {impacts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto mb-32"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
              <div className="text-6xl mb-6">{item.icon}</div>

              <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-6">
                {item.title}
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Thank You ❤️</h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            For every lesson, every conversation, every opportunity, and every
            moment of encouragement.
          </p>

          <p className="text-xl text-gray-300 leading-relaxed mt-6">
            This journey would not be the same without you.
          </p>

          <button
            onClick={() => navigate("/surprise")}
            className="mt-12 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition hover:scale-105"
          >
            Continue to a Small Surprise 🎁
          </button>
        </motion.div>
      </section>
    </div>
  );
}
