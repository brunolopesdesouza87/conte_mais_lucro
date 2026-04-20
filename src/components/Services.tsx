import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  Calculator,
  Briefcase,
  Rocket,
  ArrowUpRight,
  X,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { contactData } from "../data/contactData";

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
  fullDetails: string;
  benefits: string[];
}

const services: ServiceDetail[] = [
  {
    title: "Eficiência Fiscal",
    description:
      "Pagamento justo de impostos através de um planejamento que protege sua margem de lucro.",
    icon: <Calculator size={32} />,
    fullDetails:
      "Nosso planejamento tributário não é apenas sobre pagar menos, é sobre pagar o correto com segurança jurídica. Analisamos cada detalhe da sua operação para encontrar incentivos e regimes que maximizam sua sobra de caixa.",
    benefits: [
      "Revisão detalhada do enquadramento tributário",
      "Identificação de créditos não aproveitados",
      "Redução legal da carga de impostos (Elisão Fiscal)",
      "Monitoramento constante de mudanças na legislação",
    ],
  },
  {
    title: "Gestão de Pessoas",
    description:
      "Folha de pagamento e compliance trabalhista para que você tenha o melhor time sem riscos.",
    icon: <Briefcase size={32} />,
    fullDetails:
      "Transformamos a burocracia do DP em um processo fluido e seguro. Garantimos que sua relação com os colaboradores seja pautada na legalidade, evitando passivos trabalhistas e multas desnecessárias.",
    benefits: [
      "Processamento de folha de pagamento 100% digital",
      "Gestão de admissões, rescisões e férias",
      "Auditoria de compliance previdenciário",
      "Assessoria em benefícios e convenções coletivas",
    ],
  },
  {
    title: "Inteligência Contábil",
    description:
      "Relatórios claros que traduzem seus números em decisões estratégicas para o futuro.",
    icon: <BarChart3 size={32} />,
    fullDetails:
      "A contabilidade tradicional olha para o passado; a nossa olha para o seu futuro. Entregamos dashboards de fácil leitura que mostram onde sua empresa está ganhando ou perdendo dinheiro em tempo real.",
    benefits: [
      "Balanços e DREs explicados de forma simples",
      "Análise de indicadores de performance (KPIs)",
      "Consultoria mensal para interpretação de dados",
      "Apoio direto na tomada de decisões críticas",
    ],
  },
  {
    title: "Legalização e Abertura",
    description:
      "Do plano de negócio à emissão da primeira nota: abrimos sua empresa com agilidade total.",
    icon: <Rocket size={32} />,
    fullDetails:
      "Abrir uma empresa no Brasil pode ser um labirinto. Nós cuidamos de toda a jornada burocrática para que você comece a operar com o CNPJ ativo e regularizado no menor tempo possível.",
    benefits: [
      "Viabilidade de endereço e escolha de CNAEs ideais",
      "Elaboração de contrato social estratégico",
      "Registro em todos os órgãos competentes",
      "Orientação para emissão de notas fiscais",
    ],
  },
  {
    title: "Proteção Patrimonial",
    description:
      "Estruturas inteligentes para blindar seus ativos e garantir a sucessão do seu legado.",
    icon: <ShieldCheck size={32} />,
    fullDetails:
      "Seu patrimônio pessoal não deve ser refém dos riscos do negócio. Estruturamos holdings e mecanismos legais para garantir que o que você construiu esteja protegido para as próximas gerações.",
    benefits: [
      "Criação de Holdings Familiares e Patrimoniais",
      "Segregação legal de ativos pessoais e empresariais",
      "Planejamento sucessório antecipado",
      "Redução de impostos na transmissão de bens",
    ],
  },
  {
    title: "IA para MEI",
    description:
      "Tecnologia inteligente que automatiza a gestão do seu MEI, monitorando rotinas essenciais e garantindo mais praticidade, segurança e controle para o seu negócio.",
    icon: <Zap size={32} />,
    fullDetails:
      "Conte com uma tecnologia avançada que automatiza e simplifica a gestão do seu MEI. Nossa ferramenta inteligente monitora, organiza e executa rotinas essenciais, garantindo mais segurança, praticidade e controle para o seu negócio.",
    benefits: [
      "Emissão automática de notas fiscais de serviço",
      "Geração automática das guias do MEI",
      "Verificação de débitos no ano vigente",
      "Acompanhamento do faturamento com base nas notas emitidas",

      "Controle do limite anual de faturamento",
      "Declaração Anual do MEI ( DEFIS ) Automática",
    ],
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );

  const openModal = (service: ServiceDetail) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="servicos" className="py-32 bg-brand-black text-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red"></div>
              <span className="text-brand-red font-display text-xs font-black uppercase tracking-[0.4em]">
                Nosso Know-How
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black leading-[0.9] italic uppercase tracking-tighter">
              Soluções do <br />
              <span className="text-brand-red">Início ao Topo</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed font-medium uppercase tracking-widest">
            Apoio completo para quem quer começar certo ou para quem já voa
            alto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-10 md:p-14 bg-brand-black hover:bg-brand-darkGray transition-all duration-500 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-500"></div>

              <div className="text-brand-red mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 inline-block">
                {service.icon}
              </div>

              <h4 className="text-xl md:text-2xl font-display font-black mb-6 uppercase tracking-tight italic group-hover:text-brand-red transition-colors">
                {service.title}
              </h4>

              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 group-hover:text-white/80 transition-colors">
                {service.description}
              </p>

              <button
                onClick={() => openModal(service)}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-brand-red transition-all"
              >
                Conhecer Detalhes{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-500"
            onClick={closeModal}
          ></div>

          <div className="relative w-full max-w-3xl bg-brand-black border-t sm:border border-white/10 p-8 pt-12 md:p-16 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] sm:shadow-[0_50px_100px_rgba(0,0,0,0.9)] animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-500 max-h-[92vh] sm:max-h-[none] overflow-y-auto sm:overflow-visible rounded-t-[40px] sm:rounded-none">
            {/* Drag Handle for Mobile */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full sm:hidden" />

            <button
              onClick={closeModal}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/40 hover:text-brand-red transition-colors z-20"
            >
              <X size={28} className="sm:w-8 sm:h-8" />
            </button>

            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-16 h-16 bg-brand-red flex items-center justify-center text-white shrink-0 shadow-2xl">
                {selectedService.icon}
              </div>

              <div className="flex-grow w-full">
                <span className="text-brand-red font-display text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                  Solução Estratégica
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase italic tracking-tighter mb-6 md:mb-8 leading-none">
                  {selectedService.title}
                </h3>

                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-light">
                  {selectedService.fullDetails}
                </p>

                <div className="space-y-4 mb-10 md:mb-12">
                  <h4 className="text-white font-display font-black text-xs uppercase tracking-widest mb-6 italic border-b border-white/10 pb-4">
                    O que entregamos:
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedService.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-lg group/item hover:border-brand-red/30 transition-colors"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-brand-red shrink-0 mt-0.5"
                        />
                        <span className="text-white/60 text-sm font-medium tracking-wide leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
                  <a
                    href={`${contactData.whatsapp.link}?text=${encodeURIComponent(`Olá! Gostaria de entender melhor os detalhes técnicos e como aplicar a solução de ${selectedService.title} na minha empresa.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-4 bg-brand-red text-white px-10 py-6 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-xl"
                  >
                    Solicitar
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-10 py-6 border border-white/10 text-white/40 font-black uppercase text-[10px] tracking-[0.3em] hover:border-white hover:text-white transition-all"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
