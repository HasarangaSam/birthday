import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const mutedRoutes = new Set(["/birthday-fireworks"]);

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const location = useLocation();
  const shouldPlay = !mutedRoutes.has(location.pathname);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;

    if (!shouldPlay) {
      audio.pause();
      return;
    }

    const playAudio = () => {
      audio.play().catch(() => {
        window.addEventListener("pointerdown", playAudio, { once: true });
        window.addEventListener("keydown", playAudio, { once: true });
      });
    };

    playAudio();

    return () => {
      window.removeEventListener("pointerdown", playAudio);
      window.removeEventListener("keydown", playAudio);
    };
  }, [shouldPlay, location.pathname]);

  if (!shouldPlay) return null;

  return (
    <audio ref={audioRef} src="/audio/background.mp3" loop preload="auto" />
  );
}
