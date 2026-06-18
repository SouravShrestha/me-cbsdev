/**
 * Update the browser chrome color (mobile status / address bar).
 *
 * iOS Safari only reads <meta name="theme-color"> on load/scroll and ignores
 * live changes, so two things are needed:
 *  1. Remove and re-insert the meta node (don't just mutate `content`).
 *  2. Nudge the scroll position by one instant, invisible pixel to force
 *     Safari to re-sample and repaint the status/address bar.
 *
 * Colors mirror --background in theme.css.
 */
export function applyThemeColor(mode: "light" | "dark") {
  const color = mode === "dark" ? "#000000" : "#fafafa";

  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((el) => el.remove());
  const meta = document.createElement("meta");
  meta.setAttribute("name", "theme-color");
  meta.setAttribute("content", color);
  document.head.appendChild(meta);

  nudgeSafariRepaint();
}

/**
 * Scroll by 1px and back (instantly, so it's imperceptible) to make iOS
 * Safari re-read theme-color. No-op when the page can't scroll.
 */
function nudgeSafariRepaint() {
  if (document.body.scrollHeight <= window.innerHeight) return;

  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const y = window.scrollY;
  window.scrollTo(0, y + 1);
  requestAnimationFrame(() => {
    window.scrollTo(0, y);
    root.style.scrollBehavior = previousBehavior;
  });
}
