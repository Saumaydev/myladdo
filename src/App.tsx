import FloatingBackground from "./components/FloatingBackground";
import Hero from "./components/Hero";
import ComplimentMachine from "./components/ComplimentMachine";
import HugCounter from "./components/HugCounter";
import MoodCheck from "./components/MoodCheck";
import ReasonsCards from "./components/ReasonsCards";
import JokeBox from "./components/JokeBox";
import LoveNote from "./components/LoveNote";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-purple-100">
      <FloatingBackground />

      <main className="relative z-10 pb-10">
        <Hero />
        <ComplimentMachine />
        <HugCounter />
        <MoodCheck />
        <ReasonsCards />
        <JokeBox />
        <LoveNote />
      </main>
    </div>
  );
}
