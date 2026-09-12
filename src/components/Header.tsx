import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onChatOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onChatOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#070a12]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent tracking-wider">
            JM
          </span>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
          <span className="text-xs tracking-wider text-slate-400 font-light hidden sm:block group-hover:text-white transition-colors">
            SOFTWARE ENGINEER
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#challenges" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
            Desafios
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
            Metodologia
          </a>
          <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
            Projetos
          </a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
            Sobre
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
            FAQ
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={onChatOpen}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            Vamos conversar
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#070a12] border-b border-white/5 px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <a
            href="#challenges"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-slate-300 hover:text-amber-400 transition-colors"
          >
            Desafios
          </a>
          <a
            href="#how-it-works"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-slate-300 hover:text-amber-400 transition-colors"
          >
            Metodologia
          </a>
          <a
            href="#projects"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-slate-300 hover:text-amber-400 transition-colors"
          >
            Projetos
          </a>
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-slate-300 hover:text-amber-400 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#faq"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-slate-300 hover:text-amber-400 transition-colors"
          >
            FAQ
          </a>

          <button
            onClick={() => {
              closeMobileMenu();
              onChatOpen();
            }}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-semibold hover:shadow-lg transition-all"
          >
            Vamos conversar
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </nav>
  );
};
