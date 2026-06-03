<script>
  import { transformations } from '$data/content.js';
</script>

<section id="realizace" class="section portfolio">
  <div class="container">
    <div class="section-row reveal">
      <div class="section-heading">
        <p>Proměny a realizace</p>
        <h2>Ukázky prací, které prodávají už na první pohled</h2>
      </div>
      <a class="btn tertiary" href="#kontakt">Zobrazit všechny realizace</a>
    </div>

    <div class="project-grid reveal">
      {#each transformations as item}
        <article class="project-card">
          <div class="before-after" aria-label={item.alt}>
            <img class="before" src={item.before} alt="Stav před realizací" loading="lazy" width="900" height="520" />
            <img class="after" src={item.after} alt={item.alt} loading="lazy" width="900" height="520" />
            <span class="label before-label">PŘED</span>
            <span class="label after-label">PO</span>
            <span class="slider" aria-hidden="true">↔</span>
          </div>
          <div class="project-info">
            <h3>{item.title}</h3>
            <p>{item.type}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .portfolio {
    background: linear-gradient(180deg, #fbf8f4, #fff);
  }

  .section-row {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: end;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    margin-top: 38px;
  }

  .project-card {
    background: #fff;
    border: 1px solid rgba(61, 48, 40, 0.08);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
  }

  .before-after {
    position: relative;
    height: 225px;
    overflow: hidden;
    background: #eee;
  }

  .before-after img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .after {
    clip-path: inset(0 0 0 50%);
  }

  .before-after::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: rgba(255,255,255,.85);
    box-shadow: 0 0 20px rgba(0,0,0,.2);
  }

  .label {
    position: absolute;
    bottom: 14px;
    z-index: 2;
    padding: 5px 9px;
    border-radius: 4px;
    color: #fff;
    background: rgba(20, 18, 17, 0.72);
    font-size: .73rem;
    font-weight: 900;
  }

  .before-label { left: 14px; }
  .after-label { right: 14px; }

  .slider {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #fff;
    color: var(--wood);
    box-shadow: var(--shadow-soft);
    font-weight: 900;
  }

  .project-info {
    padding: 16px 18px 18px;
  }

  .project-info h3 {
    margin: 0 0 6px;
    font-size: 1rem;
  }

  .project-info p {
    margin: 0;
    color: var(--muted);
    font-size: .92rem;
  }

  @media (max-width: 980px) {
    .project-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .section-row {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (max-width: 560px) {
    .project-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
