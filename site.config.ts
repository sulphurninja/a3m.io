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
    'A3M NextGen is a leading technology company that provides cutting-edge solutions to businesses and startups. Our team of experienced developers, designers, and project managers is passionate about creating technology-driven solutions that solve complex challenges in various industries. We leverage modern and new technology to ensure our projects are impactful and revolutionary, spanning across software development, gaming, mobile apps, and more. Our commitment to quality, timeliness, and customer satisfaction has earned us a reputation as a valuable technology partner. If you're looking for a challenging and rewarding career in technology, A3M NextGen is the place to be. We believe in code that creates an impact and designs that leave a mark.',
  image: 'https://res.cloudinary.com/dxcer6hbg/image/upload/v1683292202/ccctpf5aqjdm7o9zypsn.jpg',
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
    twitter: 'https://twitter.com/a3mnextgen',
    linkedin: 'https://linkedin.com/company/a3mnextgen',
    email: 'mailto:aditya@a3m.io',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@a3mnextgen',
    site: '@a3mnextgen',
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
        url: 'https://res.cloudinary.com/dxcer6hbg/image/upload/v1683292202/ccctpf5aqjdm7o9zypsn.jpg',
        width: 1200,
        height: 630,
        alt: 'A3M NextGen is a leading technology company that provides cutting-edge solutions to businesses and startups. Our team of experienced developers, designers, and project managers is passionate about creating technology-driven solutions that solve complex challenges in various industries. We leverage modern and new technology to ensure our projects are impactful and revolutionary, spanning across software development, gaming, mobile apps, and more. Our commitment to quality, timeliness, and customer satisfaction has earned us a reputation as a valuable technology partner.',
      },
    ],
  },
};

export default siteConfig;
