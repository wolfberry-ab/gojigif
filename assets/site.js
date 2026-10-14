(() => {
  'use strict';

  // Download links point at the latest-release page and are upgraded to the actual
  // file when GitHub answers. They stay useful if it doesn't (offline, rate-limited,
  // or before the first release exists).
  const patterns = {
    'mac-dmg': /^GojiGif-macos-.*\.dmg$/i,
    'mac-zip': /^GojiGif-macos-.*\.zip$/i,
  };

  function applyRelease(release) {
    if (!release || !Array.isArray(release.assets)) return;
    const links = [...document.querySelectorAll('[data-asset]')];
    const isMac = /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints <= 1;
    if (isMac) links.push(...document.querySelectorAll('[data-primary-download]'));
    links.forEach((link) => {
      const pattern = patterns[link.dataset.asset || 'mac-dmg'];
      const asset = pattern && release.assets.find((candidate) => pattern.test(candidate.name));
      if (!asset) return;
      // Only ever link to this product's release assets, whatever the API returns.
      try {
        const url = new URL(asset.browser_download_url);
        if (url.protocol === 'https:' && url.hostname === 'github.com' &&
            url.pathname.startsWith('/wolfberry-ab/gojigif/releases/download/')) {
          link.href = url.href;
        }
      } catch { /* Keep the release-page fallback. */ }
    });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  fetch('https://api.github.com/repos/wolfberry-ab/gojigif/releases/latest', {
    headers: { Accept: 'application/vnd.github+json' },
    signal: controller.signal,
  })
    .then((response) => response.ok ? response.json() : null)
    .then(applyRelease)
    .catch(() => { /* Links already point to the latest release page. */ })
    .finally(() => clearTimeout(timeout));
})();
