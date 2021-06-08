import {
  FaDrawPolygon,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaPaperclip,
  FaPencilRuler,
  FaTwitter,
} from 'react-icons/fa';
import { nanoid } from 'nanoid';

export const menuItems = [
  {
    id: nanoid(5),
    icon: <FaHome />,
    link: '/',
    text: 'Home',
    textDesktop: 'Home',
    textMobile: 'Home',
    type: 'link',
  },
  {
    id: nanoid(5),
    icon: <FaDrawPolygon />,
    link: '/projects',
    text: 'Projects',
    textDesktop: 'Projects',
    textMobile: 'Projects',
    type: 'link',
  },
  {
    id: nanoid(5),
    icon: <FaPencilRuler />,
    link: '/#about',
    text: 'About Me',
    textDesktop: 'About Me',
    textMobile: 'About Me',
    type: 'link',
  },
  {
    id: nanoid(5),
    type: 'dropdown',
    text: 'Get in Touch!',
    dropdownItems: [
      {
        id: nanoid(5),
        icon: <FaPaperclip />,
        link: 'https://www.notion.so/Bernardo-Munz-19ae892703ee404a958f0c3aaca8db5e',
        text: 'Resume',
        textDesktop: <FaPaperclip />,
        textMobile: 'Resume',
        type: 'link',
        linkAttributes: {
          target: '_blank',
          title: 'Resume in Notion',
        },
      },
      {
        id: nanoid(5),
        icon: <FaEnvelope />,
        link: 'mailto:munzbe@gmail.com',
        text: 'Email',
        textDesktop: <FaEnvelope />,
        textMobile: 'Email',
        type: 'link',
        linkAttributes: {
          target: '_blank',
          title: 'munzbe@gmail.com',
        },
      },
      {
        id: nanoid(5),
        icon: <FaGithub />,
        link: 'https://github.com/moonbe77',
        target: '_blank',
        text: 'Github',
        textDesktop: <FaGithub />,
        textMobile: 'Github',
        type: 'link',
        linkAttributes: {
          alt: ' email: munzbe@gmail.com',
          rel: 'noreferrer  noopener',
          target: '_blank',
          title: '@moonbe77',
        },
      },
      {
        id: nanoid(5),
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/in/munzbe/',
        text: 'Linkedin',
        textDesktop: <FaLinkedinIn />,
        textMobile: 'LinkedIn',
        type: 'link',
        linkAttributes: {
          target: '_blank',
          title: 'ln/munzbe',
        },
      },
      {
        id: nanoid(5),
        icon: <FaTwitter />,
        link: 'https://twitter.com/moonbe77',
        text: 'Twitter',
        textDesktop: <FaTwitter />,
        textMobile: 'Twitter',
        type: 'link',
        linkAttributes: {
          target: '_blank',
          title: '@moonbe77',
        },
      },
    ],
  },
];
