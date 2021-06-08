import {
  FaHome,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
  FaDrawPolygon,
  FaPencilRuler,
  FaPaperclip,
} from 'react-icons/fa';

export const menuItems = [
  {
    text: 'Home',
    textDesktop: 'Home',
    textMobile: 'Home',
    icon: <FaHome />,
    link: '/',
  },
  {
    text: 'Projects',
    textDesktop: 'Projects',
    textMobile: 'Projects',
    icon: <FaDrawPolygon />,
    link: '/projects',
  },
  {
    text: 'About Me',
    textDesktop: 'About Me',
    textMobile: 'About Me',
    icon: <FaPencilRuler />,
    link: '/#about',
  },
  {
    type: 'dropdown',
    text: 'Contact',
    items: [
      {
        text: 'Resume',
        textDesktop: 'Resume',
        textMobile: 'Resume',
        icon: <FaPaperclip />,
        link: 'https://www.notion.so/Bernardo-Munz-19ae892703ee404a958f0c3aaca8db5e',
        linkAttributes: {
          target: '_blank',
        },
      },
      {
        text: 'Email',
        textDesktop: <FaEnvelope />,
        icon: <FaEnvelope />,
        textMobile: 'Email',
        link: 'mailto:munzbe@gmail.com',
        linkAttributes: {
          target: '_self',
        },
      },
      {
        text: 'Github',
        textDesktop: <FaGithub />,
        icon: <FaGithub />,
        textMobile: 'Github',
        link: 'https://github.com/moonbe77',
        target: '_blank',
        linkAttributes: {
          target: '_blank',
          rel: 'noreferrer  noopener',
          title: 'munzbe@gmail.com',
          alt: ' email: munzbe@gmail.com',
        },
      },
      {
        text: 'Linkedin',
        textDesktop: <FaLinkedinIn />,
        icon: <FaLinkedinIn />,
        textMobile: 'LinkedIn',
        link: 'https://www.linkedin.com/in/munzbe/',
        linkAttributes: {
          target: '_blank',
        },
      },
      {
        text: 'Twitter',
        textDesktop: <FaTwitter />,
        icon: <FaTwitter />,
        textMobile: 'Twitter',
        link: 'https://twitter.com/moonbe77',
        linkAttributes: {
          target: '_blank',
        },
      },
    ],
  },
];
