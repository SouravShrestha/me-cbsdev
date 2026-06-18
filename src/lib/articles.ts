import articlesData from '@/data/articles.json';
import { loadContent } from '@/lib/content';

export interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export async function getArticles(): Promise<Article[]> {
  const articles = await loadContent<Article[]>('articles', articlesData as Article[]);

  // Sort newest first.
  return [...articles].sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });
}
