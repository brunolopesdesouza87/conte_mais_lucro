
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2, MessageCircle } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { contactData } from '../data/contactData';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente da **Conte + Lucro**. \n\nComo posso ajudar seu negócio a prosperar com **segurança estratégica** hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i} className="block mb-1 last:mb-0">
        {line.split(/\*\*(.*?)\*\*/g).map((part, j) => (
          j % 2 === 1 ? <strong key={j} className="text-white font-black">{part}</strong> : part
        ))}
      </span>
    ));
  };

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Você é o Consultor Virtual da "Conte + Lucro".
          
          DIRETRIZES:
          - CONCISO: Responda em blocos de parágrafos curtos.
          - NEGTRITO: Use **texto** para enfatizar pontos-chave.
          - CEO: MENCIONE o CEO Jean Michel apenas se o usuário perguntar sobre o fundador ou autoridade da empresa. Caso contrário, foque nas soluções da Conte + Lucro.
          - WHATSAPP: Sempre recomende o contato humano (${contactData.whatsapp.display}) para dúvidas fiscais pesadas.`,
        },
      });
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      initChat();
      const response = await chatRef.current!.sendMessage({ message: userMessage });
      const botText = response.text || "Pode reformular sua dúvida? Estou pronto para ajudar.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: `Ocorreu uma instabilidade. Vamos falar diretamente pelo **WhatsApp** (${contactData.whatsapp.display})?` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-4 md:right-12 z-[100] font-sans">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[580px] bg-brand-black border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-brand-red p-4 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-black italic text-xs">C+L</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Conte + Lucro</h4>
                <p className="text-white/70 text-[9px] uppercase font-black tracking-widest">IA Inteligente</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[#050505]"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[88%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-white text-black' : 'bg-brand-red text-white'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3.5 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-black rounded-l-xl rounded-br-xl font-medium' : 'bg-[#121212] text-white/90 border border-white/10 rounded-r-xl rounded-bl-xl shadow-xl'}`}>
                    {formatText(msg.text)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%]">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center">
                    <Loader2 size={14} className="animate-spin" />
                  </div>
                  <div className="p-3 bg-[#121212] text-white/40 text-xs border border-white/10 rounded-r-xl rounded-bl-xl italic tracking-widest uppercase font-bold">
                    Consultando...
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-3 bg-[#0a0a0a] border-t border-white/5">
            <a 
              href={contactData.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600/10 hover:bg-green-600/20 text-green-500 text-[10px] font-black uppercase tracking-widest transition-all rounded-sm border border-green-600/20"
            >
              <MessageCircle size={14} /> WhatsApp Corporativo
            </a>
          </div>

          <div className="p-4 border-t border-white/10 bg-brand-black">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Qual seu desafio agora?"
                className="w-full bg-white/[0.08] border border-white/20 text-white pl-4 pr-20 py-4 focus:outline-none focus:border-brand-red/60 focus:bg-white/[0.12] transition-all text-sm placeholder:text-white/20"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-brand-red hover:bg-white hover:text-black disabled:opacity-30 disabled:pointer-events-none transition-all px-4 py-2 font-black text-[10px] uppercase tracking-tighter shadow-xl"
              >
                ENVIAR
              </button>
            </div>
            <p className="text-[8px] text-white/20 mt-3 text-center uppercase tracking-[0.3em] font-black">Powered by Conte + Lucro Strategy</p>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_rgba(244,45,11,0.5)] hover:scale-110 transition-all duration-300 relative group z-50 ${isOpen ? 'rotate-90 scale-90' : ''}`}
      >
        {isOpen ? <X size={28} strokeWidth={2.5} /> : <MessageSquare size={28} strokeWidth={2.5} />}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center animate-bounce shadow-2xl">
            <span className="w-2.5 h-2.5 bg-brand-red rounded-full"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
