import { BlogPost } from '../data/blogData';

const API_BASE_URL = "https://miuqlysfcffnftcjifxe.supabase.co/functions/v1/clever-api/posts";
const FOLDER_ID_PARAM = "folder_id=eq.3827df97-ad9a-4be6-9c92-7759f483892e";
const API_KEY = "bm_live_dbaa87dddd5f3bbb7777798ade7227d2ead678d218920d11";

const mapApiToBlogPost = (post: any, authorName: string): BlogPost => {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.meta_description || 
             (post.content ? post.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...' : 'Confira os detalhes técnicos deste artigo em nosso blog.'),
    content: post.content || '', 
    author: authorName,
    date: post.date, 
    category: post.category ? post.category.toUpperCase() : 'GERAL',
    image: post.thumbnail, 
  };
};

export const blogService = {
  getLatestPosts: async (): Promise<BlogPost[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}?${FOLDER_ID_PARAM}`, {
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Falha ao carregar posts');
      const data = await response.json();
      const authorName = data.author?.name || 'Equipe Conte + Lucro';
      return (data.posts || [])
        .filter((p: any) => p.status === 'Publicado')
        .slice(0, 3)
        .map((p: any) => mapApiToBlogPost(p, authorName));
    } catch (error) {
      console.error("Erro no blogService (Latest):", error);
      return [];
    }
  },
  getAllPosts: async (page: number = 1, pageSize: number = 9): Promise<BlogPost[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}?${FOLDER_ID_PARAM}&page=${page}&pageSize=${pageSize}`, {
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Falha ao carregar posts');
      const data = await response.json();
      const authorName = data.author?.name || 'Equipe Conte + Lucro';
      return (data.posts || [])
        .filter((p: any) => p.status === 'Publicado')
        .map((p: any) => mapApiToBlogPost(p, authorName));
    } catch (error) {
      console.error("Erro no blogService (All):", error);
      return [];
    }
  },
  getPostById: async (id: string): Promise<BlogPost | undefined> => {
    try {
      const response = await fetch(`${API_BASE_URL}?id=eq.${id}`, {
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Falha ao carregar post por ID');
      const data = await response.json();
      const authorName = data.author?.name || 'Equipe Conte + Lucro';
      const post = data.posts?.[0];
      if (!post) return undefined;
      return mapApiToBlogPost(post, authorName);
    } catch (error) {
      console.error("Erro no blogService (ById):", error);
      return undefined;
    }
  }
};
