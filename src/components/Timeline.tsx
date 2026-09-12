import React from "react";
import { timeline } from "../data/mock";

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-24 px-6 bg-[#070a12] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full glass-panel border border-amber-500/20 bg-amber-500/10 mb-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Trajetória Profissional
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Evolução <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Contínua</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 sm:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={event.year} className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-8 sm:gap-16 group`}>
                  
                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 flex ${isEven ? 'sm:justify-end' : 'sm:justify-start'} pl-16 sm:pl-0`}>
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl w-full border border-white/5 group-hover:border-amber-500/30 group-hover:bg-white-[0.02] transition-all duration-300 shadow-lg">
                      <div className="text-amber-400 font-extrabold tracking-widest mb-2 flex items-center gap-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">{event.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center top-6 sm:top-1/2 sm:-translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#070a12] border-2 border-amber-400 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300 z-10"></div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
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
