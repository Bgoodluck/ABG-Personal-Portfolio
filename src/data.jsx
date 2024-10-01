import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import food from './assets/fooddel1-vid.mp4'

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Adebisi',
  },

  {
    id: 1,
    title: 'Middle Name : ',
    description: 'Bobby',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Goodluck',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '46 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Nigerian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Mainland,Lagos',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+2347036594624',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'bisigoodluck@outlook.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: '/in/adebisi-bobby-goodluck-79247ba',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Yoruba',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '17+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '12+',
    title: 'Happy <br /> Clients',
  },

  {
    id: 4,
    no: '3+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer <span> Anchorsoft </span>',
    desc: 'I build high-quality, scalable, and responsive websites tailored to your business needs...',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Mobile App Development <span> ABG Infotech </span>',
    desc: 'I create custom mobile applications for both iOS and Android platforms, focusing on performance, speed, and user-friendly interfaces. My apps are designed to engage users and enhance your business presence in the mobile ecosystem.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'UI/UX Designer <span> ABG Infotech </span>',
    desc: 'I am specialized in crafting visually appealing and intuitive designs that prioritize user experience. My design solutions are rooted in research, creativity, and innovation to ensure your product stands out and meets user expectations.',
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Consultant <span> Videohive </span>',
    desc: 'I offer expert consulting services to help you navigate the complexities of digital transformation. I will work closely with you to understand your business goals, develop effective strategies, and implement solutions that drive growth and success.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Full Stack Software Engineer <span> Anchorsoft Academy </span>',
    desc: 'Frontend and Backend Web Development, Mobile Applications Development Training at Anchorsoft Academy',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Frontend Basics <span> Dynamic Bootcamp </span>',
    desc: 'HTML And Css Applications for Beginners',
  },

  // {
  //   id: 7,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2009',
  //   title: 'Bachelor Degree <span> Tunis High School </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  // },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'React Native',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Php',
    percentage: '75',
  },

  {
    id: 6,
    title: 'Wordpress',
    percentage: '70',
  },

  {
    id: 7,
    title: 'Next.Js',
    percentage: '75',
  },

  {
    id: 8,
    title: 'React',
    percentage: '80',
  },

  {
    id: 9,
    title: 'Node.js',
    percentage: '80',
  },

  {
    id: 10,
    title: 'Styled Components',
    percentage: '76',
  },
  
  {
    id: 11,
    title: 'SQL & NoSQL',
    percentage: '81',
  },

  {
    id: 12,
    title: 'TypeScript',
    percentage: '50',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    vid: food,
    title: 'E-commerce Food Ordering & Delivery Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project :  ',
        desc: 'A modern food delivery platform designed to connect customers with their favorite restaurants, offering a seamless and enjoyable online ordering experience. ',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JavaScript, Vanilla Css',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'https://food-delivery-lovat-sigma.vercel.app',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'E-commerce Car Purchase Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'An innovative e-commerce platform for car dealerships and individual sellers, designed to enhance the online car-buying experience by providing a comprehensive, user-friendly interface.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JavaScript, Tailwindcss',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'https://technotronix-frontend-three.vercel.app',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'E-commerce Hotel Reservation Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A comprehensive hotel reservation platform designed to simplify the booking process for travelers while providing hoteliers with a powerful tool to manage reservations and enhance customer engagement.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JavaScript, Tailwindcss',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'https://abg-hotel-reservation.vercel.app',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'A Youtube Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A clone of the popular video-sharing platform, YouTube, designed to offer users a familiar and engaging experience for discovering, watching, and interacting with video content, providing a robust alternative to the original YouTube experience.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, TypeScript, Tailwindcss',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'https://abg-tube.vercel.app',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Music App Website',
    details: [
      {
        title: 'Project : ',
        desc: 'A music streaming application inspired by platforms like Spotify, designed to provide users with an immersive and personalized music experience. The app allows users to discover, listen to, and manage their favorite music tracks and playlists with features that enhance user engagement and streamline music consumption.',
      },
      {
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        title: 'Language : ',
        desc: 'React, JavaScript, Vanilla Css',
      },
      {
        title: 'Website : ',
        desc: 'https://abg-music-frnt.vercel.app',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Full Mobile Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'ConnectMinds is a revolutionary mobile app that brings together intellectually curious individuals seeking meaningful connections. Designed for those who value deep conversations, shared knowledge, and intellectual growth, the app fosters a community where users can meet, interact, and form lasting relationships based on mutual interests and intellectual compatibility.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Projects',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React-Native, Nativewindcss, Tailwindcss',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'Yet to be deployed in app stores',
      },
    ],
  },
  {
    id: 7,
    img: Work6,
    title: 'An Online E-Commerce Clothing Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'An online clothing store where customers can browse, select, and purchase a variety of clothing items and accessories. The website offers an extensive range of apparel, from casual wear to formal attire, catering to different styles, sizes, and preferences. Customers can explore the latest fashion trends, view detailed product descriptions, and make secure transactions, all from the comfort of their homes.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Projects',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JavaScript, Tailwindcss',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'https://abg-ecom-online-stores.vercel.app',
      },
    ],
  },
  {
    id: 8,
    img: Work6,
    title: 'Blog Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A diverse blog covering a wide range of topics such as lifestyle, technology, and more offers readers a dynamic platform to explore content that enriches various aspects of their lives. From practical lifestyle tips, wellness advice, and personal growth stories to the latest updates in tech innovations, gadgets, and software trends, the blog aims to provide something for everyone.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Projects',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next.Js, JavaScript, Tailwindcss',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'https://abg-blog-web-nextjs.vercel.app',
      },
    ],
  },
  {
    id: 9,
    img: Work6,
    title: 'Personal Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A dynamic and responsive portfolio website using React to efficiently manage components and interactivity. JavaScript used to handle any dynamic behavior, such as event handling, animations, or form submissions. Vanilla CSS  provided the styling, allowing the creation of a custom design from scratch with clean, aesthetic layouts, animations, and hover effects to enhance user experience.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Projects',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JavaScript, Tailwindcss',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'Yet to be deployed in app stores',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
