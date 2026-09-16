import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Loader2, Sparkles, AlertCircle, Mic, MicOff } from 'lucide-react';

interface ChatbotProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const suggestedQuestions = [
  "Como a IA pode ajudar minha empresa?",
  "Quanto custa um projeto sob medida?",
  "Vocês integram com WhatsApp?"
];

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou o Consultor Digital da JM. Como posso ajudar a otimizar os processos da sua empresa hoje?'
    }
  ]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  // Stop recognition if the chat window closes while listening
  useEffect(() => {
    if (!isOpen && isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }
  }, [isOpen, isListening]);

  const handleVoiceInput = () => {
    // Web Speech API — browser-native, no backend involved, no audio sent
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognitionAPI: any =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      setVoiceError('Seu navegador não suporta reconhecimento de voz. Tente Chrome ou Edge.');
      return;
    }

    // If already listening, stop
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    setVoiceError(null);
    const recognition = new SpeechRecognitionAPI();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript: string = event.results[0][0].transcript;
      setInputValue(prev => (prev.trim() ? `${prev} ${transcript}` : transcript));
    };

    recognition.onerror = (event: any) => {
      if (event.error === 'not-allowed') {
        setVoiceError('Permissão de microfone negada. Verifique as configurações do navegador.');
      } else if (event.error !== 'no-speech') {
        setVoiceError('Erro no reconhecimento de voz. Tente novamente.');
      }
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsError(false);
    setVoiceError(null);
    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
      
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          session_id: sessionId
        })
      });

      if (!response.ok) {
        throw new Error('Falha na resposta da API');
      }

      const data = await response.json();
      
      if (data.session_id) {
        setSessionId(data.session_id);
      }

      const systemMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response
      };
      
      setMessages(prev => [...prev, systemMsg]);
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onOpen}
            className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 hover:scale-110 transition-transform flex items-center justify-center group"
            aria-label="Abrir Consultor Digital"
          >
            <Bot className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#070a12] rounded-full"></div>
            <span className="absolute right-full mr-4 bg-[#070a12] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 glass-panel">
              Fale com a IA
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="chatbot-panel fixed inset-0 sm:bottom-6 sm:left-auto sm:top-auto sm:right-6 w-full h-[100dvh] sm:w-[400px] sm:h-[600px] z-50 flex min-h-0 flex-col sm:rounded-2xl glass-panel shadow-2xl border-t sm:border border-white/10 overflow-hidden bg-[#070a12]/95"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-blue-900/20 to-amber-500/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#070a12] border border-white/10 flex items-center justify-center text-amber-400 overflow-hidden">
                  <Bot className="h-5 w-5" />
                  <div className="absolute inset-0 bg-amber-400/10 animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#070a12] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">Consultor Digital</h3>
                <p className="text-xs text-blue-400 flex items-center gap-1 font-medium">
                  <Sparkles className="h-3 w-3" /> IA Assistant
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'user' 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-white/5 text-amber-400 border border-white/10'
                }`}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                
                <div className={`max-w-[75%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-sm'
                    : 'glass-panel bg-white/5 text-slate-200 border border-white/5 rounded-tl-sm'
                }`}>
                  <p className="leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 flex-row">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white/5 text-amber-400 border border-white/10">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="max-w-[75%] rounded-2xl rounded-tl-sm p-4 glass-panel bg-white/5 border border-white/5 flex items-center gap-2 text-slate-400">
                  <Loader2 className="h-4 w-4 animate-spin text-amber-400" />
                  <span className="text-xs">Processando...</span>
                </div>
              </div>
            )}
            
            {isError && (
              <div className="mx-auto mt-4 flex max-w-sm items-start gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-left text-xs leading-relaxed text-red-300 shadow-[0_0_24px_rgba(239,68,68,0.08)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-red-300 ring-1 ring-red-400/25">
                  <AlertCircle className="h-4 w-4" />
                </span>
                <span>O Consultor Digital está temporariamente indisponível. Tente novamente em alguns instantes.</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && !isLoading && (
            <div className="p-4 border-t border-white/5 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="inline-block px-3 py-1.5 rounded-full glass-panel border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs hover:bg-amber-500/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-[#070a12] border-t border-white/10">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isListening ? 'Ouvindo...' : 'Pergunte sobre projetos, serviços...'}
                className={`w-full bg-white/5 border rounded-full py-3 pl-4 pr-20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  isListening
                    ? 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/30 placeholder-red-400/60'
                    : 'border-white/10 focus:border-amber-500/50 focus:ring-amber-500/50'
                }`}
                disabled={isLoading}
              />
              {/* Mic button */}
              <button
                onClick={handleVoiceInput}
                disabled={isLoading}
                title={isListening ? 'Parar gravação' : 'Falar sua mensagem'}
                className={`absolute right-10 p-2 rounded-full transition-colors disabled:opacity-50 ${
                  isListening
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 animate-pulse'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
              {/* Send button */}
              <button
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 p-2 rounded-full bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 disabled:opacity-50 disabled:hover:bg-amber-500/10 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {/* Voice error feedback */}
            {voiceError && (
              <p className="mt-2 text-[11px] text-red-400 flex items-center gap-1">
                <AlertCircle className="h-3 w-3 shrink-0" />
                {voiceError}
              </p>
            )}
            <div className="text-center mt-2">
              {/* NOTE: provider label updated when backend is connected (Step 9) */}
              <p className="text-[10px] text-slate-600 font-light">JM Consultor Digital</p>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};
