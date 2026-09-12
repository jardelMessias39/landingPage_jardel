import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MathBackground } from './components/MathBackground';
import { Challenges } from './components/Challenges';
import { Methodology } from './components/Methodology';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Timeline } from './components/Timeline';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Card } from './pages/Card';
import { Chatbot } from './components/Chatbot';

function MainLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
    console.log("Consultor Digital aberto");
  };

  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <MathBackground />
      <Header onChatOpen={handleChatOpen} />
      
      <main className="relative z-10">
        <Hero onChatOpen={handleChatOpen} />
        <Challenges />
        <Methodology />
        <Projects />
        <Technologies />
        <Timeline />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      
      <Footer />
      <Chatbot isOpen={isChatOpen} onOpen={() => setIsChatOpen(true)} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
