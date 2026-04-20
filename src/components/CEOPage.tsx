import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  TrendingUp,
  ChevronRight,
  Award,
  ShieldCheck,
  PieChart,
  Target,
} from "lucide-react";
import { contactData } from "../data/contactData";

const CEOPage: React.FC = () => {
  useEffect(() => {
    document.title = "O CEO | Jean Michel Ponciano | Conte + Lucro";
  }, []);

  const whatsappLink = `${contactData.whatsapp.link}?text=${encodeURIComponent("Olá Jean Michel! Gostaria de falar sobre a estratégia da minha empresa com base na sua visão de Compliance e Lucratividade.")}`;

  return (
    <div className="bg-black pt-32 pb-24 text-white animate-in fade-in duration-1000">
      <div className="container mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 hover:text-brand-red transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Voltar ao Início
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] overflow-hidden  grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/5 shadow-2xl">
              <img
                src="/jean-2.webp"
                alt="Jean Michel Ponciano - CEO"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-700"></div>

              <div className="absolute bottom-10 left-10 right-10 z-10">
                <div className="w-12 h-px bg-brand-red mb-6"></div>
                <h2 className="font-display font-black text-3xl uppercase italic tracking-tighter leading-none mb-2">
                  Jean Michel <br />
                  Ponciano
                </h2>
                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">
                  Sócio-Fundador & Estrategista
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-brand-red/10 pointer-events-none group-hover:border-brand-red/30 transition-colors duration-700"></div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5">
                Liderança & Visão
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.85] italic uppercase tracking-tighter mb-12">
              Quem é <br />
              <span className="text-white">Jean Michel</span>
            </h1>

            <div className="space-y-10 text-white/70 text-lg md:text-xl leading-relaxed">
              <p className="font-medium text-white border-l-4 border-brand-red pl-8">
                Contador desde 2017, Jean Michel Ponciano construiu sua
                trajetória ajudando empresários a enxergarem a contabilidade
                como uma aliada estratégica, e não apenas uma obrigação fiscal.
              </p>

              <div className="bg-brand-gray/40 border border-white/5 p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap size={120} />
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="w-16 h-16 bg-brand-red flex items-center justify-center shrink-0">
                    <Award size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-black text-xl uppercase italic tracking-tight mb-2">
                      Mestre em Compliance Tributário
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed uppercase tracking-wider font-bold">
                      Reforçando uma atuação técnica, ética e alinhada às
                      melhores práticas de governança e segurança fiscal.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Sua formação permite que decisões e estratégias sejam sempre
                pautadas na legalidade, na redução de riscos e na
                sustentabilidade do negócio. Com atuação sólida em recuperação
                tributária e gestão empresarial, Jean Michel já auxiliou
                milhares de empresas a reorganizarem seus processos e ampliarem
                sua lucratividade de forma estruturada.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="flex items-start gap-4 p-6 border border-white/5 bg-brand-darkGray/30">
                  <ShieldCheck className="text-brand-red shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-display font-black text-xs uppercase mb-2">
                      Segurança Fiscal
                    </h4>
                    <p className="text-[11px] text-white/40 leading-normal uppercase font-bold tracking-wider">
                      Estratégias pautadas em compliance e redução total de
                      riscos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 border border-white/5 bg-brand-darkGray/30">
                  <PieChart className="text-brand-red shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-display font-black text-xs uppercase mb-2">
                      Gestão de Lucro
                    </h4>
                    <p className="text-[11px] text-white/40 leading-normal uppercase font-bold tracking-wider">
                      Transformando distorções fiscais em sobra de caixa real.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative py-12">
                <div className="absolute -top-4 -left-4 text-brand-red opacity-10 font-display text-[150px] leading-none select-none">
                  "
                </div>
                <p className="text-white text-2xl md:text-4xl font-display font-black italic tracking-tighter leading-tight relative z-10">
                  Sua visão é clara: quando o empresário entende seus números,
                  ele cresce com mais lucro, menos risco e mais propósito.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-8 bg-brand-red"></div>
                  <span className="text-brand-red text-[10px] font-black uppercase tracking-[0.4em]">
                    O Princípio Conte + Lucro
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex bg-brand-red text-white px-12 py-6 font-black uppercase text-xs tracking-[0.3em] items-center gap-6 hover:bg-white hover:text-black transition-all shadow-[0_20px_50px_rgba(244,45,11,0.3)]"
              >
                Solicitar Mentoria Estratégica{" "}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOPage;
