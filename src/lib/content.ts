import { getCloudflareContext } from "@opennextjs/cloudflare";
import { unstable_cache } from "next/cache";

/**
 * Content is no longer imported at build time. Instead the raw JSON lives in a
 * Cloudflare KV namespace and is read at runtime, so editing content (via the
 * KV dashboard, `wrangler kv key put`, or `npm run sync:content`) does NOT
 * require a redeploy.
 *
 * The bundled `src/data/*.json` files remain the canonical seed and the
 * fallback: they are used during local `next dev` (where the binding is
 * usually absent), at build time, and any time the KV key is missing or a read
 * fails — so a page never breaks.
 *
 * Only the raw textual/link JSON moves to KV. Icon/image string keys are still
 * resolved to React components / StaticImageData in the lib layer via
 * `getIcon`/`getImage`, which cannot live in JSON.
 *
 * Note: `carousel`, `home`, and `navigation` are intentionally NOT here. They
 * change rarely and stay as build-time static imports in their lib modules.
 */

/** KV keys — kept aligned with the `src/data/*.json` basenames. */
export type ContentKey =
  | "about"
  | "work"
  | "projects"
  | "articles"
  | "social-links"
  | "certifications"
  | "skills";

// Minimal structural type for the KV binding so we don't need to pull in
// `@cloudflare/workers-types` just for this one read path.
interface KVNamespaceLike {
  get(key: string, type: "json"): Promise<unknown | null>;
}

const REVALIDATE_SECONDS = 300; // 5 min: edits go live without a redeploy.

async function readFromKV(key: ContentKey): Promise<unknown | undefined> {
  try {
    // `{ async: true }` so this also works outside a request (build/SSG,
    // generateStaticParams). Returns undefined when there's no Cloudflare
    // context (e.g. plain `next dev`) so the caller falls back to the seed.
    const { env } = await getCloudflareContext({ async: true });
    const kv = (env as { CONTENT?: KVNamespaceLike }).CONTENT;
    if (!kv) return undefined;

    // `"json"` makes KV parse the stored string for us; null = key not set.
    const value = await kv.get(key, "json");
    return value ?? undefined;
  } catch {
    // Never let a content read break the page — fall back to the seed.
    return undefined;
  }
}

/**
 * Read a content document from KV, cached for {@link REVALIDATE_SECONDS}, and
 * fall back to the bundled seed JSON when the key/binding is unavailable.
 *
 * Only the raw JSON is cached here; icon/image resolution happens in the
 * caller, after this returns, so non-serializable values never enter the cache.
 */
export async function loadContent<T>(key: ContentKey, fallback: T): Promise<T> {
  const read = unstable_cache(
    async () => {
      const data = await readFromKV(key);
      // Cache a sentinel (null) for "not in KV" so we don't permanently cache
      // the fallback; the fallback is applied below, outside the cache.
      return data === undefined ? null : data;
    },
    ["content", key],
    { revalidate: REVALIDATE_SECONDS, tags: ["content", `content:${key}`] },
  );

  const data = await read();
  return (data ?? fallback) as T;
}
