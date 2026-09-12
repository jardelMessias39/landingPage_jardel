import React from "react";
import { profileData } from "../data/mock";
import { Mail, Link, GitBranch, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070a12] border-t border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <a href="#hero" className="flex items-center gap-2 group inline-flex">
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent tracking-wider">
                JM
              </span>
              <div className="h-4 w-[1px] bg-white/20"></div>
              <span className="text-sm tracking-wider text-slate-400 font-light group-hover:text-white transition-colors">
                SOFTWARE ENGINEER
              </span>
            </a>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              Especialista em construir soluções web, integrações de IA e automação para empresas que buscam escalar com tecnologia.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wide">Vamos conversar?</h4>
            <div className="flex flex-col space-y-4">
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors text-sm group w-fit">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                {profileData.email}
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors text-sm group w-fit">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                  <Link className="h-4 w-4" />
                </div>
                LinkedIn <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm group w-fit">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <GitBranch className="h-4 w-4" />
                </div>
                GitHub <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-500 font-light gap-4">
          <p>© {new Date().getFullYear()} Jardel Messias. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-amber-400 transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projetos</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
