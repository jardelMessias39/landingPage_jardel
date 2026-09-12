import React from "react";
import { skills } from "../data/mock";
import { Monitor, Server, Bot } from "lucide-react";

export const Technologies: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-[#070a12] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tecnologias que <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">domino</span>
          </h2>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            As ferramentas certas para construir soluções escaláveis, rápidas e seguras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="glass-panel p-8 rounded-2xl border-t-2 border-t-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <Monitor className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Frontend & Mobile</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-panel p-8 rounded-2xl border-t-2 border-t-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Server className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Backend & DBs</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* IA & Automação */}
          <div className="glass-panel p-8 rounded-2xl border-t-2 border-t-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Bot className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">IA & Automação</h3>
            <div className="flex flex-wrap gap-2">
              {skills.ia.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
