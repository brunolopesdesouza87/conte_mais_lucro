
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CounterProps {
  target: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={countRef}>{count.toLocaleString('pt-BR')}</span>;
};

const About: React.FC = () => {
  const stats = [
    { label: 'Lucro otimizado para clientes', value: 15, suffix: ' milhões', prefix: 'Mais de R$' },
    { label: 'Negócios impactados', value: 3, suffix: ' mil', prefix: 'Mais de' },
    { label: 'Consultorias de alta gestão', value: 1300, suffix: '', prefix: 'Mais de' }
  ];

  return (
    <section id="quem-somos" className="bg-black text-white overflow-hidden border-t border-white/5">
      {/* Stats Bar */}
      <div className="bg-brand-gray/50 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center md:items-start px-8 reveal`} style={{ transitionDelay: `${i * 150}ms` }}>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{stat.prefix}</span>
                <span className="text-brand-red font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-2">
                  <Counter target={stat.value} />
                  {stat.suffix}
                </span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest text-center md:text-left">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-24 md:py-40">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="reveal">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-brand-red"></div>
                <span className="text-brand-red font-display text-xs font-black uppercase tracking-[0.4em]">Parceria para o Crescimento</span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-display font-black mb-16 tracking-tighter italic uppercase leading-none">
                Além dos <span className="text-white">Números</span>
              </h2>
              
              <div className="space-y-10 text-lg md:text-2xl text-white/80 leading-relaxed font-light">
                <p>
                  Na <span className="font-bold text-white">Conte Mais Lucro</span>, nascemos da vivência real com empresários que buscam crescer sem o peso da burocracia. Simplificamos sua jornada para que você foque no que realmente importa: sua paixão e seus resultados.
                </p>
                <p className="border-l-4 border-brand-red pl-8 italic">
                  Unimos a <span className="text-white font-bold">experiência estratégica</span> com inteligência contábil para oferecer clareza total sobre o futuro do seu negócio.
                </p>
                <p>
                  Nossa missão é transformar números em decisões inteligentes, garantindo que cada etapa do seu crescimento seja sólida, segura e, acima de tudo, <span className="font-bold text-brand-red uppercase tracking-tight">altamente lucrativa.</span>
                </p>
              </div>

              <div className="mt-16">
                <Link 
                  to="/nossa-historia"
                  className="group relative inline-block bg-brand-red hover:bg-white text-white hover:text-black px-12 py-6 font-black uppercase text-xs tracking-[0.3em] transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    Conheça Nossa Visão <ChevronRight className="group-hover:translate-x-2 transition-transform" size={18} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative reveal h-full min-h-[400px] lg:min-h-[600px] group" style={{ transitionDelay: '300ms' }}>
              <div className="absolute inset-0 border border-white/10 m-8 z-0"></div>
              <div className="absolute top-0 right-0 w-full h-full p-4">
                <div className="w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                    alt="Ambiente de Estratégia Conte Mais Lucro" 
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/80 via-transparent to-transparent group-hover:opacity-40 transition-opacity"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-brand-red p-6 hidden md:block shadow-2xl z-20">
                <div className="text-white font-display font-black text-2xl italic leading-none tracking-tighter uppercase">COMPROMISSO</div>
                <div className="text-white/60 text-[8px] font-bold uppercase tracking-[0.3em] mt-1.5">Sua evolução é nosso foco</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
