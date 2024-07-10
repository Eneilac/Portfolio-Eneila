import { experience } from "../utils/staticData"
import { icons } from "../utils/staticData"


const Experience = () => {

    return (
        <div id="experience" className="container mx-auto px-4 py-10 flex flex-col items-center select-none">
            <div className="flex flex-col w-full mb-8 text-center">
                <icons.worksIcon className="mx-auto inline-block w-16 h-16 mb-4 sm:w-20 sm:h-20" />
                <h1 className="text-2xl sm:text-4xl font-medium title-font mb-4 text-white">
                    Experiencia
                </h1>
            </div>

            {experience.map((exp, index) => (
                <article
                    key={index}
                    className="w-full max-w-xl sm:max-w-3xl bg-gray-700 shadow p-4 space-y-2 rounded-md flex flex-col sm:flex-row mb-4 gap-3"
                >
                    <div className="w-full sm:w-20 h-20 mt-4 sm:mt-0 flex-shrink-0">
                        <img src={exp.icon} alt="icon-company" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between items-center">
                            <h2 className="text-white">{exp.title}</h2>
                            <p className="text-gray-400 text-sm sm:text-base">{exp.date}</p>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">{exp.company}</p>
                        <p className="text-sm sm:text-base w-full text-gray-400">{exp.description}</p>
                    </div>
                </article>
            ))}
        </div>

    )
}


export default Experience
