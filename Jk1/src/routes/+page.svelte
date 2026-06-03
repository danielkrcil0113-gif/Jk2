<script>
  import Hero from '$components/Hero.svelte';
  import Services from '$components/Services.svelte';
  import Portfolio from '$components/Portfolio.svelte';
  import AboutProcess from '$components/AboutProcess.svelte';
  import FAQTestimonialsContact from '$components/FAQTestimonialsContact.svelte';
  import { site } from '$data/site.js';
  import { title, description, keywords, localBusinessSchema, websiteSchema, serviceSchema, faqSchema } from '$data/seo.js';

  const canonical = site.url;
  const ogImage = `${site.url}${site.ogImage}`;
  const jsonLd = JSON.stringify([localBusinessSchema, websiteSchema, serviceSchema, faqSchema]);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="cs_CZ" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content="JK Terasy - terasy, fasády a dřevo v exteriéru" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  <link rel="alternate" hreflang="cs-CZ" href={canonical} />
  <link rel="manifest" href="/manifest.webmanifest" />
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<Hero />
<Services />
<Portfolio />
<AboutProcess />
<FAQTestimonialsContact />
