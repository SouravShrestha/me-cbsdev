import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="sm:px-8 flex h-full items-center pt-16 sm:pt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center">
              <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
                404
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Page not found
              </h1>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <Link
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 mt-4"
                href="/"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
