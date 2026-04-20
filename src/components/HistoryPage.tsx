
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, ShieldCheck, ChevronRight, Briefcase, TrendingUp, Users, HeartHandshake } from 'lucide-react';
import { contactData } from '../data/contactData';

const HistoryPage: React.FC = () => {
  useEffect(() => {
    document.title = "Nossa História | Conte + Lucro";
  }, []);

  const values = [
    { title: "Crescimento com propósito", desc: "Crescer vai além do faturamento: envolve estrutura, clareza e visão de futuro.", icon: <TrendingUp size={20} /> },
    { title: "Transparência e ética", desc: "Responsabilidade, clareza e compromisso com a verdade em cada decisão.", icon: <ShieldCheck size={20} /> },
    { title: "Estratégia orientada a resultados", desc: "Foco em gerar impacto financeiro e organizacional real em cada consultoria.", icon: <Target size={20} /> },
    { title: "Valorização do empresário", desc: "Entendemos a realidade de quem empreende e falamos a linguagem do negócio.", icon: <Users size={20} /> },
    { title: "Evolução contínua", desc: "Soluções atuais, seguras e eficientes através do aprendizado constante.", icon: <HeartHandshake size={20} /> }
  ];

  const whatsappLink = `${contactData.whatsapp.link}?text=${encodeURIComponent('Olá Jean Michel! Acabei de ler a história da Conte Mais Lucro e gostaria de saber como posso fazer parte dessa trajetória de sucesso com minha empresa.')}`;

  return (
    <div className="bg-black pt-32 pb-24 text-white animate-in fade-in duration-700">
      <div className="container mx-auto">
        <Link 
          to="/"
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 hover:text-brand-red transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Voltar ao Início
        </Link>

        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-8">
            Propósito e Trajetória
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-black leading-tight italic uppercase tracking-tighter mb-8">
            História da <br /><span className="text-white">Conte Mais Lucro</span>
          </h1>
          <p className="text-sm md:text-base text-white/40 font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
            Transformando a contabilidade em uma ferramenta real de crescimento para o empresário brasileiro.
          </p>
        </div>

        <div className="w-full aspect-[21/9] mb-24 overflow-hidden border border-white/5 relative group">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Nossa Sede e Visão" 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-px bg-brand-red"></div>
               <span className="text-white font-display font-black uppercase italic tracking-widest text-xl">Desde 2017</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto mb-32">
          <div className="lg:col-span-8 prose prose-invert prose-red max-w-none">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-light italic border-l-4 border-brand-red pl-8">
              A Conte Mais Lucro nasce com um propósito claro: ser o suporte estratégico que o pequeno e médio empresário precisa para prosperar com segurança.
            </p>
            <div className="text-white/70 space-y-10 text-lg leading-relaxed">
              <section>
                <h2 className="text-3xl font-display font-black text-white italic uppercase tracking-tight mb-6">A Visão do Fundador</h2>
                <p>Fundada a partir da trajetória e visão estratégica de <strong>Jean Michel Ponciano</strong>, a empresa surge da prática e da vivência diária com empresários.</p>
                <p>Desde 2017, Jean Michel construiu sua carreira contábil atuando diretamente no apoio a negócios de diversos setores.</p>
              </section>
              <section className="bg-brand-gray/50 p-10 border border-white/5">
                <h3 className="text-xl font-display font-black text-brand-red uppercase mb-8 italic tracking-widest">Impacto Concreto</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div><div className="text-3xl font-display font-black text-white mb-2 tracking-tighter">R$ 15M+</div><div className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-tight">Impostos Recuperados</div></div>
                  <div><div className="text-3xl font-display font-black text-white mb-2 tracking-tighter">3.000+</div><div className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-tight">Empresas Reestruturadas</div></div>
                  <div><div className="text-3xl font-display font-black text-white mb-2 tracking-tighter">1.300+</div><div className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-tight">Consultorias Realizadas</div></div>
                </div>
              </section>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-8">
              <div className="bg-[#080808] border border-white/5 p-8">
                <div className="flex items-center gap-3 mb-6 text-brand-red"><Briefcase size={20} /><h4 className="text-lg font-display font-black uppercase tracking-tighter italic">Missão</h4></div>
                <p className="text-sm text-white/60 leading-relaxed">Impulsionar o crescimento do pequeno e médio empresário por meio de soluções estratégicas.</p>
              </div>
              <div className="bg-[#080808] border border-white/5 p-8">
                <div className="flex items-center gap-3 mb-6 text-brand-red"><Eye size={20} /><h4 className="text-lg font-display font-black uppercase tracking-tighter italic">Visão</h4></div>
                <p className="text-sm text-white/60 leading-relaxed">Ser referência nacional em contabilidade estratégica.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group inline-flex bg-brand-red text-white px-16 py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_20px_50px_rgba(244,45,11,0.3)] items-center gap-4 mx-auto">
            Quero fazer parte dessa história <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
