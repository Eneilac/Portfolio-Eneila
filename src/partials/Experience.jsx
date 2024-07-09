import { experience } from "../utils/staticData"
import { icons } from "../utils/staticData"


const Experience = () => {

    return (

        <div className="container mx-auto flex px-10 py-20 flex-col items-center select-none">
            <div className="flex flex-col w-full mb-16 text-center">
                <icons.worksIcon className="mx-auto inline-block w-full h-16 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Experiencia
                </h1>
            </div>

            {experience.map((exp, index) => (
                <article
                    key={index}
                    className="w-full max-w-3xl bg-gray-700 shadow p-4 space-y-2 rounded-md flex mb-4 gap-3 min-w-96"
                >
                    <div className="max-w-20 max-h-20 mt-4">
                        <img src={exp.icon} alt="icon-company" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col w-full">
                        <div>
                            <div className="flex justify-between">
                                <h2 className="text-white">{exp.title}</h2>
                                <p className="text-gray-400">{exp.date}</p>
                            </div>
                            <p className="text-gray-400">{exp.company}</p>
                        </div>
                        <p className="text-sm w-full text-gray-400">{exp.description}</p>
                    </div>
                </article>
            ))}
        </div>


    )
}


export default Experience
