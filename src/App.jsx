import { BrowserRouter, Routes, Route } from "react-router-dom";

import CodeGate from "./pages/CodeGate";
import Journey from "./pages/Journey";
import Memories from "./pages/Memories";
import Impact from "./pages/Impact";
import Surprise from "./pages/Surprise";
import Treat from "./pages/Treat"; // 💝 NEW
import BirthdayCake from "./pages/BirthdayCake";
import BirthdayCard from "./pages/BirthdayCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔐 Locked entry point */}
        <Route path="/" element={<CodeGate />} />

        {/* 🌿 Main emotional journey */}
        <Route path="/journey" element={<Journey />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/surprise" element={<Surprise />} />

        {/* 💝 NEW INTERACTIVE PAGE */}
        <Route path="/treat" element={<Treat />} />

        <Route path="/birthday-cake" element={<BirthdayCake />} />
        <Route path="/birthday-card" element={<BirthdayCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
