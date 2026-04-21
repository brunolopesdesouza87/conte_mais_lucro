
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Loader2, Bot, User, CheckCircle2, MessageCircle } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { contactData } from '../data/contactData';

interface Message {
  role: 'user' | 'model';
  text: string;
  showCTA?: boolean;
}

const Contact: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'Olá! Sou o consultor digital da **Conte + Lucro**. \n\nEstamos prontos para transformar sua contabilidade em uma ferramenta de **crescimento real**. \n\nComo posso ajudar seu negócio hoje?',
      showCTA: false
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i} className="block mb-2 last:mb-0">
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
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: `Você é o Especialista de Estratégia da "Conte + Lucro".
          
          REGRAS DE CONVERSA:
          1. Diálogo humano: Responda de forma curta e direta, em blocos de no máximo 2 ou 3 parágrafos.
          2. Negrito: Sempre use **texto** para destacar palavras-chave importantes.
          3. Citação ao CEO: NÃO cite o CEO Jean Michel Ponciano constantemente. Faça-o APENAS se o usuário perguntar sobre a liderança, a história da empresa ou a formação acadêmica do fundador.
          4. Segurança: Nunca forneça cálculos exatos de impostos ou pareceres jurídicos finais. 
          5. Transição: Sempre que a dúvida for técnica ou comercial, sugira: "Para uma análise precisa desse cenário, o ideal é uma **consultoria direta via WhatsApp**".
          
          INFORMAÇÕES DE CONTATO:
          - WhatsApp: ${contactData.whatsapp.display}
          - E-mail: ${contactData.email}
          
          FOCO: Lucratividade, Compliance Tributário e Gestão Profissional.`,
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
      const text = response.text || "Estou analisando as melhores opções para sua empresa...";
      
      const shouldShowCTA = text.toLowerCase().includes("whatsapp") || 
                            text.toLowerCase().includes("consultoria") || 
                            text.toLowerCase().includes("falar com um especialista");

      setMessages(prev => [...prev, { 
        role: 'model', 
        text: text,
        showCTA: shouldShowCTA
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: `Tivemos um pico de demanda na análise. Vamos agilizar sua resposta pelo **WhatsApp** (${contactData.whatsapp.display})?` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-brand-red"></div>
              <span className="text-brand-red font-display text-xs font-black uppercase tracking-[0.3em]">Consultoria Imediata</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-black text-brand-black leading-[0.9] italic mb-8 uppercase tracking-tighter">
              O Próximo Nível <br />
              <span className="text-brand-red">do Seu Negócio</span> <br />
              Começa Aqui
            </h2>

            <p className="text-xl text-brand-black/70 mb-12 max-w-lg leading-relaxed">
              Seja você um empreendedor iniciando sua primeira jornada ou um CEO buscando escala e segurança fiscal, nossa inteligência contábil transforma números em <span className="font-bold text-brand-black underline decoration-brand-red decoration-2">liberdade estratégica.</span>
            </p>

            <div className="space-y-4 pt-12 border-t border-black/5">
              <a 
                href={contactData.phone.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer transition-all"
              >
                <div className="w-10 h-10 bg-brand-black flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <MessageCircle size={18} />
                </div>
                <span className="text-xs md:text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors uppercase tracking-widest">
                  {contactData.phone.display}
                </span>
              </a>

              <a 
  href={`mailto:${contactData.email}`}
  className="flex items-center gap-4 group cursor-pointer transition-all"
> 
  <div className="w-10 h-10 bg-brand-black flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
    <Mail size={18} />
  </div>

  <span className="flex-1 min-w-0 text-xs md:text-sm font-bold 
  text-brand-black group-hover:text-brand-red 
  transition-colors uppercase tracking-widest break-all">
    {contactData.email}
  </span>
</a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-brand-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col h-[600px] relative overflow-hidden rounded-sm">
              <div className="bg-brand-black border-b border-white/10 p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full border border-white/10">
                      <Bot size={20} className="text-brand-red" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-brand-black rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <h4 className="text-white text-[10px] font-black uppercase tracking-widest">Estrategista Digital</h4>
                    <p className="text-white/30 text-[8px] uppercase font-bold tracking-widest">Online • Análise em Tempo Real</p>
                  </div>
                </div>
              </div>

              <div 
                ref={scrollRef}
                className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#050505] scrollbar-hide"
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                    <div className={`flex flex-col gap-3 max-w-[92%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`shrink-0 w-8 h-8 flex items-center justify-center border ${msg.role === 'user' ? 'bg-white text-black border-white' : 'bg-brand-red/10 text-brand-red border-brand-red/30'}`}>
                          {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                        </div>
                        <div className={`p-4 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-black font-medium' : 'bg-[#111111] text-white/90 border border-white/5 shadow-xl'}`}>
                          {formatText(msg.text)}
                        </div>
                      </div>
                      
                      {msg.role === 'model' && msg.showCTA && (
                        <a 
                          href={contactData.whatsapp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-11 inline-flex items-center gap-2 bg-brand-red text-white px-5 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all animate-bounce shadow-[0_10px_30px_rgba(244,45,11,0.3)]"
                        >
                          <MessageCircle size={14} /> Conversar no WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-3">
                      <div className="shrink-0 w-8 h-8 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                        <Loader2 size={14} className="animate-spin" />
                      </div>
                      <div className="p-4 bg-[#111111] text-white/30 text-[10px] italic border border-white/5 uppercase tracking-widest font-bold">
                        Processando dados estratégicos...
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-[#0a0a0a] border-t border-white/10">
                <div className="relative group">
                  <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Sua dúvida para nossa inteligência..."
                    className="w-full bg-white/[0.08] border border-white/20 text-white p-4 pr-24 focus:outline-none focus:border-brand-red/60 focus:bg-white/[0.12] transition-all text-sm placeholder:text-white/20"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-brand-black px-5 py-2.5 font-black text-[10px] uppercase tracking-widest hover:bg-brand-red hover:text-white disabled:opacity-30 transition-all shadow-2xl"
                  >
                    ENVIAR
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-4 opacity-40">
                  <CheckCircle2 size={10} className="text-brand-red" />
                  <span className="text-[9px] text-white uppercase font-bold tracking-widest leading-none">Conteúdo estratégico • LGPD Compliant</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
