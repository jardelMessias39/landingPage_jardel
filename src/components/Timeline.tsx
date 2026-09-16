import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { timeline } from "../data/mock";

export const Timeline: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

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
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px overflow-visible bg-white/10 sm:-translate-x-1/2">
            {!shouldReduceMotion && (
              <motion.div
                aria-hidden="true"
                initial={{ top: "-4rem", opacity: 0 }}
                animate={{ top: ["-4rem", "calc(100% - 4rem)"], opacity: [0, 1, 1, 0] }}
                transition={{ delay: 0.2, duration: 2.4, ease: [0.16, 1, 0.3, 1], times: [0, 0.08, 0.88, 1] }}
                className="absolute left-1/2 h-16 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-amber-300 to-transparent shadow-[0_0_14px_rgba(212,175,55,0.7)]"
              />
            )}
            {!shouldReduceMotion && (
              <motion.div
                aria-hidden="true"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.38, duration: 2.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "top" }}
                className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-amber-400/70 via-amber-400/20 to-transparent"
              />
            )}
          </div>

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
                    <motion.div
                      initial={shouldReduceMotion ? false : { scale: 1, boxShadow: "0 0 0 rgba(212,175,55,0)" }}
                      animate={shouldReduceMotion ? undefined : {
                        scale: [1, 1.18, 1],
                        boxShadow: [
                          "0 0 0 rgba(212,175,55,0)",
                          "0 0 18px rgba(212,175,55,0.75)",
                          "0 0 0 rgba(212,175,55,0)"
                        ]
                      }}
                      transition={{ delay: 0.48 + index * 0.53, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 h-4 w-4 rounded-full border-2 border-amber-400 bg-[#070a12] transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                    />
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
