
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { contactData } from '../data/contactData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/', hash: 'inicio' },
    { name: 'O CEO', path: '/o-ceo' },
    { name: 'Nossa história', path: '/nossa-historia' },
    { name: 'Serviços', path: '/', hash: 'servicos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/', hash: 'contato' },
  ];

  const handleLinkClick = (path: string, hash?: string) => {
    setIsOpen(false);
    if (hash && (location.pathname === path || (location.pathname === '' && path === '/'))) {
      const element = document.getElementById(hash);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      navigate(hash ? `${path}#${hash}` : path);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4 md:pb-0 md:border-none">
          
          <Link 
            to="/"
            className="flex items-center shrink-0 group"
          >
            <img 
              src={contactData.logoUrl} 
              alt="Conte + Lucro Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
          </Link>

          <nav className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => handleLinkClick(link.path, link.hash)}
                className="text-white/80 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-red transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-red transition-all transform hover:scale-110">
              <Instagram size={18} strokeWidth={2.5} />
            </a>
            <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-red transition-all transform hover:scale-110">
              <Facebook size={18} strokeWidth={2.5} />
            </a>

            <button className="md:hidden text-white p-1 ml-4" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col gap-6 py-8 bg-black">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => handleLinkClick(link.path, link.hash)}
                className="text-white font-bold uppercase tracking-widest text-center py-2 text-xs"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
