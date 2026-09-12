import React from "react";
import { Search, PenTool, Layout, Database, Code, CheckSquare, Rocket } from "lucide-react";

const methodologySteps = [
  {
    id: 1,
    title: "Diagnóstico & Escopo",
    description: "Mergulho profundo no seu negócio para identificar gargalos e definir o objetivo exato da solução.",
    icon: Search
  },
  {
    id: 2,
    title: "Desenho da Arquitetura",
    description: "Escolha das melhores tecnologias e desenho do fluxo de dados para garantir escalabilidade.",
    icon: PenTool
  },
  {
    id: 3,
    title: "Prototipagem & UX",
    description: "Criação das telas e fluxos de usuário focados em simplicidade e alta conversão.",
    icon: Layout
  },
  {
    id: 4,
    title: "Desenvolvimento Backend & IA",
    description: "Construção do motor da aplicação: bancos de dados, APIs e integração com Inteligência Artificial.",
    icon: Database
  },
  {
    id: 5,
    title: "Desenvolvimento Frontend",
    description: "Transformação do design em uma interface responsiva, rápida e interativa para o usuário final.",
    icon: Code
  },
  {
    id: 6,
    title: "Testes & Homologação",
    description: "Validação rigorosa de todos os cenários para garantir que a solução funcione sem falhas.",
    icon: CheckSquare
  },
  {
    id: 7,
    title: "Deploy & Evolução",
    description: "Lançamento da solução na nuvem e acompanhamento contínuo para melhorias e novas features.",
    icon: Rocket
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-[#070a12] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full glass-panel border border-blue-500/20 bg-blue-500/10 mb-2">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
              Processo de Engenharia
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Como transformo uma ideia em <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">produto digital</span>
          </h2>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Metodologia ágil e focada em resultados. Não apenas escrevo código, mas construo soluções alinhadas aos objetivos da sua empresa.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-amber-500/30 to-transparent md:-translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-20">
            {methodologySteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-8 md:gap-16`}>
                  
                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 flex ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl w-full max-w-md hover:border-blue-500/30 transition-colors duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-extrabold text-white/5">0{step.id}</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden sm:flex">
                    <div className="w-12 h-12 rounded-full bg-[#070a12] border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-blue-400" />
                      </div>
                    </div>
                  </div>

                  {/* Empty Space for the other side */}
                  <div className="w-full sm:w-1/2 hidden sm:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
