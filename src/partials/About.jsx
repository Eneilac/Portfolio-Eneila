import DownloadCv from "../components/DownloadCv";

const About = () => {


    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center select-none">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hola, soy Eduardo
                    </h1>
                    <h2 className="title-font sm:text-3xl mb-4 font-medium text-white">Desarrollador de software</h2>
                    <p className="mb-8 leading-relaxed text-justify">
                        Apasionado por crear soluciones digitales innovadoras.
                        Con experiencia en desarrollo front-end y back-end, me especializo en construir aplicaciones web robustas y eficientes. Si estás buscando un colaborador para tu próximo proyecto o simplemente quieres saber más sobre mi trabajo, ¡no dudes en contactarme!

                    </p>

                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Trabaja conmigo
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Mira mis trabajos anteriores
                        </a>
                    </div>
                    <div>
                        {
                            <DownloadCv />
                        }
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 image-gradient">
                    <img
                        className="object-cover object-center rounded-b-full select-none opacity-45"
                        alt="hero"
                        src="./me.png"
                    />
                </div>
            </div>
        </section>
    );
}

export default About
