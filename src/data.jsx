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
    description: 'Lohana',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Orellano',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '36 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Argentina',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Italy',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+393701077529',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'orellanolohana@gmail.com',
  },

  {
    id: 9,
    title: 'LinkIn : ',
    description: '',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Spanish, Italian, English',
  },
];



 export const stats = [
  {
    id: 1,
    no: '2+',
    title: ' studying web <br/> development',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: 'different programming <br/> languages.',
  },

  {
    id: 4,
    no: 'Skill',
    title: 'Teamwork, Scrum',
  },
];



export const resume = [
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - ONLINE-University of Santiago del Estero- Argentina',
    title: 'Web Developer Full-Satck <span> Angular- Java </span>',
    desc: 'ANGULAR: Concepts of HTML, CSS, JavaScript, and TypeScript, Metadata definition with decorator,Template usage, Interpolation, ngIf, ngFor directives, Styling encapsulation in components, Usage of hooks for the lifecycle,  Nested components, Data passing between components, Services and dependency injection,  Basic navigation and routing, Angular modules. JAVA: Principles of object orientation. Object classes. Objects. Inheritance. Genericity and overload. Object-oriented development. The layer model. Development tools aimed at web application servers. Library management. Configuration management. Security and error management. Transactions and persistence. Access to databases. Introduction to REST web services in Java.   '
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Development of different projects using<span> React Js </span>',
    desc: 'Project development and deployment  using react-creat-app, vite. UseState, useEffect, styled component, react router dom, loader, action, Form, Context, api consumption, fetch to different routes. Using TailWindCss.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022-2023',
    title: 'Proyect Padel<span> Laravel-Mysql </span>',
    desc: 'Application development using Laravel-mySql framework. Navigation menu. photo carousel, image gallery with crud.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - ONLINE',
    title: 'Reat js Developer <span> CODERHOUSE-ARGENTINA </span>',
    desc: 'Creation of components, components life cycle, hooks, Firebase, Axios. Material UI, petitions http, API restfull, React router Dom, loader, action, Context, Styled components, Json server.'
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Full Stack Developer <span> Digitalmind-UTN-Argentina </span>',
    desc: 'Frontend: HTML5, CSS3, bootstrap, responsive desing, Programation JavaScript, Backend: Programation PHP, framework Laravel, Database MYsql, Git, GtHub',
  },


];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '50',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '50',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '50',
  },

  {
    id: 4,
    title: 'Php-Laravel',
    percentage: '30',
  },

  {
    id: 5,
    title: 'Java',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Sql',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '25',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Ecommerce Boon Padle',
    web: "https://ecommerce-padel-ifig.vercel.app",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web site Boom Padle',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Curso React js',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js , Firebase',
      },
      {
        icon: <FiExternalLink />,
        title: 'Repository : ',
        desc: 'https://github.com/LohanaO/EcommercePadel',
       
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Veterinaria',
    web:"https://lohana-o-web-vete.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Curso Udemy',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Repository : ',
        desc: 'https://github.com/LohanaO/VeteWeb',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Planificador de gastos',
    web:"https://lohana-o-planificador-gastos.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Panificador de gastos',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Curso Udemy',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js, vite',
      },
      {
        icon: <FiExternalLink />,
        title: 'Repository : ',
        desc: 'https://github.com/LohanaO/PlanifiadorGastos',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Conversor de criptomonedas',
    web:"https://lohana-o-cotizador-cripto.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Conversor de criptomonedas',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Curso Udemy',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js, vite, styled components, api cryptocompare',
      },
      {
        icon: <FiExternalLink />,
        title: 'Repository : ',
        desc: 'https://github.com/LohanaO/CotizadorCripto',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Proyect Padel',
    web:"https://github.com/LohanaO/ProyectoPadel",
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Curso FullStack',
      },
      {
        title: 'Language : ',
        desc: 'Laravel, mySql',
      },
      {
        title: 'Repository : ',
        desc: 'https://github.com/LohanaO/ProyectoPadel',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Crm-Clients',
    web:'https://github.com/LohanaO/Crm-react',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Crm-Clients',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Udemy',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js- react router dom, json server',
      },
      {
        icon: <FiExternalLink />,
        title: 'Repository : ',
        desc: 'https://github.com/LohanaO/Crm-react',
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
