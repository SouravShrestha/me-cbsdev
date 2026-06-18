/**
 * Runs before paint to apply the saved theme mode to <html>,
 * preventing a flash of the wrong colors on first load. Also sets the
 * browser chrome color (mobile status/nav bar) via <meta name="theme-color">.
 *
 * Keep these colors in sync with --background in theme.css.
 */
export default function ThemeScript() {
  const script = `
    (function () {
      try {
        var mode = localStorage.getItem('theme-mode');
        if (!mode) {
          mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.classList.toggle('dark', mode === 'dark');

        var color = mode === 'dark' ? '#000000' : '#fafafa';
        var meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', 'theme-color');
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', color);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
