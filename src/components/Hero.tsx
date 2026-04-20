import React from "react";
import { useNavigate } from "react-router-dom";
import { contactData } from "../data/contactData";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-black overflow-hidden pt-48 lg:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
          alt="Escritório Executivo"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 animate-[pulseSoft_10s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30vw] h-[30vw] glow-spot z-0 opacity-20"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          <div className="lg:col-span-7 animate-fade-up text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div className="h-[1px] w-8 bg-brand-red"></div>
              <span className="text-brand-red font-display text-[10px] font-black uppercase tracking-[0.4em]">
                Parceria para o seu amanhã
              </span>
            </div>

            <h1 className="font-display font-black leading-[0.95] italic">
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl block uppercase tracking-tighter">
                Inteligência para
              </span>
              <span className="text-brand-red text-4xl sm:text-6xl lg:text-7xl block uppercase tracking-tighter italic drop-shadow-[0_0_30px_rgba(244,45,11,0.4)] mt-2">
                Sua Prosperidade
              </span>
            </h1>

            <p className="mt-8 text-white/40 text-[11px] md:text-xs max-w-sm mx-auto lg:mx-0 leading-relaxed uppercase tracking-[0.2em] font-bold">
              Apoio estratégico para transformar sua visão em um negócio sólido
              e sustentável, com a segurança e a clareza que você merece em cada
              etapa.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#servicos"
                className="w-full sm:w-auto bg-brand-red text-white px-10 py-5 font-black uppercase text-[10px] text-center tracking-[0.25em] transition-all hover:bg-white hover:text-black shadow-[0_10px_30px_-5px_rgba(244,45,11,0.4)] active:scale-95"
              >
                Começar Jornada
              </a>
              <a
                href={contactData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-white/20 text-white/60 px-10 py-5 font-black uppercase text-[10px] text-center tracking-[0.25em] transition-all hover:bg-white/10 hover:text-white"
              >
                Falar com um Consultor
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-2 flex justify-center lg:justify-end py-8 lg:py-0">
            <div
              className="relative w-full max-w-[340px] md:max-w-[400px] animate-fade-in group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-brand-red/30 z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/5 blur-[120px] rounded-full z-0"></div>

              <div className="relative z-10 w-full">
                <div className="relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <img
                    src="/jean-1.webp"
                    alt="Jean Michel Ponciano - Consultor de Estratégia"
                    className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent z-20"></div>
                </div>

                <button
                  onClick={() => navigate("/o-ceo")}
                  className="absolute -bottom-6 -left-4 lg:-left-6 z-30 bg-brand-red p-5 lg:p-6 shadow-[20px_20px_40px_rgba(0,0,0,0.4)] text-left hover:scale-105 active:scale-95 transition-all group"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-display font-black text-lg lg:text-xl uppercase tracking-tighter leading-none italic group-hover:underline">
                      Jean Michel Ponciano
                    </span>
                    <span className="text-white/80 font-bold text-[8px] lg:text-[9px] uppercase tracking-[0.2em] mt-2 border-t border-white/20 pt-2">
                      Sócio-Fundador e Estrategista • Ver Perfil
                    </span>
                  </div>
                </button>
              </div>

              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-brand-red/30 z-0"></div>
            </div>
          </div>

          <div className="lg:col-span-7 order-3 mt-12 lg:mt-4">
            <div className="pt-8 border-t border-white/5 flex items-center justify-center lg:justify-start opacity-30">
              <div className="text-[9px] font-bold italic text-white uppercase tracking-[0.5em] text-center lg:text-left leading-relaxed">
                Clareza • Segurança • Crescimento Real
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
