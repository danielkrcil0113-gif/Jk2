import { site } from '$data/site.js';

export function GET() {
  const manifest = {
    name: 'JK Terasy',
    short_name: 'JK Terasy',
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#b47d4c',
    lang: 'cs-CZ',
    icons: [
      { src: '/icons/logo.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
    ]
  };

  return new Response(JSON.stringify(manifest), {
    headers: { 'content-type': 'application/manifest+json; charset=utf-8' }
  });
}
