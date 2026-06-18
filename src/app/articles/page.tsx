import { Metadata } from "next";
import { ExternalLinkIcon } from "@/components/icons";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-3xl font-semibold text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-10 sm:leading-14">
                Thoughts, experiments, and occasional developer wisdom.
              </h1>
              <p className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                I write about software development, side projects, architecture,
                productivity, and the mistakes that taught me the most. Here are
                some recent posts.
              </p>
            </header>
            <div className="mt-16 sm:mt-20">
              <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                  {articles.map((article) => {
                    const date = new Date(article.pubDate);
                    const formattedDate = date.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    });

                    return (
                      <article
                        key={article.link}
                        className="md:grid md:grid-cols-4 md:items-baseline"
                      >
                        <div className="md:col-span-3 group relative flex flex-col items-start">
                          <h2 className="text-base font-medium text-zinc-800 dark:text-zinc-100">
                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                            <a
                              target="_blank"
                              href={article.link}
                              rel="noopener noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                              <span className="relative z-10">
                                {article.title}
                              </span>
                            </a>
                          </h2>
                          <time
                            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                            dateTime={date.toISOString()}
                          >
                            <span
                              className="absolute inset-y-0 left-0 flex items-center"
                              aria-hidden="true"
                            >
                              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                            </span>
                            {formattedDate}
                          </time>
                          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-7">
                            {article.description}
                          </p>
                          <div
                            aria-hidden="true"
                            className="relative z-10 mt-4 flex items-center text-sm font-medium text-accent"
                          >
                            Read article
                            <ExternalLinkIcon className="h-4 w-4 ml-2" />
                          </div>
                        </div>
                        <time
                          className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                          dateTime={date.toISOString()}
                        >
                          {formattedDate}
                        </time>
                      </article>
                    );
                  })}
                  {articles.length === 0 && (
                    <p className="text-zinc-600 dark:text-zinc-400">
                      No articles found. Please check back later.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
