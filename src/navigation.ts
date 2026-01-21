import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'DESPRE NOI',
      href: getPermalink('/'),
      links: [
        {
          text: 'Scurt istoric',
          href: getPermalink('/despre-noi/scurt-istoric'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/despre-noi/echipa-noastra'),
        },
        {
          text: 'Rezultate',
          href: getPermalink('/despre-noi/rezultate'),
        },
        // TODO: Uncomment when content is available
        // {
        //   text: 'Noutăți',
        //   href: getPermalink('/despre-noi/noutati'),
        // },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'GRĂDINIȚĂ',
      href: getPermalink('/gradinita/'),
      links: [
        {
          text: 'Metoda pedagogică',
          href: getPermalink('/gradinita/metoda-pedagogica'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/gradinita/echipa-noastra'),
        },
        // TODO: Uncomment when content is available
        // {
        //   text: 'Rezultate',
        //   href: getPermalink('/gradinita/rezultate'),
        // },
        // {
        //   text: 'Noutăți',
        //   href: getPermalink('/gradinita/noutati'),
        // },
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
      href: getPermalink('/scoala-primara/'),
      links: [
        {
          text: 'Metoda pedagogică',
          href: getPermalink('/scoala-primara/metoda-pedagogica'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/scoala-primara/echipa-noastra'),
        },
        // TODO: Uncomment when content is available
        // {
        //   text: 'Rezultate',
        //   href: getPermalink('/scoala-primara/rezultate'),
        // },
        // {
        //   text: 'Noutăți',
        //   href: getPermalink('/scoala-primara/noutati'),
        // },
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
      href: getPermalink('/scoala-gimnaziala/'),
      links: [
        {
          text: 'Metoda pedagogică',
          href: getPermalink('/scoala-gimnaziala/metoda-pedagogica'),
        },
        {
          text: 'Echipa noastră',
          href: getPermalink('/scoala-gimnaziala/echipa-noastra'),
        },
        // TODO: Uncomment when content is available
        // {
        //   text: 'Rezultate',
        //   href: getPermalink('/scoala-gimnaziala/rezultate'),
        // },
        // {
        //   text: 'Noutăți',
        //   href: getPermalink('/scoala-gimnaziala/noutati'),
        // },
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
    {
      text: 'ACTIVITĂȚI ȘI MEDIA',
      href: getPermalink('/activitati/'),
      links: [
        {
          text: 'Revista școlii',
          href: getPermalink('/activitati/revista-scolii'),
        },
        // TODO: Uncomment when content is available
        // {
        //   text: 'Emisiuni',
        //   href: getPermalink('/activitati/emisiuni'),
        // },
        {
          text: 'Clubul de cercetași',
          href: getPermalink('/activitati/clubul-de-cercetasi'),
        },
        // TODO: Uncomment when content is available
        // {
        //   text: 'Tutoriale',
        //   href: getPermalink('/activitati/tutoriale'),
        // },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'DESPRE NOI',
      links: [
        { text: 'Scurt istoric', href: getPermalink('/despre-noi/scurt-istoric') },
        { text: 'Echipa noastră', href: getPermalink('/despre-noi/echipa-noastra') },
        // TODO: Uncomment when content is available
        // { text: 'Rezultate', href: getPermalink('/despre-noi/rezultate') },
        // { text: 'Noutăți', href: getPermalink('/despre-noi/noutati') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'GRĂDINIȚĂ',
      links: [
        { text: 'Metoda pedagogică', href: getPermalink('/gradinita/metoda-pedagogica') },
        { text: 'Echipa noastră', href: getPermalink('/gradinita/echipa-noastra') },
        // TODO: Uncomment when content is available
        // { text: 'Rezultate', href: getPermalink('/gradinita/rezultate') },
        // { text: 'Noutăți', href: getPermalink('/gradinita/noutati') },
        { text: 'Galerie foto', href: getPermalink('/gradinita/galerie-foto') },
        { text: 'Înscrieri', href: getPermalink('/gradinita/inscrieri') },
        { text: 'Informații utile (Q&A)', href: getPermalink('/gradinita/informatii-utile') },
      ],
    },
    {
      title: 'PRIMAR',
      links: [
        { text: 'Metoda pedagogică', href: getPermalink('/scoala-primara/metoda-pedagogica') },
        { text: 'Echipa noastră', href: getPermalink('/scoala-primara/echipa-noastra') },
        // TODO: Uncomment when content is available
        // { text: 'Rezultate', href: getPermalink('/scoala-primara/rezultate') },
        // { text: 'Noutăți', href: getPermalink('/scoala-primara/noutati') },
        { text: 'Galerie foto', href: getPermalink('/scoala-primara/galerie-foto') },
        { text: 'Înscrieri', href: getPermalink('/scoala-primara/inscrieri') },
        { text: 'Informații utile (Q&A)', href: getPermalink('/scoala-primara/informatii-utile') },
      ],
    },
    {
      title: 'GIMNAZIU',
      links: [
        { text: 'Metoda pedagogică', href: getPermalink('/scoala-gimnaziala/metoda-pedagogica') },
        { text: 'Echipa noastră', href: getPermalink('/scoala-gimnaziala/echipa-noastra') },
        // TODO: Uncomment when content is available
        // { text: 'Rezultate', href: getPermalink('/scoala-gimnaziala/rezultate') },
        // { text: 'Noutăți', href: getPermalink('/scoala-gimnaziala/noutati') },
        { text: 'Galerie foto', href: getPermalink('/scoala-gimnaziala/galerie-foto') },
        { text: 'Înscrieri', href: getPermalink('/scoala-gimnaziala/inscrieri') },
        { text: 'Informații utile (Q&A)', href: getPermalink('/scoala-gimnaziala/informatii-utile') },
      ],
    },
    {
      title: 'ACTIVITĂȚI ȘI MEDIA',
      links: [
        { text: 'Revista școlii', href: getPermalink('/activitati/revista-scolii') },
        // TODO: Uncomment when content is available
        // { text: 'Emisiuni', href: getPermalink('/activitati/emisiuni') },
        { text: 'Clubul de cercetași', href: getPermalink('/activitati/clubul-de-cercetasi') },
        // { text: 'Tutoriale', href: getPermalink('/activitati/tutoriale') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/scoalateofil' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/scoalateofil' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Școala Teofil. Toate drepturile rezervate.
  `,
};
