import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-azul-500 to-green-900 md:sticky top-0 z-10 text-white relative header-diffuse">
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        <div className="title-font font-medium text-white md:mb-0 flex-1 md:flex-none flex">
          <a href="#about" className="ml-3 text-xl">
            Eduardo Neila
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white sm:flex flex-wrap items-center text-base justify-center lg:flex lg:items-center lg:w-auto lg:space-x-6 hidden">
          <a href="#projects" className="hover:text-white">Proyectos</a>
          <a href="#experience" className="mr-5 hover:text-white">Experiencia</a>
          <a href="#training" className="mr-5 hover:text-white">Formación</a>
          <a href="#skills" className="mr-5 hover:text-white">Habilidades</a>
          <a href="#achievements" className="mr-5 hover:text-white">Premios</a>
          <a href="#testimonials" className="mr-5 hover:text-white">Recomendaciones</a>
        </nav>
        <div className="lg:hidden order-2 md:order-none md:flex-1 flex justify-end">
          <button onClick={toggleMenu} className="navbar-burger flex items-center text-white p-3">
            <svg className="block h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5h16M4 12h16M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <a href="#contact" className="items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 font-semibold hidden sm:inline-flex lg:inline-flex">
          Contacto
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
      <div className={`navbar-menu overflow-hidden transition-max-height duration-300 ease-out ${isOpen ? 'max-h-500' : 'max-h-0'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-1">
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Proyectos</a>
          <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Experiencia</a>
          <a href="#training" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Formación</a>
          <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Habilidades</a>
          <a href="#achievements" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Premios</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Recomendaciones</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
