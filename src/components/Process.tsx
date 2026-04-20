import React from "react";
import { Target, ShieldCheck, Cpu, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sua Visão",
    description:
      "Grandes empresas nascem de grandes sonhos — e de soluções certas. Enquanto você idealiza o futuro, nós construímos o caminho que transforma sua visão em uma empresa sólida, lucrativa e pronta para crescer.",
    icon: <Target size={24} />,
  },
  {
    number: "02",
    title: "Proteção e Tranquilidade",
    description:
      "Você constrói o futuro do seu negócio; nós garantimos a base sólida que sustenta tudo. Com rigor, estratégia e precisão, protegemos sua empresa com segurança, conformidade e controle total, para que você cresça com liberdade.",
    icon: <ShieldCheck size={24} />,
  },
  {
    number: "03",
    title: "Clareza nos Dados",
    description:
      "Números só fazem sentido quando viram direção. Nossas soluções traduzem dados em visão estratégica, para que você entenda sua empresa com clareza e decida com segurança.",
    icon: <Cpu size={24} />,
  },
  {
    number: "04",
    title: "Acompanhamento Ativo",
    description:
      "Resultados consistentes nascem de decisões bem orientadas. Por isso, atuamos como parceiros estratégicos, entregando análises mensais que dão a você clareza, segurança e poder de decisão.",
    icon: <BarChart3 size={24} />,
  },
  {
    number: "05",
    title: "Crescimento Pleno",
    description:
      "Com a base sólida e o financeiro em ordem, você ganha tempo para o que ama. É hora de ver seus projetos prosperarem sem burocracia.",
    icon: <Rocket size={24} />,
  },
];

const Process: React.FC = () => {
  return (
    <section
      id="processo"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mb-24 reveal">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-brand-red"></div>
            <span className="text-brand-red font-display text-xs font-black uppercase tracking-[0.4em]">
              O Método
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-black leading-[0.9] italic uppercase tracking-tighter mb-8">
            Crescendo com <br />
            <span className="text-brand-red">Segurança</span>
          </h2>
          <p className="text-white/40 text-lg uppercase tracking-widest font-bold max-w-2xl">
            Um caminho estruturado para transformar a contabilidade no suporte
            essencial do seu sucesso.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 gap-16 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start gap-8 md:gap-16 reveal ${index % 2 !== 0 ? "lg:flex-row-reverse text-left lg:text-right" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`lg:w-1/2 flex items-center gap-6 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  <span className="text-6xl md:text-9xl font-display font-black text-white/5 hover:text-brand-red/10 transition-colors duration-700 italic leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-16 h-16 bg-brand-darkGray border border-white/10 flex items-center justify-center text-brand-red shadow-[0_0_30px_rgba(244,45,11,0.2)]">
                    {step.icon}
                  </div>
                </div>

                <div className="lg:w-1/2 pt-4">
                  <h4 className="text-2xl md:text-3xl font-display font-black mb-4 uppercase italic tracking-tight text-white transition-colors group-hover:text-brand-red">
                    {step.title}
                  </h4>
                  <p
                    className={`text-white/40 text-base md:text-lg leading-relaxed max-w-md ${index % 2 !== 0 ? "lg:ml-auto" : ""}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center reveal">
          <div className="inline-block p-px bg-gradient-to-b from-white/20 to-transparent">
            <div className="bg-brand-gray/40 backdrop-blur-sm px-8 md:px-20 py-12 md:py-16 border border-white/5">
              <p className="text-white font-display font-black text-xl md:text-4xl italic uppercase tracking-tighter mb-8 max-w-xl mx-auto">
                Grandes conquistas começam com clareza. <br />
                <span className="text-brand-red">
                  Vamos planejar seu próximo passo juntos?
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contato"
                  className="bg-brand-red text-white px-10 py-5 font-black uppercase text-xs tracking-[0.3em] inline-block hover:bg-white hover:text-black transition-all shadow-[0_10px_40px_-10px_rgba(244,45,11,0.5)]"
                >
                  Quero Iniciar Meu Negócio
                </a>
                <a
                  href="#contato"
                  className="border border-white/20 text-white px-10 py-5 font-black uppercase text-xs tracking-[0.3em] inline-block hover:bg-white hover:text-black transition-all"
                >
                  Quero Otimizar Minha Empresa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
