import React from 'react';
import { profileData } from '../data/mock';
import { Mail, Link, GitBranch, MessageCircle, Globe, Download, Share2 } from 'lucide-react';

export const Card: React.FC = () => {
  const whatsappNumber = "5579998061093";
  const whatsappMessage = "Olá Jardel, acessei seu cartão digital e gostaria de conversar sobre um projeto.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const vcardLink = `data:text/vcard;charset=utf-8,BEGIN:VCARD%0AVERSION:3.0%0AN:${profileData.name}%0ATITLE:${profileData.title}%0ATEL:${profileData.phone}%0AEMAIL:${profileData.email}%0AURL:https://jardelmessias.dev%0AEND:VCARD`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: profileData.name,
          text: profileData.title,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Erro ao compartilhar", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-sm relative z-10 animate-fade-in">
        <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col items-center text-center">
          
          {/* Avatar and Share */}
          <div className="w-full flex justify-end mb-2">
            <button 
              onClick={handleShare}
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Compartilhar"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-blue-500 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity"></div>
            <img 
              src="/avatar-parado.png" 
              alt={profileData.name} 
              className="relative w-32 h-32 rounded-full object-cover border-4 border-[#070a12] shadow-lg"
            />
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight mb-1">{profileData.name}</h1>
          <p className="text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase mb-4">
            Software Engineer
          </p>
          <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 px-2">
            {profileData.subtitle}
          </p>

          {/* Main Action - WhatsApp */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 mb-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            Conversar no WhatsApp
          </a>

          {/* Social Links */}
          <div className="w-full space-y-3 mb-8">
            <a href="/" className="w-full flex items-center p-4 rounded-xl glass-panel border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.03] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                <Globe className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-bold text-white">Portfólio & Serviços</h3>
                <p className="text-xs text-slate-500">Conheça meus cases</p>
              </div>
            </a>
            
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="w-full flex items-center p-4 rounded-xl glass-panel border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 mr-4 group-hover:scale-110 transition-transform">
                <Link className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-bold text-white">LinkedIn</h3>
                <p className="text-xs text-slate-500">Conexões profissionais</p>
              </div>
            </a>

            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="w-full flex items-center p-4 rounded-xl glass-panel border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 mr-4 group-hover:scale-110 transition-transform">
                <GitBranch className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-bold text-white">GitHub</h3>
                <p className="text-xs text-slate-500">Meus códigos</p>
              </div>
            </a>

            <a href={`mailto:${profileData.email}`} className="w-full flex items-center p-4 rounded-xl glass-panel border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 mr-4 group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-bold text-white">E-mail</h3>
                <p className="text-xs text-slate-500">Contato direto</p>
              </div>
            </a>
          </div>

          <a 
            href={vcardLink} 
            download="Jardel_Messias.vcf"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors"
          >
            <Download className="h-4 w-4" />
            Salvar Contato (VCF)
          </a>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-xs font-light text-slate-500">
            JM Digital Identity System © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
