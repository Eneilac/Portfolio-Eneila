import { icons, skills } from "../utils/staticData"

const Skills = () => {

    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <icons.chipIcon className="w-full h-16 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Habilidades y Tecnologías
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Tecnologías y lenguajes en los que estoy más especializado
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills && skills.length > 0 ?
                    skills.map((skill, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <icons.checkIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    )):<div>No hay skills</div>}
                </div>
            </div>
        </section>
    );

}


export default Skills
