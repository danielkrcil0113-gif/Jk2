<script>
  import Icon from './Icon.svelte';
  import { processSteps } from '$data/content.js';
</script>

<section id="jak-pracujeme" class="section about-process">
  <div class="container layout reveal">
    <article class="about-card" id="onas">
      <p class="eyebrow">O nás</p>
      <h2>Řemeslo, které má smysl</h2>
      <p>
        Jsme JK Terasy – specializujeme se na stavby teras, fasády a dřevo v exteriéru.
        Pracujeme s exotickým dřevem i WPC a klademe důraz na kvalitu materiálů,
        precizní montáž a nadčasový design.
      </p>
      <p>
        Každý projekt řešíme individuálně – od návrhu po realizaci. Vytváříme venkovní
        prostory, které vydrží a dělají radost.
      </p>
      <a href="#kontakt" class="btn secondary small">Více o nás <span>→</span></a>
    </article>

    <figure class="about-image">
      <img src="/images/modern-house-terrace.svg" alt="Moderní dům s dřevěnou terasou" loading="lazy" width="900" height="520" />
    </figure>

    <article class="process-card">
      <p class="eyebrow">Jak spolupráce probíhá</p>
      <h2>Jednoduše a férově</h2>
      <ol class="steps">
        {#each processSteps as step, index}
          <li>
            <span class="number">{index + 1}</span>
            <Icon name={step.icon} size={34} />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        {/each}
      </ol>
    </article>
  </div>
</section>

<style>
  .about-process {
    background: #fff;
  }

  .layout {
    display: grid;
    grid-template-columns: 0.95fr 0.9fr 1.5fr;
    gap: 24px;
    align-items: stretch;
  }

  .about-card,
  .process-card {
    padding: clamp(26px, 3vw, 38px);
    border-radius: var(--radius-xl);
    background: var(--sand);
    border: 1px solid rgba(61, 48, 40, .08);
  }

  .eyebrow {
    margin: 0 0 12px;
    color: var(--wood);
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
    font-size: .75rem;
  }

  h2 {
    margin: 0 0 18px;
    font-size: clamp(1.8rem, 3vw, 2.65rem);
    letter-spacing: -0.04em;
  }

  p {
    color: var(--muted);
    line-height: 1.72;
  }

  .small {
    margin-top: 14px;
    padding: 12px 18px;
    font-size: .92rem;
  }

  .about-image {
    margin: 0;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    min-height: 340px;
  }

  .about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .process-card {
    background: linear-gradient(145deg, #fff, #f8f3ec);
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    padding: 0;
    margin: 30px 0 0;
    list-style: none;
  }

  .steps li {
    position: relative;
    padding: 26px 16px 18px;
    text-align: center;
    border: 1px solid rgba(180, 125, 76, .22);
    border-radius: var(--radius-lg);
    background: rgba(255,255,255,.76);
  }

  .number {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #fff;
    background: var(--wood);
    font-weight: 900;
  }


  .steps h3 {
    margin: 12px 0 8px;
    font-size: .98rem;
  }

  .steps p {
    margin: 0;
    font-size: .86rem;
    line-height: 1.5;
  }

  @media (max-width: 1100px) {
    .layout {
      grid-template-columns: 1fr 1fr;
    }

    .process-card {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 760px) {
    .layout,
    .steps {
      grid-template-columns: 1fr;
    }

    .about-image {
      min-height: 250px;
    }
  }
</style>
