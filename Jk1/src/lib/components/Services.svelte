<script>
  import Icon from './Icon.svelte';
  import { services } from '$data/content.js';
</script>

<section id="sluzby" class="section services">
  <div class="container">
    <div class="section-heading center reveal">
      <p>Co pro vás zajistíme</p>
      <h2>Terasy, fasády a dřevěné prvky do exteriéru</h2>
    </div>

    <div class="services-grid reveal">
      {#each services as service}
        <article class="service-card">
          <div class="icon-box"><Icon name={service.icon} size={44} /></div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .services {
    background: #fff;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 18px;
    margin-top: 42px;
  }

  .service-card {
    padding: 30px 20px;
    text-align: center;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(61, 48, 40, 0.08);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-soft);
    transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
  }

  .service-card:hover {
    transform: translateY(-6px);
    border-color: rgba(180, 125, 76, .32);
    box-shadow: var(--shadow-medium);
  }

  .icon-box {
    width: 70px;
    height: 70px;
    display: grid;
    place-items: center;
    margin: 0 auto 18px;
    color: var(--wood);
    border-radius: 18px;
    background: var(--sand);
  }

  h3 {
    margin: 0 0 10px;
    font-size: 1.18rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
    font-size: .93rem;
  }

  @media (max-width: 1120px) {
    .services-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 720px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 470px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
