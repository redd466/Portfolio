import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AiAssistant from "@/components/AiAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Skills />
      <AiAssistant />
    </main>
  );
}