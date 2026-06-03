<script>
  import Icon from './Icon.svelte';
  import { faqs, testimonials } from '$data/content.js';
  import { site } from '$data/site.js';
</script>

<section id="faq" class="section lower">
  <div class="container lower-grid reveal">
    <article class="faq-card">
      <h2>FAQ</h2>
      <div class="faq-list">
        {#each faqs as faq}
          <details>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        {/each}
      </div>
    </article>

    <article class="testimonials-card">
      <h2>Co o nás říkají zákazníci</h2>
      <div class="testimonial-list">
        {#each testimonials as testimonial}
          <blockquote>
            <span class="quote">“</span>
            <p>{testimonial.text}</p>
            <footer>
              <strong>{testimonial.name}</strong>
              <small>{testimonial.city}</small>
              <span class="stars" aria-label="5 z 5 hvězdiček">★★★★★</span>
            </footer>
          </blockquote>
        {/each}
      </div>
    </article>

    <article class="contact-card" id="kontakt">
      <p class="eyebrow">Poptat realizaci</p>
      <h2>Proč JK Terasy?</h2>
      <p class="intro">Ozveme se vám zpět do 24 hodin. Popište nám projekt a připravíme další postup.</p>

      <form action="mailto:info@jk-terasy.cz" method="post" enctype="text/plain" aria-label="Kontaktní formulář">
        <label>
          <span>Jméno a příjmení</span>
          <input name="jmeno" autocomplete="name" required />
        </label>
        <label>
          <span>Telefon</span>
          <input name="telefon" autocomplete="tel" required />
        </label>
        <label>
          <span>E-mail</span>
          <input name="email" type="email" autocomplete="email" required />
        </label>
        <label>
          <span>Typ realizace</span>
          <select name="typ-realizace" required>
            <option value="">Vyberte</option>
            <option>Terasa</option>
            <option>WPC terasa</option>
            <option>Fasáda</option>
            <option>Truhlíky / dekorace</option>
          </select>
        </label>
        <label class="wide">
          <span>Popište prosím váš projekt</span>
          <textarea name="zprava" rows="5" required></textarea>
        </label>
        <button class="btn primary wide" type="submit">Odeslat poptávku <span>→</span></button>
      </form>

      <div class="contact-links">
        <a href={`tel:${site.phone.replaceAll(' ', '')}`}><Icon name="phone" size={18} /> {site.phoneDisplay}</a>
        <a href={`mailto:${site.email}`}><Icon name="mail" size={18} /> {site.email}</a>
        <span><Icon name="pin" size={18} /> {site.area}</span>
      </div>
    </article>
  </div>
</section>

<style>
  .lower {
    background: linear-gradient(180deg, #fff 0%, #faf6ef 100%);
  }

  .lower-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr 1.35fr;
    gap: 24px;
    align-items: start;
  }

  .faq-card,
  .testimonials-card,
  .contact-card {
    border-radius: var(--radius-xl);
    background: #fff;
    border: 1px solid rgba(61,48,40,.08);
    box-shadow: var(--shadow-soft);
    padding: clamp(24px, 3vw, 34px);
  }

  h2 {
    margin: 0 0 24px;
    font-size: clamp(1.6rem, 2.4vw, 2.25rem);
    letter-spacing: -0.04em;
  }

  .faq-list {
    display: grid;
    gap: 10px;
  }

  details {
    border: 1px solid rgba(61,48,40,.08);
    border-radius: 10px;
    background: var(--cream);
    overflow: hidden;
  }

  summary {
    cursor: pointer;
    padding: 15px 16px;
    font-weight: 800;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: '+';
    float: right;
    color: var(--wood);
  }

  details[open] summary::after {
    content: '–';
  }

  details p {
    margin: 0;
    padding: 0 16px 16px;
    color: var(--muted);
    line-height: 1.6;
    font-size: .94rem;
  }

  .testimonial-list {
    display: grid;
    gap: 16px;
  }

  blockquote {
    position: relative;
    margin: 0;
    padding: 24px;
    border-radius: var(--radius-lg);
    background: var(--sand);
    overflow: hidden;
  }

  .quote {
    position: absolute;
    top: -18px;
    left: 16px;
    color: rgba(180,125,76,.24);
    font-family: Georgia, serif;
    font-size: 6rem;
    line-height: 1;
  }

  blockquote p {
    position: relative;
    margin: 0 0 18px;
    color: var(--muted);
    line-height: 1.68;
  }

  blockquote footer {
    display: grid;
    gap: 2px;
  }

  blockquote small {
    color: var(--muted);
  }

  .stars {
    color: #d5a35b;
    letter-spacing: 0.12em;
    margin-top: 8px;
  }

  .contact-card {
    background: linear-gradient(150deg, #fff, #f4ede3);
  }

  .eyebrow {
    margin: 0 0 10px;
    color: var(--wood);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: .75rem;
  }

  .intro {
    margin-top: -10px;
    color: var(--muted);
    line-height: 1.65;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-top: 22px;
  }

  label {
    display: grid;
    gap: 7px;
  }

  label span {
    font-size: .82rem;
    color: var(--muted);
    font-weight: 700;
  }

  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid rgba(61,48,40,.14);
    border-radius: 8px;
    padding: 13px 14px;
    font: inherit;
    color: var(--ink);
    background: rgba(255,255,255,.88);
    outline: none;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: var(--wood);
    box-shadow: 0 0 0 4px rgba(180,125,76,.13);
  }

  .wide {
    grid-column: 1 / -1;
  }

  .contact-links {
    display: grid;
    gap: 10px;
    margin-top: 22px;
  }

  .contact-links a,
  .contact-links span {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: var(--muted);
    text-decoration: none;
    font-weight: 800;
  }


  @media (max-width: 1100px) {
    .lower-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 620px) {
    form {
      grid-template-columns: 1fr;
    }
  }
</style>
