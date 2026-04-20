
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { contactData } from '../data/contactData';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', path: '/', hash: 'inicio' },
    { name: 'Nossa história', path: '/nossa-historia' },
    { name: 'Serviços', path: '/', hash: 'servicos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/', hash: 'contato' },
  ];

  const socialLinks = [
    { Icon: Instagram, link: contactData.social.instagram },
    { Icon: Facebook, link: contactData.social.facebook }
  ];

  return (
    <footer className="bg-black text-white pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-8">
            <Link to="/" className="inline-block mb-10 group cursor-pointer">
              <img 
                src={contactData.logoUrl} 
                alt="Conte + Lucro Logo" 
                className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </Link>
            <p className="text-white/40 leading-relaxed mb-10 max-w-lg text-sm">
              Sua parceira estratégica em inteligência contábil e gestão empresarial de alto impacto. Focados em transformar a burocracia em resultados exponenciais através da contabilidade consultiva e tecnológica.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, link }, i) => (
                <a 
                  key={i} 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/40 hover:bg-brand-red hover:border-brand-red hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <div className="min-w-[200px]">
              <h4 className="font-display font-black text-xs mb-10 uppercase tracking-[0.4em] text-brand-red italic">Navegação</h4>
              <ul className="space-y-4 text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.hash ? `${link.path}#${link.hash}` : link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-white/20 text-[9px] font-black uppercase tracking-[0.5em] text-center md:text-left">
            © 2026 Conte + Lucro Contabilidade Especializada. <br className="md:hidden" /> Todos os direitos reservados.
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] hover:text-brand-red transition-all"
          >
            Voltar para cima <ArrowUp size={16} className="group-hover:-translate-y-2 transition-transform duration-500 text-brand-red" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
