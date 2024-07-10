import { achievements, icons } from '../utils/staticData'



const Achievements = () => {

    return (
        <section id="achievements">
            <div className="container mx-auto px-10 py-20 select-none">
                <div className="text-center mb-10">
                    <icons.achievIcon className="w-full h-12 inline-block mb-4" />
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-white mb-4">
                        Reconocimientos y premios
                    </h1>
                </div>
                <div className="flex flex-wrap m-4 justify-center gap-4">
                    {achievements && achievements.length > 0 ? (
                        achievements.map((achiev, index) => (
                            <div key={index} className="w-full md:w-80 p-4 bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out relative">
                                <img className="w-full h-36 object-cover rounded-t-lg" alt="achievement image" src={achiev.image} />
                                <div className="p-4 flex flex-col justify-between h-full">
                                    <div>
                                        <h2 className="text-lg font-semibold mb-2 text-center">{achiev.title}</h2>
                                        <h3 className="text-base font-medium text-gray-400 mb-2 text-center">{achiev.subtitle}</h3>
                                        <p className="text-sm text-gray-300 mb-4 text-justify">{achiev.description}</p>
                                        <p className='mb-4 mt-2 text-sm'>{achiev.company}</p>
                                    </div>
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                        {
                                            achiev.link != null ? (
                                                <a target='_blank' href={achiev.link} className="text-blue-500 hover:text-blue-700">
                                                    <icons.linkIcon className="inline-block w-6 h-6" />
                                                </a>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No hay logros disponibles en este momento.</p>
                    )}
                </div>
            </div>
        </section>




    )
}

export default Achievements
