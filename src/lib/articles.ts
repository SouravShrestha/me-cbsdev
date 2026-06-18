import articlesData from '@/data/articles.json';

export interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export async function getArticles(): Promise<Article[]> {
  // Return the local JSON data directly, sorted by newest first
  const sortedArticles = [...(articlesData as Article[])].sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });
  
  return sortedArticles;
}
