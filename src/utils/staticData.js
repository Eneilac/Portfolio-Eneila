import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { IoHardwareChipSharp } from "react-icons/io5";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GrLinkedin } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiHtmlacademy } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { BiSolidArrowToTop } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";



export const projects = [
  {
    title: "La vida conectada ",
    subtitle: "TIC-TAPSD: ",
    description:
      "El proyecto consiste en el diseño, creación y explotación de una plataforma software formada por una aplicación web y una aplicación móvil, que sirva a los alumnos del módulo de Teleasistencia para realizar las prácticas necesarias para la capacitación en su titulación.",
    image: "./projects/TLA.png",
    code: 'https://github.com/Eneilac/teleasistencia-cliente-angular',
    demo: 'https://teleasistencia.iesvjp.es/inicio',
    technologies: [
      "./technologies/angular.png",
      "./technologies/typescript_logo.png",
      "./technologies/postman.png",
    ]
  },
  {
    title: "Simulacion desarrollado en Angular ",
    subtitle: "Street Fighter",
    description:
      "El proyecto trata de una simulacion del famoso juego de Street Fighter, desarrollado en Angular, para controlarlo es mediante las flechas del teclado y la barra espaciadora para aceptar.",
    image: "./projects/street.png",
    code: null,
    demo: "https://street-angular.netlify.app/",
    technologies: [
      "./technologies/angular.png",
      "./technologies/typescript_logo.png",
      "./technologies/postman.png"
    ]
  },
  {
    title: "Web desarrollada en Angular",
    subtitle: "SPIN ACADEMY",
    description: "Trabajo para la empresa Sport Innovation Academy, se trata de una single page desarrollada en angular desde 0 a partir de un diseño previo que se me entregó",
    image: "./projects/academy.png",
    code: null,
    demo: "https://academy.grupo-spin.com/#/inicio",
    technologies: [
      "./technologies/angular.png",
      "./technologies/javascript.png",
    ]
  },
  {
    title: "Simulación desarrollada en Java 8",
    subtitle: "Commandos: Behind Enemy Lines",
    description: "Simulación del juego Commandos: Behind Enemy Lines, ambientado en la segunda guerra mundial, el cual consiste en un grupo de Aliados que intentan recuperar obras de arte en posesión de los nazis. ",
    image: "./projects/commands.png",
    code: "https://github.com/Eneilac/JavaProjects/tree/Develop/proyectoComandos",
    demo: null,
    technologies: [
      "./technologies/java8_logo.png"
    ]
  },
  {
    title: "Carrito de compra desarrollado en React",
    subtitle: "ShoppingCart",
    description: "Esta aplicación simula una tienda en línea con funcionalidades de carrito de compra. Permite a los usuarios seleccionar artículos para comprar y añadirlos a un carrito virtual. El frontend está desarrollado en React, proporcionando una interfaz de usuario interactiva. El backend está implementado en Python utilizando Flask, siguiendo una arquitectura de API REST para gestionar las operaciones de consulta. Este proyecto cuenta con 2 ramas, una con redux y otra con recoil para el manejo de estados globales",
    image: "./projects/shop.png",
    code: "https://github.com/Eneilac/Formacion-PIT/tree/master/ShoppingCart",
    demo: null,
    technologies: [
      "./technologies/react-icon.png",
      "./technologies/postman.png",
      "./technologies/python.png",
      "./technologies/flask.png"
    ]
  }

];

export const experience = [
  {
    title: 'Programador Full-Stack',
    company: 'Sport Innovation Academy',
    type: 'Jornada completa - Hibrido',
    date: 'oct. 2023 - Actualidad',
    country: 'Cáceres',
    icon: './companys/SIA.jpeg',
    description: 'Desarrollo de una aplicación para gestión deportiva, en ReactJs y Python con Flask'
  },

  {
    title: 'Desarrollador en prácticas',
    company: 'VIEWNEXT',
    type: 'Jornada completa - Presencial',
    date: 'mar. 2023 - jun. 2023',
    country: 'Cáceres',
    icon: './companys/viewnext-logo.png',
    description: 'Programación en COBOL, Programación en DB2, Programación de JCL, Partición de JCL'
  },

  {
    title: 'Desarrollador Angular',
    company: 'IES Valle del jerte',
    type: 'Jornada completa - remoto',
    date: 'mar. 2023 - jul. 2023',
    country: 'Plasencia',
    icon: './companys/logoIes.png',
    description: 'Proyecto de innovación TIC-TAPSD: La vida conectada -Teleasistencia-'
  },

]


export const licenses = [
  {
    title: "REACT: Diseños responsive - Maquetado web",
    company: "Udemy",
    date: "Expedicion: feb- 2024",
    credential: 'ID de la credencial: UC-a8ff8d3b-5596-41eb-995f-1a5a5a53196d',
    link: 'http://ude.my/UC-a8ff8d3b-5596-41eb-995f-1a5a5a53196d'
  },
  {
    title: "Curso de JavaScript avanzado",
    company: "OpenWebinars",
    date: "Expedicion: abr -2023",
    credential: null,
    link: 'https://openwebinars.net/cert/DUqo'
  },
  {
    title: "Curso de JavaScript intermedio",
    company: "OpenWebinars",
    date: "Expedicion: abr -2023",
    credential: null,
    link: 'https://openwebinars.net/cert/VuJJ'
  },

  {
    title: "Curso de JavaScript para principiantes",
    company: "OpenWebinars",
    date: "Expedicion: abr -2023",
    credential: null,
    link: 'https://openwebinars.net/cert/1Nz7'
  },
  {
    title: "Curso de TypeScript",
    company: "OpenWebinars",
    date: "Expedicion: abr -2023",
    credential: null,
    link: 'https://openwebinars.net/cert/NUMa'
  },

  {
    title: "Curso de Firebase y Angular",
    company: "OpenWebinars",
    date: "Expedicion: abr -2023",
    credential: null,
    link: 'https://openwebinars.net/cert/VenQ'
  },

  {
    title: "Curso de Git",
    company: "OpenWebinars",
    date: "Expedicion: abr -2023",
    credential: null,
    link: 'https://openwebinars.net/cert/6B7b'
  },

  {
    title: "Curso de maquetación web con CSS",
    company: "OpenWebinars",
    date: "Expedicion: abr -2023",
    credential: null,
    link: 'https://openwebinars.net/cert/BprK'
  },
  {
    title: "Concepción, diseño y producción de videojuegos",
    company: "Centro Tecnológico Feval",
    date: "Expedicion: may -2021",
    credential: 'ID de la credencial: 20021/06/400016',
    link: null
  },

  {
    title: "Programación de videojuegos avanzada",
    company: "Centro Tecnológico Feval",
    date: "Expedicion: abr -2021",
    credential: 'ID de la credencial: 20021/06/400014',
    link: null
  },

  {
    title: "Fundamentos de programación de videojuegos",
    company: "Centro Tecnológico Feval",
    date: "Expedicion: abr -2021",
    credential: 'ID de la credencial: 20021/06/400014',
    link: null
  },




]

export const training = [
  {
    title: "Desarrollo de aplicaciones web",
    subtitle: "Grado Superior",
    company: "I.E.S Valle del jerte - Plasencia",
    date: "sept 2021 - jun 2023",
    grade: 8
  },

  {
    title: "Sistemas microinformáticos monopuestos y redes locales",
    subtitle: "Grado Medio",
    company: "I.E.S Valle del jerte - Plasencia",
    date: "sept 2019 - jun 2020",
    grade: 8
  }
  ,
  {
    title: "Programa de innovación y talento",
    subtitle: "Formación Full Stack en Python (Flask) y React con arquitectura API-REST, 350 horas",
    company: "Institutos Universitarios de investigacion de caceres",
    date: "oct 2023 - jun 2024",
    grade: null
  }
]


export const skills = [
  {
    name: "JavaScript",
    icon: "./technologies/javascript.png"
  },
  {
    name: "React",
    icon: "./technologies/react-icon.png"
  },
  {
    name: "Angular",
    icon: "./technologies/angular.png"

  },
  {
    name: "Java",
    icon: "./technologies/java8_logo.png"
  },
  {
    name: "Flask",
    icon: "./technologies/flask.png"
  },
  {
    name: "Python",
    icon: "./technologies/python.png"
  },
  {
    name: "Node.js",
    icon: "./technologies/node.png"
  },
  {
    name: "Redux",
    icon: "./technologies/redux.png"
  },
  {
    name: "CSS",
    icon: "./technologies/css.png"
  },
  {
    name: "Metodologías Agile",
    icon: "./technologies/agile.png"
  }
  ,
  {
    name: "Jira",
    icon: "./technologies/jira.png"
  }
];

export const achievements = [
  {
    title: "I Olimpiadas Nacionales de Telecomunicaciones",
    subtitle: "1º Premio en la fase nacional (España)",
    description: "Primer premio a la propuesta mas alineada con el ODS 11",
    image: "./achievs/nacional.jpeg",
    link: "https://www.unex.es/organizacion/servicios-universitarios/servicios/comunicacion/archivo/2023/junio-de-2023/29-de-junio-de-2023/los-institutos-al-qazeres-de-caceres-y-valle-del-jerte-de-plasencia-obtienen-premios-en-las-i-olimpiadas-nacionales-de-telecomunicaciones",
    company: "Expedida por: Universidad de Extremadura . jun 2023"

  },

  {
    title: "I Olimpiadas Nacionales de Telecomunicaciones",
    subtitle: "1º Premio en la fase regional (Extremadura)",
    description: "Primer premio a la mejor propuesta",
    image: "./achievs/regional.jpeg",
    link: "https://www.unex.es/organizacion/servicios-universitarios/servicios/comunicacion/archivo/2023/mayo-de-2023/24-de-mayo-de-2023/ganadores-de-la-fase-regional-de-las-i-olimpiadas-nacionales-de-telecomunicaciones",
    company: "Expedida por: Universidad de Extremadura . may 2023"
  },


  {
    title: "Mención Honorífica",
    subtitle: "Mención al mejor TFG de la promoción",
    description: "Mencion otorgada por el TFG relacionado con la teleasistencia",
    image: "./achievs/honorifica.jpeg",
    link: "https://github.com/Eneilac/teleasistencia-cliente-angular/tree/develop",
    company: "Expedida por: I.E.S Valle del jerte . jun 2023"
  },

  {
    title: "Mención Especial",
    subtitle: "Mención al trabajo realizado",
    description: "Otorgada por el esfuerzo y dedicación realizados en el proyecto de teleasistencia",
    image: "./achievs/especial.jpeg",
    link: "https://github.com/Eneilac/teleasistencia-cliente-angular/tree/develop",
    company: "Expedida por: I.E.S Valle del jerte . jun 2023"
  },

]



export const icons = {
  codeIcon: FaLaptopCode,
  arrowRightIcon: FaArrowRight,
  usersIcon: FaUsers,
  terminalIcon: IoTerminal,
  chipIcon: IoHardwareChipSharp,
  checkIcon: HiMiniCheckBadge,
  linkedinIcon: GrLinkedin,
  worksIcon: BsPersonWorkspace,
  academyIcon: SiHtmlacademy,
  linkIcon: FaExternalLinkAlt,
  achievIcon: GrAchievement,
  arrowBottomIcon: BiSolidArrowToBottom,
  arrowTopIcon: BiSolidArrowToTop,
  githubIcon: FaGithub,
  demoIcon: MdScreenSearchDesktop

}

export const mentions = [
  {
    name: "Jaime Martín Moreno",
    company: "Sports Innovation Academy",
    quote: "Tuve el privilegio de realizar mis FCT del grado superior bajo la supervisión de Eduardo. Su infinita paciencia, su sobresaliente capacidad de enseñanza y su vasto conocimiento me han permitido profundizar y aplicar de manera efectiva lo aprendido durante mis estudios. Trabajar junto a él ha sido todo un honor.",
    image: "./suggets/jaime.jpeg"
  },
  {
    name: "Moisés Muñoz Sánchez",
    company: "Viewnext",
    quote: "Un gran compañero de estudios, buen trabajador y sobre todo buen amigo. Siempre trabaja de manera profesional y se toma en serio sus responsabilidades.",
    image: "./suggets/moi.jpeg"
  },
  {
    name: "Fréderic Sánchez García",
    company: "Profesor Informática en Junta de Extremadura",
    quote: "Eduardo es una persona trabajadora, constante y que muestra interés por entender el código y buscar la mejor solución al problema planteado.",
    image: "./suggets/frederic.jpeg"
  }
];

