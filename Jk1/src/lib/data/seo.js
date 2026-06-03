import { site } from './site.js';
import { faqs, services, seoLandingKeywords } from './content.js';

export const title = 'JK Terasy | Terasy, fasády a dřevo v exteriéru na míru';
export const description =
  'JK Terasy realizuje dřevěné terasy, WPC terasy, fasády, truhlíky a dřevěné dekorace do exteriéru. Precizní montáž, kvalitní materiály a řešení na míru.';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}${site.ogImage}`,
  logo: `${site.url}${site.logo}`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.addressLocality,
    addressCountry: site.addressCountry
  },
  areaServed: [
    { '@type': 'City', name: 'Praha' },
    { '@type': 'AdministrativeArea', name: 'Středočeský kraj' },
    { '@type': 'Country', name: 'Česká republika' }
  ],
  sameAs: [site.instagram]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
  inLanguage: 'cs-CZ',
  publisher: { '@id': `${site.url}/#business` },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${site.url}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.longText,
      provider: { '@id': `${site.url}/#business` },
      areaServed: site.area
    }
  }))
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export const keywords = seoLandingKeywords.join(', ');
