/**
 * Purely decorative, non-interactive background layer.
 *
 * Renders a subtle CSS grid and two slowly drifting accent "glow" blobs that
 * sit above the base panel but below the page content. Everything is static
 * CSS painted once; the only motion is `transform`-based (compositor only),
 * so it adds no measurable runtime cost and never blocks scrolling. Styling
 * lives in globals.css (`.bg-decor`, `.bg-grid`, `.bg-glow`).
 */
export default function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <div className="bg-grid" />
    </div>
  );
}
