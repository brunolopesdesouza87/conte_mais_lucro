import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  User,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { contactData } from "../data/contactData";

const BlogPage: React.FC = () => {
  const { postId } = useParams();

  const blogPosts = [];

  useEffect(() => {
    if (postId) {
      const post = blogPosts.find((p) => p.id === postId);
      document.title = post
        ? `${post.title} | Blog Conte + Lucro`
        : "Blog | Conte + Lucro";
    } else {
      document.title = "Blog & Insights | Conte + Lucro";
    }
  }, [postId]);

  if (postId) {
    const post = blogPosts.find((p) => p.id === postId);
    if (!post)
      return (
        <div className="py-40 text-center text-white">
          Artigo não encontrado.
        </div>
      );

    const relatedPosts = blogPosts.filter((p) => p.id !== postId).slice(0, 3);
    const whatsappLink = `${contactData.whatsapp.link}?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista da Conte Mais Lucro sobre os insights que li no blog e como aplicá-los no meu negócio.")}`;

    return (
      <div className="bg-black pt-32 pb-24 text-white animate-in fade-in duration-500">
        <div className="container mx-auto">
          {/* Back Button */}
          <Link
            to="/blog"
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 hover:text-brand-red transition-colors mb-12"
          >
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>

          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-8">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-tight italic uppercase tracking-tighter mb-8">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-xs font-bold text-white/40 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-brand-red" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={14} className="text-brand-red" /> {post.author}
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-[21/9] mb-16 overflow-hidden border border-white/5">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
            {/* Share Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-40 flex flex-col gap-6 items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] vertical-text text-white/20 mb-4">
                  Compartilhar
                </span>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-red transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-red transition-all"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-red transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Main Text */}
            <div className="lg:col-span-8 prose prose-invert prose-red max-w-none">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-light italic border-l-4 border-brand-red pl-8">
                {post.excerpt}
              </p>
              <div
                className="text-white/70 space-y-8 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-3">
              <div className="sticky top-40 bg-[#080808] border border-white/5 p-8">
                <h4 className="text-lg font-display font-black uppercase tracking-tighter mb-4 italic">
                  Insights em Ação
                </h4>
                <p className="text-sm text-white/40 mb-6 leading-relaxed">
                  Transforme esse conhecimento em estratégia real para sua
                  empresa.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-red text-white py-4 font-black text-[10px] uppercase text-center tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Converse Conosco
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-32 pt-24 border-t border-white/5">
            <h2 className="text-3xl font-display font-black uppercase tracking-tighter italic mb-12">
              Artigos <span className="text-white">Relacionados</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  to={`/blog/${rp.id}`}
                  key={rp.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden mb-6 border border-white/5">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-brand-red transition-colors line-clamp-2">
                    {rp.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog List View
  return (
    <div className="bg-black pt-32 pb-24 text-white animate-in fade-in duration-500">
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
            <span className="text-brand-red font-display text-xs font-black uppercase tracking-[0.3em]">
              Arquivo Completo
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black italic uppercase tracking-tighter leading-none mb-6">
            Blog & <span className="text-white">Insights</span>
          </h1>
          <p className="max-w-2xl text-white/40 text-lg leading-relaxed">
            Mantenha-se à frente do mercado com análises técnicas, tendências
            fiscais e estratégias de gestão desenhadas para quem busca o próximo
            nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
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
                <span>{post.date}</span>
                <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                <span>{post.author}</span>
              </div>
              <h3 className="text-2xl font-display font-black mb-4 italic group-hover:text-brand-red transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:text-brand-red transition-colors">
                Explorar Artigo{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
