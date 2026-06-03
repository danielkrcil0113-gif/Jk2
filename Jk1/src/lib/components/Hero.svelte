<script>
  import Icon from './Icon.svelte';
  import { benefits, categories } from '$data/content.js';
</script>

<section id="uvod" class="hero section-pad-top">
  <div class="container hero-grid">
    <div class="hero-copy reveal">
      <p class="eyebrow">JK Terasy · dřevo v exteriéru</p>
      <h1>Terasy, fasády a dřevo v exteriéru – <span>spolehlivě a na míru</span></h1>
      <p class="lead">
        Exotické dřevo a WPC (dřevoplast). Montáž teras, fasád a výroba truhlíků
        a dřevěných dekorací pro moderní exteriéry.
      </p>
      <div class="actions">
        <a class="btn primary" href="#kontakt">Poptat realizaci <span>→</span></a>
        <a class="btn secondary" href="#realizace">Zobrazit reference</a>
      </div>
      <div class="mini-benefits" aria-label="Hlavní výhody">
        {#each benefits as benefit}
          <span><Icon name={benefit.icon} size={20} /> {benefit.title}</span>
        {/each}
      </div>
    </div>

    <figure class="hero-image reveal" aria-label="Střešní terasa z exotického dřeva">
      <img src="/images/hero-rooftop-terrace.svg" alt="Střešní terasa z exotického dřeva s výhledem na město" fetchpriority="high" width="900" height="520" />
    </figure>
  </div>

  <div class="container category-strip reveal" aria-label="Kategorie realizací">
    {#each categories as category}
      <a href="#realizace" class="category-card">
        <img src={category.image} alt={category.alt} loading="lazy" width="400" height="260" />
        <span>{category.title}</span>
      </a>
    {/each}
  </div>
</section>

<style>
  .hero {
    overflow: hidden;
    background:
      radial-gradient(circle at 10% 8%, rgba(180, 125, 76, 0.12), transparent 28rem),
      linear-gradient(180deg, #fff 0%, #fbf8f4 100%);
  }

  .hero-grid {
    min-height: 620px;
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.28fr);
    gap: 30px;
    align-items: center;
  }

  .hero-copy {
    position: relative;
    z-index: 2;
  }

  .eyebrow {
    margin: 0 0 18px;
    color: var(--wood);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.76rem;
  }

  h1 {
    max-width: 720px;
    margin: 0;
    font-size: clamp(2.6rem, 5vw, 5.25rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  h1 span {
    color: var(--wood);
  }

  .lead {
    max-width: 530px;
    margin: 24px 0 0;
    color: var(--muted);
    font-size: clamp(1rem, 1.45vw, 1.2rem);
    line-height: 1.72;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 34px;
  }

  .mini-benefits {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 30px;
    color: var(--muted);
    font-weight: 800;
    font-size: 0.88rem;
  }

  .mini-benefits span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .hero-image {
    margin: 0 -14vw 0 0;
    align-self: stretch;
    min-height: 520px;
    border-radius: 0 0 0 var(--radius-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-medium);
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .category-strip {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    margin-top: -50px;
    position: relative;
    z-index: 3;
    box-shadow: var(--shadow-medium);
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }

  .category-card {
    position: relative;
    min-height: 172px;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
  }

  .category-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  .category-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 25%, rgba(0,0,0,.7));
  }

  .category-card span {
    position: absolute;
    z-index: 2;
    left: 20px;
    right: 20px;
    bottom: 22px;
    text-align: center;
    font-size: 1.12rem;
    font-weight: 900;
  }

  .category-card:hover img {
    transform: scale(1.06);
  }

  @media (max-width: 980px) {
    .hero-grid {
      grid-template-columns: 1fr;
      min-height: auto;
      padding-block: 48px 70px;
    }

    .hero-image {
      margin: 0;
      border-radius: var(--radius-xl);
      min-height: 380px;
    }

    .category-strip {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 0;
    }
  }

  @media (max-width: 620px) {
    .actions .btn {
      width: 100%;
      justify-content: center;
    }

    .category-strip {
      grid-template-columns: 1fr;
    }
  }
</style>
