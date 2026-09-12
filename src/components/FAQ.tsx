import React, { useState } from "react";
import { faqs } from "../data/mock";
import { Plus, Minus } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-6 bg-[#070a12] border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Perguntas <span className="text-amber-400">Frequentes</span>
          </h2>
          <p className="text-slate-300 text-lg font-light">
            Tire suas dúvidas sobre o processo de desenvolvimento e entrega.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-amber-500/30 bg-white/[0.03]' : 'border-white/5 hover:border-white/10'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold ${isOpen ? 'text-amber-400' : 'text-slate-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full flex-shrink-0 ml-4 transition-colors ${isOpen ? 'bg-amber-500/10 text-amber-400' : 'bg-white/5 text-slate-400'}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}
                >
                  <p className="text-slate-400 text-sm leading-relaxed font-light border-t border-white/5 pt-4 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
