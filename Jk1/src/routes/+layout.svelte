<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  :global(:root) {
    --ink: #231f20;
    --muted: #62564f;
    --wood: #b47d4c;
    --wood-dark: #8f5d35;
    --cream: #fbf8f4;
    --sand: #f4efe8;
    --line: rgba(61, 48, 40, 0.12);
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-2xl: 42px;
    --shadow-soft: 0 16px 44px rgba(61, 48, 40, 0.08);
    --shadow-medium: 0 22px 70px rgba(61, 48, 40, 0.14);
    --container: min(1180px, calc(100vw - 36px));
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--ink);
    background: #fff;
    scroll-behavior: smooth;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    min-width: 320px;
    background: #fff;
    color: var(--ink);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  :global(img) {
    max-width: 100%;
  }

  :global(.container) {
    width: var(--container);
    margin-inline: auto;
  }

  :global(.section) {
    padding-block: clamp(70px, 9vw, 118px);
  }

  :global(.section-pad-top) {
    padding-top: clamp(28px, 5vw, 72px);
  }

  :global(.section-heading p) {
    margin: 0 0 8px;
    color: var(--wood);
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.76rem;
  }

  :global(.section-heading h2) {
    margin: 0;
    max-width: 740px;
    font-size: clamp(2rem, 3.2vw, 3.35rem);
    line-height: 1.04;
    letter-spacing: -0.05em;
  }

  :global(.section-heading.center) {
    text-align: center;
  }

  :global(.section-heading.center h2) {
    margin-inline: auto;
  }

  :global(.btn) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    min-height: 52px;
    padding: 14px 24px;
    border-radius: 6px;
    border: 1px solid transparent;
    text-decoration: none;
    font-weight: 900;
    line-height: 1;
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  }

  :global(.btn:hover) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-soft);
  }

  :global(.btn.primary) {
    color: #fff;
    background: var(--wood);
    border-color: var(--wood);
  }

  :global(.btn.primary:hover) {
    background: var(--wood-dark);
  }

  :global(.btn.secondary) {
    color: var(--ink);
    background: #fff;
    border-color: rgba(61,48,40,.18);
  }

  :global(.btn.tertiary) {
    color: var(--wood-dark);
    background: #fff;
    border-color: rgba(180,125,76,.34);
  }

  :global(.reveal) {
    animation: reveal .7s ease both;
  }

  @keyframes reveal {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  :global(:focus-visible) {
    outline: 3px solid rgba(180,125,76,.45);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(*) {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>
