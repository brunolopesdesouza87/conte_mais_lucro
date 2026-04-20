
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRevealAnimation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerOptions = { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        el.classList.remove('active');
        observer.observe(el);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);
};
