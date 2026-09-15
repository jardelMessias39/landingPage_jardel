import React from "react";
import { projects } from "../data/mock";
import { ArrowUpRight, GitBranch, Lock, CheckCircle, Database } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 px-6 bg-[#070a12] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Casos de <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Sucesso</span>
          </h2>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Conheça alguns dos projetos onde transformei problemas reais em soluções tecnológicas escaláveis e eficientes.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-stretch`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-panel group flex-grow">
                    <img 
                      src={project.image} 
                      alt={`Preview do projeto ${project.title}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                        {project.category}
                      </span>
                      {project.private && (
                        <span className="px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-xs font-semibold text-red-400 flex items-center gap-1">
                          <Lock className="h-3 w-3" /> Privado
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-7">
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">
                      {project.category}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold leading-tight text-white">{project.title}</h3>
                    <p className="max-w-2xl text-base leading-relaxed text-slate-300">{project.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="glass-panel p-4 rounded-xl border-l-2 border-l-red-500/50">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">O Problema</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="glass-panel p-4 rounded-xl border-l-2 border-l-blue-500/50">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">A Solução</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> Resultados Obtidos
                    </h4>
                    <p className="text-sm text-slate-200 font-medium">{project.result}</p>
                  </div>

                  {/* Technologies */}
                  <div className="border-t border-white/10 pt-5">
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]">
                        Ver ao vivo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full glass-panel px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]">
                        <GitBranch className="h-4 w-4" /> Repositório
                      </a>
                    )}
                    {(!project.demo && !project.github) && (
                      <div className="flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-400">
                        <Database className="h-4 w-4" /> Sistema Interno Integrado
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
