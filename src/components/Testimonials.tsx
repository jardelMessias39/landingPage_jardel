import React from "react";
import { testimonials } from "../data/mock";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 px-6 bg-[#070a12] border-t border-white/5 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Impacto no <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Mundo Real</span>
          </h2>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            O que dizem os clientes e parceiros sobre as soluções implementadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 hover:bg-white-[0.03] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full group"
            >
              <div className="text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors">
                <Quote className="h-10 w-10" />
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <img 
                  src={testimonial.avatar} 
                  alt={`Foto de ${testimonial.name}`} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
