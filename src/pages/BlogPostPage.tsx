import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  User,
  Facebook,
  Instagram,
  Clock,
  Loader2,
} from "lucide-react";
import { blogService } from "../service/blogService";
import { BlogPost } from "../data/blogData";
import { contactData } from "../data/contactData";

const BlogPostPage: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;
      setIsLoading(true);
      const data = await blogService.getPostById(postId);
      setPost(data);
      setIsLoading(false);
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [postId]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog Conte + Lucro`;
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
        <Loader2 className="animate-spin text-brand-red" size={60} />
        <p className="text-xs font-black uppercase tracking-[0.4em] text-white/20 italic">
          Acessando Insights...
        </p>
      </div>
    );
  }

  if (!post)
    return (
      <div className="py-40 text-center text-white bg-black min-h-screen">
        Artigo não encontrado.
      </div>
    );
  const whatsappLink = `${contactData.whatsapp.link}?text=${encodeURIComponent(`Olá! Gostaria de falar com um especialista sobre os insights do blog: "${post.title}"`)}`;

  console.log(post);
  return (
    <div className="bg-black pt-32 pb-24 text-white">
      <div className="container mx-auto">
        <Link
          to="/blog"
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 hover:text-brand-red transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Voltar ao Blog
        </Link>

        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-8">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-black leading-tight italic uppercase tracking-tighter mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-8 text-xs font-bold text-white/40 tracking-widest">
            {post.date && (
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-brand-red" /> {post.date}
              </span>
            )}
            <span className="flex items-center gap-2">
              <User size={14} className="text-brand-red" /> {post.author}
            </span>
          </div>
        </div>

        <div className="w-full aspect-[21/9] mb-16 overflow-hidden border border-white/5">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-40 flex flex-col gap-6 items-center">
              <a
                href={contactData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-red transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href={contactData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-red transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 prose prose-invert prose-red max-w-none">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-light italic border-l-4 border-brand-red pl-8">
              {post.excerpt}
            </p>
            <div
              className="text-white/70 space-y-8 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-40 bg-[#080808] border border-white/5 p-8">
              <h4 className="text-lg font-display font-black uppercase tracking-tighter mb-4 italic">
                Insights em Ação
              </h4>
              <p className="text-sm text-white/40 mb-6 leading-relaxed">
                Transforme esse conhecimento em estratégia real.
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
      </div>
    </div>
  );
};

export default BlogPostPage;
