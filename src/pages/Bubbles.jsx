import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Bubbles() {
  const [bubbles, setBubbles] = useState([]);
  const [blowing, setBlowing] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const navigate = useNavigate();

  // Track mouse position
  useEffect(() => {
    const move = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Bubble generator while blowing
  useEffect(() => {
    if (!blowing) return;

    const interval = setInterval(() => {
      const newBubble = {
        id: Math.random(),
        x: mousePos.current.x,
        y: mousePos.current.y,
        size: Math.random() * 30 + 15,
        speed: Math.random() * 2 + 1,
        drift: (Math.random() - 0.5) * 2,
      };

      setBubbles((prev) => [...prev, newBubble]);
    }, 120);

    return () => clearInterval(interval);
  }, [blowing]);

  // Animate bubbles
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev
          .map((b) => ({
            ...b,
            y: b.y - b.speed,
            x: b.x + b.drift,
          }))
          .filter((b) => b.y > -100),
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black text-white"
      onMouseDown={() => setBlowing(true)}
      onMouseUp={() => setBlowing(false)}
      onMouseLeave={() => setBlowing(false)}
    >
      {/* Title */}
      <div className="absolute top-10 w-full text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold">🫧 Bubble Blow Toy</h1>
        <p className="text-gray-400 mt-2">
          Hold mouse and move to blow bubbles 😄
        </p>
      </div>

      {/* Wand indicator */}
      <div
        className="fixed w-4 h-4 bg-white/30 rounded-full pointer-events-none blur-sm"
        style={{
          left: mousePos.current.x,
          top: mousePos.current.y,
        }}
      />

      {/* Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-white/20 border border-white/30 backdrop-blur-md"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
          }}
        />
      ))}

      {/* Continue button after interaction */}
      {bubbles.length > 25 && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-20">
          <div className="text-center">
            <h2 className="text-2xl mb-4">That felt like childhood again 😄</h2>

            <button
              onClick={() => navigate("/memories")}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold"
            >
              Continue Journey →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
