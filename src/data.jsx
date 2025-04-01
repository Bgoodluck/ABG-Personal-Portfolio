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

import beauty from './assets/beautySalon.png';
import beauty1 from './assets/beautySalon.mp4';
import blog from './assets/blog.png';
import blog1 from './assets/blog.mp4';
import car from './assets/car.png';
import car1 from './assets/car.mp4';
import chat from './assets/chat.png';
import chat1 from './assets/chat.mp4';
import cloth from './assets/clothing.png';
import cloth1 from './assets/clothing.mp4';
import foody from './assets/food.png';
import foody1 from './assets/food.mp4';
import hotel from './assets/hotel.png';
import hotel1 from './assets/hotel.mp4';
import port from './assets/portfolio.png';
import port1 from './assets/portfolio.mp4';
import message from './assets/messageApp.jpg';
import message1 from './assets/messageApp2.mp4';
import music from './assets/musicApp.png';
import music1 from './assets/musicApp.mp4';
import social from './assets/social.jpg';
import social1 from './assets/socialApp.mp4';
import youtube from './assets/youtube.png';
import youtube1 from './assets/youtube.mp4';
import Work6 from './assets/project-6.jpg';
import project from './assets/project-laptop.jpg'
import food from './assets/fooddel1-vid.mp4'
import hmt from './assets/hmpt.mp4'
import hmtt from './assets/hmp.jpg'

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

  // {
  //   id: 3,
  //   title: 'Age : ',
  //   description: '46 Years',
  // },

  // {
  //   id: 4,
  //   title: 'Nationality : ',
  //   description: 'Nigerian',
  // },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  // {
  //   id: 6,
  //   title: 'Address : ',
  //   description: 'Mainland,Lagos',
  // },

  // {
  //   id: 7,
  //   title: 'Phone : ',
  //   description: '+2347036594624',
  // },

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

  // {
  //   id: 10,
  //   title: 'Langages : ',
  //   description: 'English, Yoruba',
  // },
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

  // {
  //   id: 5,
  //   title: 'Php',
  //   percentage: '60',
  // },

  // {
  //   id: 6,
  //   title: 'Wordpress',
  //   percentage: '65',
  // },

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
    percentage: '66',
  },
  
  {
    id: 11,
    title: 'SQL & NoSQL',
    percentage: '73',
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
    img: foody,
    vid: foody1,
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
    img: hmtt,
    vid: hmt,
    title: 'Healthcare Management Platform with Admin Panel and Specialist Panel',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Healthcare Management Platform, designed to streamline doctor-patient interactions, manage medical histories, and facilitate online consultations seamlessly. The platform integrates real-time appointment scheduling, secure payment processing, and cloud-based medical records to enhance accessibility and efficiency in healthcare.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JavaScript, Tailwindcss, Express.js, Node.js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        desc: 'https://healthcare-green-theta.vercel.app',
      },
    ],
  },

  {
    id: 3,
    img: hotel,
    vid: hotel1,
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
    img: youtube,
    vid: youtube1,
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
    img: music,
    vid: music1,
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
    img: project,
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
    img: cloth,
    vid: cloth1,
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
    img: blog,
    vid: blog1,
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
        desc: 'https://abg-blogwithnextjs.vercel.app',
      },
    ],
  },
  {
    id: 9,
    img: port,
    vid: port1,
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
        desc: 'https://abg-personal-portfolio.vercel.app',
      },
    ],
  },
  {
    id: 10,
    img: social,
    vid: social1,
    title: 'Social Media App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A social media app using React to efficiently manage components and interactivity. JavaScript used to handle any dynamic behavior, such as event handling, animations, or form submissions. Vanilla CSS  provided the styling, allowing the creation of a custom design from scratch with clean, aesthetic layouts, animations, and hover effects to enhance user experience.',
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
        desc: 'https://abg-social-app-frontend.vercel.app',
      },
    ],
  },
  {
    id: 11,
    img: chat,
    vid: message1,
    title: 'Messaging App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'This app provides a real-time, scalable, and dynamic messaging application. React is responsible for the UI, TailwindCSS for styling, Node.js + Express for handling requests, and Socket.io for enabling real-time messaging.',
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
        desc: 'https://abg-chat-app-clientside.vercel.app',
      },
    ],
  },
  {
    id: 12,
    img: beauty,
    vid: beauty1,
    title: 'Ecommerce Beauty Lounge',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Beauty Lounge website serves as an online platform for a beauty salon or spa, offering both service bookings and a shopping experience for beauty products. It is designed to provide a seamless, user-friendly experience, enabling customers to explore services, shop for beauty products, and make payments all in one place.',
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
        desc: 'https://abg-beauty-hub-client.vercel.app',
      },
    ],
  },
  {
    id: 13,
    img: car,
    vid: car1,
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
