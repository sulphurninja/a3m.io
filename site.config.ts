export const tags = [
  'blockchain',
  'nextjs',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'tailwindcss',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'Aditya Pingle',
  repo: 'https://github.com/sulphurninja',
  editUrl: '',
  website: 'https://a3m.io',
  title:
    'A3M.io - Software Solutions',
  description:
    'We excel in variety of domains from healtcare to betting software solutions, we got you covered!',
  image: 'https://adebayosegun.com/static/images/banner.png',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - A3M.io',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/sulphurninja',
    twitter: 'https://twitter.com/thesegunadebayo',
    linkedin: 'https://linkedin.com/in/thesegunadebayo',
    email: 'mailto:aditya@a3m.io',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@thesegunadebayo',
    site: '@thesegunadebayo',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://adebayosegun.com/static/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Segun Adebayo (aka Sage) - UI Engineer (Design Systems), Software Developer and Product Designer',
      },
    ],
  },
};

export default siteConfig;
