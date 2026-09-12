import React from "react";
import { challenges } from "../data/mock";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const Challenges: React.FC = () => {
  return (
    <section id="challenges" className="relative py-24 px-6 bg-[#070a12] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full glass-panel border border-amber-500/20 bg-amber-500/10 mb-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Identificação de Gargalos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Sua empresa enfrenta <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">esses desafios?</span>
          </h2>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Trabalho manual, lentidão e desorganização custam tempo e dinheiro. Veja como transformamos problemas operacionais em eficiência tecnológica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id}
              className="relative h-[280px] sm:h-64 w-full rounded-2xl glass-panel overflow-hidden cursor-pointer group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500"
            >
              {/* Problem Face */}
              <div className="absolute inset-0 p-6 flex flex-col transition-all duration-500 ease-in-out group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{challenge.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {challenge.description}
                </p>
                <div className="mt-auto flex items-center justify-end gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  Ver Solução <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Solution Face */}
              <div className="absolute inset-0 p-6 bg-gradient-to-br from-blue-900/30 to-[#070a12] border-t-2 border-blue-500/40 flex flex-col transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Solução Inteligente</h3>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {challenge.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
