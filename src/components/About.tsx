import React from "react";
import { profileData } from "../data/mock";
import { MapPin, Code2, Coffee } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#070a12] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Avatar Side */}
          <div className="relative mx-auto lg:mx-0 max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-panel border border-white/10 group">
              <img 
                src="/avatar-parado.png" 
                alt="Jardel Messias" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel p-4 rounded-xl flex items-center justify-between border border-white/5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">100% Foco</p>
                      <p className="text-slate-400 text-xs">Em resolver problemas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Muito além de <span className="text-amber-400">código.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                {profileData.bio}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-amber-500/30 transition-colors">
                <MapPin className="h-6 w-6 text-amber-400" />
                <div>
                  <h4 className="text-white font-bold mb-1">Base de Operações</h4>
                  <p className="text-slate-400 text-sm">{profileData.location}</p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-blue-500/30 transition-colors">
                <Coffee className="h-6 w-6 text-blue-400" />
                <div>
                  <h4 className="text-white font-bold mb-1">Filosofia</h4>
                  <p className="text-slate-400 text-sm">Entender a dor antes de programar a solução.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors uppercase tracking-wider text-sm"
              >
                Conheça meu trabalho <span className="text-lg">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
