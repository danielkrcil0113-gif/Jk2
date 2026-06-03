<script>
  import Icon from './Icon.svelte';
  import { nav, site } from '$data/site.js';
</script>

<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <img src={site.logo} alt="JK Terasy logo" width="64" height="64" />
      <div>
        <strong>JK TERASY</strong>
        <p>Terasy, fasády a dřevo v exteriéru – spolehlivě a na míru. Kvalitní materiály, precizní montáž a individuální přístup.</p>
      </div>
    </div>

    <div>
      <h2>Rychlé odkazy</h2>
      <ul>
        {#each nav.slice(0, 4) as item}
          <li><a href={item.href}>{item.label}</a></li>
        {/each}
      </ul>
    </div>

    <div>
      <h2>Sledujte nás</h2>
      <div class="socials">
        <a href={site.instagram} aria-label="Instagram JK Terasy" rel="noopener"><img src="/icons/instagram.svg" alt="" width="36" height="36" /></a>
        <a href={site.facebook} aria-label="Facebook JK Terasy"><img src="/icons/facebook.svg" alt="" width="36" height="36" /></a>
        <a href={site.youtube} aria-label="YouTube JK Terasy"><img src="/icons/youtube.svg" alt="" width="36" height="36" /></a>
      </div>
    </div>

    <address>
      <h2>Kontakt</h2>
      <a href={`tel:${site.phone.replaceAll(' ', '')}`}><Icon name="phone" size={18} /> {site.phoneDisplay}</a>
      <a href={`mailto:${site.email}`}><Icon name="mail" size={18} /> {site.email}</a>
      <span><Icon name="pin" size={18} /> {site.area}</span>
    </address>
  </div>

  <div class="container footer-bottom">
    <span>© 2024 {site.legalName}. Všechna práva vyhrazena.</span>
    <span>Zásady ochrany osobních údajů · Obchodní podmínky</span>
  </div>
</footer>

<style>
  .footer {
    padding: 54px 0 26px;
    background: #fff;
    border-top: 1px solid rgba(61,48,40,.08);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.6fr .8fr .8fr 1fr;
    gap: 34px;
  }

  .footer-brand {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .footer-brand img {
    border-radius: 50%;
  }

  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 1.05rem;
    letter-spacing: .08em;
  }

  p, li, a, address span {
    color: var(--muted);
    line-height: 1.65;
  }

  h2 {
    margin: 0 0 14px;
    font-size: .82rem;
    color: var(--wood);
    text-transform: uppercase;
    letter-spacing: .12em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 7px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: var(--wood);
  }

  address {
    font-style: normal;
    display: grid;
    align-content: start;
    gap: 10px;
  }

  address a,
  address span {
    display: inline-flex;
    align-items: center;
    gap: 9px;
  }

  .socials {
    display: flex;
    gap: 10px;
  }

  .socials img {
    border-radius: 50%;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 42px;
    padding-top: 22px;
    border-top: 1px solid rgba(61,48,40,.08);
    color: var(--muted);
    font-size: .86rem;
  }

  @media (max-width: 920px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 620px) {
    .footer-grid,
    .footer-bottom {
      grid-template-columns: 1fr;
      flex-direction: column;
    }
  }
</style>
