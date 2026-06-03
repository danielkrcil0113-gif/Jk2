<script>
  import { nav, site } from '$data/site.js';
</script>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="#uvod" aria-label="JK Terasy - úvod">
      <img src={site.logo} alt="JK Terasy logo" width="58" height="58" />
      <span>
        <strong>JK TERASY</strong>
        <small>{site.tagline}</small>
      </span>
    </a>

    <nav aria-label="Hlavní navigace">
      {#each nav as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>

    <a class="header-cta" href="#kontakt">Poptat realizaci <span>→</span></a>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(61, 48, 40, 0.08);
  }

  .header-inner {
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    color: var(--ink);
    text-decoration: none;
    min-width: 216px;
  }

  .brand img {
    border-radius: 50%;
    box-shadow: var(--shadow-soft);
  }

  .brand strong {
    display: block;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
  }

  .brand small {
    display: block;
    margin-top: 3px;
    color: var(--wood);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;
    font-size: 0.93rem;
    font-weight: 700;
  }

  nav a {
    position: relative;
    color: var(--ink);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background: var(--wood);
    transition: width 0.2s ease;
  }

  nav a:hover,
  nav a:focus-visible {
    color: var(--wood);
  }

  nav a:hover::after,
  nav a:first-child::after {
    width: 100%;
  }

  .header-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 24px;
    border-radius: 4px;
    color: #fff;
    background: var(--ink);
    text-decoration: none;
    font-weight: 800;
    box-shadow: var(--shadow-soft);
  }

  @media (max-width: 980px) {
    .header-inner {
      min-height: auto;
      padding-block: 14px;
      flex-wrap: wrap;
    }

    nav {
      order: 3;
      width: 100%;
      justify-content: flex-start;
      overflow-x: auto;
      padding-bottom: 8px;
      gap: 18px;
    }
  }

  @media (max-width: 620px) {
    .brand {
      min-width: 0;
    }

    .brand img {
      width: 48px;
      height: 48px;
    }

    .brand strong {
      font-size: 0.95rem;
    }

    .brand small {
      font-size: 0.62rem;
    }

    .header-cta {
      padding: 12px 14px;
      font-size: 0.86rem;
    }
  }
</style>
