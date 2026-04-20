import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ArrowUpRight, Loader2 } from 'lucide-react';
import { blogService } from '../service/blogService';
import { BlogPost } from '../data/blogData';

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await blogService.getLatestPosts();
      setPosts(data);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-32 bg-brand-black text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-20 -right-20 text-[200px] font-display font-black text-white/[0.02] select-none pointer-events-none uppercase italic leading-none whitespace-nowrap">
        Insights / Strategy
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8 reveal">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red"></div>
              <span className="text-brand-red font-display text-xs font-black uppercase tracking-[0.4em]">Blog & Notícias</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-display font-black leading-[0.85] uppercase tracking-tighter italic">
              Visão <br />
              <span className="text-white">Estratégica</span>
            </h2>
          </div>
          
          <Link 
            to="/blog"
            className="group flex items-center gap-6 bg-white text-black px-12 py-6 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-red hover:text-white hover:scale-105 active:scale-95 shadow-2xl"
          >
            Ver Tudo <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            <div className="col-span-full py-20 flex flex-col items-center justify-center gap-4 text-white/20">
              <Loader2 className="animate-spin text-brand-red" size={40} />
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">Carregando Visão Estratégica...</p>
            </div>
          ) : posts.length > 0 ? (
            posts.slice(0, 3).map((post, i) => (
              <Link 
                to={`/blog/${post.id}`}
                key={post.id}
                className="group cursor-pointer flex flex-col h-full bg-brand-darkGray/50 border border-white/5 hover:border-brand-red/30 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-red text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 shadow-xl">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow relative">
                  <div className="flex items-center gap-6 mb-8 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-brand-red" /> {post.date || 'Recente'}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-black mb-6 group-hover:text-brand-red transition-colors line-clamp-2 leading-tight italic uppercase tracking-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm leading-relaxed mb-10 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-colors">Ler Artigo Completo</span>
                    <ArrowUpRight className="text-brand-red group-hover:rotate-45 transition-transform duration-500" size={18} />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-white/20">
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">Nenhum insight disponível no momento.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
