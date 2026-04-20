import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { blogService } from '../service/blogService';
import { BlogPost } from '../data/blogData';

const BlogArchivePage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await blogService.getAllPosts(currentPage, PAGE_SIZE);
      setPosts(data);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    document.title = 'Blog & Insights | Conte + Lucro';
  }, []);

  return (
    <div className="bg-black pt-32 pb-24 text-white">
      <div className="container mx-auto">
        <div className="mb-20">
          <Link 
            to="/"
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 hover:text-brand-red transition-colors mb-12"
          >
            <ArrowLeft size={16} /> Início
          </Link>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-brand-red"></div>
            <span className="text-brand-red font-display text-xs font-black uppercase tracking-[0.3em]">Arquivo Completo</span>
          </div>
          <h1 className="text-4xl xs:text-5xl md:text-8xl font-display font-black italic uppercase tracking-tighter leading-none mb-6">
            Blog & <span className="text-white">Insights</span>
          </h1>
          <p className="max-w-2xl text-white/40 text-lg leading-relaxed">
            Mantenha-se à frente do mercado com análises técnicas, tendências fiscais e estratégias de gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {isLoading ? (
            <div className="col-span-full py-32 flex flex-col items-center justify-center gap-6">
              <Loader2 className="animate-spin text-brand-red" size={60} />
              <p className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Acessando Arquivos...</p>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <Link 
                to={`/blog/${post.id}`}
                key={post.id}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-white/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white bg-brand-red px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[9px] font-black text-white/30 uppercase tracking-widest mb-4">
                  <span>{post.date || 'Recente'}</span>
                  <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-2xl font-display font-black mb-4 italic group-hover:text-brand-red transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors">
                  Explorar Artigo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-white/20">
              <p className="text-xs font-black uppercase tracking-[0.3em]">Nenhum artigo encontrado no arquivo.</p>
            </div>
          )}
        </div>
        <div className="mt-20 flex flex-wrap justify-center items-center gap-2 xs:gap-4">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1 || isLoading}
            className="group flex items-center gap-2 xs:gap-4 bg-brand-darkGray/50 border border-white/5 px-4 xs:px-8 py-4 font-black text-[9px] xs:text-[10px] uppercase tracking-[0.2em] xs:tracking-[0.3em] hover:bg-brand-red hover:text-white disabled:opacity-20 disabled:hover:bg-brand-darkGray/50 disabled:hover:text-white/20 transition-all shadow-xl"
          >
            <ArrowLeft size={16} /> <span className="hidden xxs:inline">Anterior</span>
          </button>
          
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 px-2 xs:px-6">
            Pág <span className="text-brand-red">{currentPage}</span>
          </div>

          <button 
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={posts.length < PAGE_SIZE || isLoading}
            className="group flex items-center gap-2 xs:gap-4 bg-brand-darkGray/50 border border-white/5 px-4 xs:px-8 py-4 font-black text-[9px] xs:text-[10px] uppercase tracking-[0.2em] xs:tracking-[0.3em] hover:bg-brand-red hover:text-white disabled:opacity-20 disabled:hover:bg-brand-darkGray/50 disabled:hover:text-white/20 transition-all shadow-xl"
          >
            <span className="hidden xxs:inline">Próximo</span> <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogArchivePage;
