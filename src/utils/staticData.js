import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { IoHardwareChipSharp } from "react-icons/io5";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GrLinkedin } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";




export const projects = [
  {
    title: "TIC-TAPSD: ",
    subtitle: "La vida conectada",
    description:
      "El proyecto consiste en el diseño, creación y explotación de una plataforma software formada por una aplicación web y una aplicación móvil, que sirva a los alumnos del módulo de Teleasistencia para realizar las prácticas necesarias para la capacitación en su titulación.",
    image: "./projects/TLA.png",
    link: "https://teleasistencia.iesvjp.es/inicio",
  },
  {
    title: "Street Fighter: ",
    subtitle: "Simulator",
    description:
      "El proyecto trata de una simulacion del famoso juego de Street Fighter, desarrollado en Angular, para controlarlo es mediante las flechas del teclado y la barra espaciadora para aceptar.",
    image: "./projects/street.png",
    link: "https://street-angular.netlify.app/",
  },
  {
    title: "SPIN ACADEMY",
    subtitle: "Web desarrollada en Angular",
    description: "Trabajo para la empresa Sport Innovation Academy, se trata de una single page desarrollada en angular desde 0 a partir de un diseño previo que se me entregó y desplegada en IONOS",
    image: "./projects/academy.png",
    link: "https://academy.grupo-spin.com/#/inicio"
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

export const education = [
  {
    title: "Desarrollo de aplicaciones web",
    subtitle: "Grado Superior",
    company: "I.E.S Valle del jerte - Plasencia",
    date: "sept 2021 - jun 2023",
    grade: 8
  },

  {
    title: "Sistemas micrinformaticos monopuestos y redes locales",
    subtitle: "Grado Medio",
    company: "I.E.S Valle del jerte - Plasencia",
    date: "sept 2019 - jun 2020",
    grade: 8
  }
  ,
  {
    title: "Programa de innovacion y talento",
    subtitle: "Formación Full stack en Python y React mediante arquitectura api-rest de 350 horas",
    company: "Institutos Universitarios de investigacion de caceres",
    date: "oct 2023 - jun 2024",
    grade: 'X'
  }
]


export const skills = [
  "JavaScript",
  "React",
  "Angular",
  "Java",
  "Flask",
  "Python",
  "Node.js",
  "Redux",
  "CSS",
  "Metodologías Agile"
];

export const achievements = [
  {
    title: "I Olimpiadas Nacionales de Teleco",
    subtitle: "1º Premio en la fase nacional",
    description: "Primer premio a la propuesta mas alineada con el ODS 11",
    image: "./achievs/nacional.jpeg",
  },
  {
    title: "I Olimpiadas Nacionales de Teleco",
    subtitle: "1º Premio en la fase regional",
    description: "Primer premio a la mejor propuesta",
    image: "./achievs/regional.jpeg",
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
}

export const mentions = [
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

