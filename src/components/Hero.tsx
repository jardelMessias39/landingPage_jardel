import React from "react";
import { ArrowRight, Bot, Cpu, Smartphone, TrendingUp } from "lucide-react";
import { profileData } from "../data/mock";

interface HeroProps {
  onChatOpen: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onChatOpen }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#070a12]">
      {/* Glow effects for Tech Accent Blue and Gold */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none animate-pulse duration-[8000ms]"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Copy and CTAs */}
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-blue-500/20 bg-blue-950/20 animate-fade-in">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-400 animate-ping"></span>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                Disponível para Projetos
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Eu transformo <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-blue-400 bg-clip-text text-transparent">
                processos em software inteligente.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-xl">
              {profileData.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onChatOpen}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-base font-bold hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              Quero automatizar meu negócio
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel text-white hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300 font-semibold text-base"
            >
              Ver projetos
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">10+</div>
              <div className="text-xs sm:text-sm text-slate-400">Soluções Criadas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">IA & APIs</div>
              <div className="text-xs sm:text-sm text-slate-400">Integração Nativa</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
              <div className="text-xs sm:text-sm text-slate-400">Foco em Resultados</div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Mockup Showcase */}
        <div className="relative w-full aspect-square max-w-[550px] mx-auto lg:ml-auto">
          {/* Main Dashboard Widget (Top Left) */}
          <div className="absolute top-[5%] left-[5%] w-[65%] glass-panel rounded-2xl p-5 shadow-2xl border border-white/10 animate-float duration-5000">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">JM OS v1.0</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400">Tempo de Processamento Salvo</p>
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5 mt-0.5">
                    120h <span className="text-xs text-green-400 font-medium flex items-center"><TrendingUp className="h-3 w-3" /> +24%</span>
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Cpu className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Automações Ativas</span>
                  <span>99.9% uptime</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-amber-400 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Flow Automation Widget (Middle Right) */}
          <div className="absolute top-[35%] right-[2%] w-[60%] glass-panel rounded-2xl p-4 shadow-2xl border border-white/10 animate-float duration-6000">
            <div className="flex items-center gap-2.5 mb-3">
              <Bot className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-semibold text-white">Agente Inteligente de Vendas</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5 text-[11px]">
                <span className="text-slate-300">1. Entrada de Lead</span>
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-[9px]">WhatsApp</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-blue-500/5 border border-blue-500/10 text-[11px]">
                <span className="text-slate-300">2. Classificação IA (Gemini)</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px]">Analisando...</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5 text-[11px]">
                <span className="text-slate-300">3. Ação: Agendar Reunião</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px]">Calendário</span>
              </div>
            </div>
          </div>

          {/* Mobile Application Preview Widget (Bottom Center) */}
          <div className="absolute bottom-[5%] left-[15%] w-[48%] glass-panel rounded-2xl p-4 shadow-2xl border border-white/10 animate-float duration-7000">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-1 rounded-full bg-white/20"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-blue-400" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">EloPro App</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-900/60 p-2.5 border border-white/5 space-y-2">
                <div className="h-14 bg-gradient-to-br from-blue-950/40 to-slate-900 rounded-lg flex items-center justify-center border border-white/5">
                  <div className="text-center">
                    <p className="text-[8px] text-slate-400">Profissional Próximo</p>
                    <p className="text-[10px] font-semibold text-white">Alex Diogo (Eletricista)</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-slate-400">Distância: 1.2km</span>
                  <span className="text-amber-400 font-bold">5.0 ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Floating animation keyframes embedded */}
      <style>{`
        @keyframes float-animation {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float-animation 6s ease-in-out infinite;
        }
        .duration-5000 { animation-duration: 5s; }
        .duration-6000 { animation-duration: 6s; }
        .duration-7000 { animation-duration: 7s; }
      `}</style>
    </section>
  );
};
