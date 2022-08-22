import { FaReact, FaWordpressSimple } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';

const dataProjects = [
  {
    id: '015',
    icon: <SiNextdotjs />,
    name: 'Landing Page & Blog',
    image: '/images/projects/portfolio13.jpg',
    text: 'Full Stack MYSQL - Express - React - Nodejs, NextAuth hyGrapg and GraphQL',
    date: '2022',
    category: {
      tag: 'Next JS',
      color: '#0000ff',
    },
    src: 'https://github.com/YoussefSabbagh/nlp-consulting.git',
    link: {
      url: 'https://nextlevel.partners/',
      text: 'Demo - Live',
    },
  },
  {
    id: '014',
    icon: <SiNextdotjs />,
    name: "Maria's Desserts",
    image: '/images/projects/portfolio9.jpg',
    text: 'Landing Page React - Nodejs, NextAuth ',
    date: '2022',
    category: {
      tag: 'Next JS',
      color: '#0000ff',
    },
    src: 'https://github.com/YoussefSabbagh/nlp-consulting.git',
    link: {
      url: 'https://maria-desserts.vercel.app/',
      text: 'Demo - Live',
    },
  },
  {
    id: '13',
    icon: <FaReact />,
    name: 'Portal You You Toys',
    image: '/images/projects/portfolio11.jpg',
    text: 'Full Stack MYSQL - Express - React - Nodejs, las imagenes en cloudinary, autenticacion y manejo de roles. en desarrollo, usuario: pedro@correo.com password: 111',
    date: '2021',
    category: {
      tag: 'React JS',
      color: '#0000ff',
    },
    link: {
      url: 'https://youyoutoys-frontend.vercel.app',
      text: 'Demo - Live',
    },
  },
  {
    id: '08',
    icon: <FaReact />,
    name: 'Taguara Digital Portfolio',
    image: '/images/projects/portfolio8.jpg',
    text: 'Portfolio de la agencia Taguara Digita desarrollado con React, Styled-component, Router, react scroll',
    date: '2021',
    category: {
      tag: 'React.js',
      color: '#0000ff',
    },
    link: {
      url: 'https://tg-portfolio-react.herokuapp.com/',
      text: 'Lo esta viendo',
    },
  },
  // {
  //   id: '07',
  //   icon: <SiJavascript />,
  //   name: 'Taguara Digital Portfolio',
  //   image: '/images/projects/portfolio7.jpg',
  //   text: 'Portfolio de la agencia Taguara Digita (no real) desarrollado con HTML, SCSS, JS y Gulp',
  //   date: '2020',
  //   category: {
  //     tag: 'HTML - CSS - JS',
  //     color: '#0ff000',
  //   },
  //   link: {
  //     url: 'https://taguaradigital.github.io/',
  //     text: 'Demo - Live',
  //   },
  // },
  // {
  //   id: '06',
  //   icon: <SiJavascript />,
  //   name: 'Taguara Digital Cinema',
  //   image: '/images/projects/portfolio6.jpg',
  //   text: 'Sitio para buscar peliculas (fetch) usando la Api OMDB, se simula del login y registro de usuarios',
  //   date: '2020',
  //   category: {
  //     tag: 'HTML - CSS - JS',
  //     color: '#0ff000',
  //   },
  //   link: {
  //     url: 'https://tg-cine.netlify.app',
  //     text: 'Demo - Live',
  //   },
  // },
  // {
  //   id: '05',
  //   icon: <SiJavascript />,
  //   name: 'Ejercicios Varios',
  //   image: '/images/projects/portfolio5.jpg',
  //   text: 'Reloj (css y jS), Simon Says (juego con JS), Rock Paper Scissors Lizard Spock (JS)',
  //   date: '2020',
  //   category: {
  //     tag: 'HTML - CSS - JS',
  //     color: '#0ff000',
  //   },
  //   link: {
  //     url: 'https://taguaradigital.github.io/clock/',
  //     text: 'Demo - Live',
  //   },
  // },
  {
    id: '04',
    icon: <FaWordpressSimple />,
    name: 'dBB Kositas',
    image: '/images/projects/portfolio2.jpg',
    text: 'Tienda online (no real) desarrollado con el tema Astra, Elementor, Woocommerce',
    date: '2020',
    category: {
      tag: 'WordPress',
      color: '#ff00ff',
    },
    link: {
      url: 'http://dbbkositas.epizy.com',
      text: 'Demo - Live',
    },
  },
  // {
  //   id: '03',
  //   icon: <FaWordpressSimple />,
  //   name: "Maria's Desserts",
  //   image: '/images/projects/portfolio3.jpg',
  //   text: 'Los postres de Maria, es un sitio web (no real) desarrollado con el tema Astra y Elementor',
  //   date: '2020',
  //   category: {
  //     tag: 'WordPress',
  //     color: '#ff00ff',
  //   },
  //   src: '',
  //   link: {
  //     url: 'http://mariasdesserts.epizy.com/',
  //     text: 'Demo - Live',
  //   },
  // },
  // {
  //   id: '02',
  //   icon: <FaWordpressSimple />,
  //   name: 'Taguara Digital Portfolio',
  //   image: '/images/projects/portfolio4.jpg',
  //   text: 'Portfolio de la agencia Taguara Digita (no real) desarrollado con el tema Astra y Elementor',
  //   date: '2020',
  //   category: {
  //     tag: 'WordPress',
  //     color: '#ff00ff',
  //   },
  //   src: '',
  //   link: {
  //     url: 'http://taguaradigital.epizy.com/',
  //     text: 'Demo - Live',
  //   },
  // },
  {
    id: '01',
    icon: <FaWordpressSimple />,
    name: 'Blog Sala de Lectura',
    image: '/images/projects/portfolio1.jpg',
    text: 'Blog de los amigos de la Sala de Lectura de la escuela de Computacion UCV (no real) desarrollado con el tema Astra y Elementor',
    date: '2020',
    category: {
      tag: 'WordPress',
      color: '#ff00ff',
    },
    src: '',
    link: {
      url: 'http://salalectura.epizy.com/',
      text: 'Demo - Live',
    },
  },
];

export default dataProjects;
