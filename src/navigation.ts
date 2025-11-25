import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'ACASĂ',
      links: [
        {
          text: 'Scurt istoric',
          href: getPermalink('/acasa/scurt-istoric'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/acasa/echipa-noastra'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'GRĂDINIȚĂ',
      links: [
        {
          text: 'Metoda pedagogică',
          href: getPermalink('/gradinita/metoda-pedagogica'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/gradinita/echipa-noastra'),
        },
        {
          text: 'Noutăți',
          href: getPermalink('/gradinita/noutati'),
        },
        {
          text: 'Galerie foto',
          href: getPermalink('/gradinita/galerie-foto'),
        },
        {
          text: 'Înscrieri',
          href: getPermalink('/gradinita/inscrieri'),
        },
        {
          text: 'Informații utile (Q&A)',
          href: getPermalink('/gradinita/informatii-utile'),
        },
      ],
    },
    {
      text: 'PRIMAR',
      links: [
        {
          text: 'Metoda pedagogică',
          href: getPermalink('/scoala-primara/metoda-pedagogica'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/scoala-primara/echipa-noastra'),
        },
        {
          text: 'Noutăți',
          href: getPermalink('/scoala-primara/noutati'),
        },
        {
          text: 'Galerie foto',
          href: getPermalink('/scoala-primara/galerie-foto'),
        },
        {
          text: 'Înscrieri',
          href: getPermalink('/scoala-primara/inscrieri'),
        },
        {
          text: 'Informații utile (Q&A)',
          href: getPermalink('/scoala-primara/informatii-utile'),
        },
      ],
    },
    {
      text: 'GIMNAZIU',
      links: [
        {
          text: 'Metoda pedagogică',
          href: getPermalink('/scoala-gimnaziala/metoda-pedagogica'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/scoala-gimnaziala/echipa-noastra'),
        },
        {
          text: 'Noutăți',
          href: getPermalink('/scoala-gimnaziala/noutati'),
        },
        {
          text: 'Galerie foto',
          href: getPermalink('/scoala-gimnaziala/galerie-foto'),
        },
        {
          text: 'Înscrieri',
          href: getPermalink('/scoala-gimnaziala/inscrieri'),
        },
        {
          text: 'Informații utile (Q&A)',
          href: getPermalink('/scoala-gimnaziala/informatii-utile'),
        },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'ACASĂ',
      links: [
        { text: 'Scurt istoric', href: getPermalink('/acasa/scurt-istoric') },
        { text: 'Echipa noastră', href: getPermalink('/acasa/echipa-noastra') },
      ],
    },
    {
      title: 'GRĂDINIȚĂ',
      links: [
        { text: 'Metoda pedagogică', href: getPermalink('/gradinita/metoda-pedagogica') },
        { text: 'Echipa noastră', href: getPermalink('/gradinita/echipa-noastra') },
        { text: 'Înscrieri', href: getPermalink('/gradinita/inscrieri') },
      ],
    },
    {
      title: 'PRIMAR',
      links: [
        { text: 'Metoda pedagogică', href: getPermalink('/scoala-primara/metoda-pedagogica') },
        { text: 'Echipa noastră', href: getPermalink('/scoala-primara/echipa-noastra') },
        { text: 'Înscrieri', href: getPermalink('/scoala-primara/inscrieri') },
      ],
    },
    {
      title: 'GIMNAZIU',
      links: [
        { text: 'Metoda pedagogică', href: getPermalink('/scoala-gimnaziala/metoda-pedagogica') },
        { text: 'Echipa noastră', href: getPermalink('/scoala-gimnaziala/echipa-noastra') },
        { text: 'Înscrieri', href: getPermalink('/scoala-gimnaziala/inscrieri') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Școala Teofil. Toate drepturile rezervate.
  `,
};
