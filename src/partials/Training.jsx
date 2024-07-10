import { licenses, training } from '../utils/staticData'
import { icons } from '../utils/staticData'

const Training = () => {

    return (
        <section id='training'>
            <div className="container mx-auto px-10 py-20 select-none">
                <div className="text-center mb-20">
                    <icons.academyIcon className="w-full h-16 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Formación y estudios
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
                        Grados formativos
                    </p>
                </div>
                {training && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {training.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 bg-gray-700 shadow rounded-md ${training.length % 2 !== 0 && index === training.length - 1 ? 'sm:col-span-2' : ''}`}
                            >
                                <div className='flex justify-between'>
                                    <h1 className="text-white font-extrabold">{item.title}</h1>
                                    <p>{item.date}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>{item.subtitle}</p>
                                    <p>{item.company}</p>
                                </div>
                                {
                                    item.grade != null ? <p>Nota: {item.grade}</p> : null
                                }


                            </div>
                        ))}
                    </div>
                )}





                <h2 className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center mt-5 text-white">
                    Licencias complementarias
                </h2>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {licenses && licenses.length > 0 ?
                        licenses.map((license, index) => (
                            <div key={index} className="p-2 sm:w-1/2 w-full">

                                <div className=" bg-gray-800 rounded p-4 h-ful">
                                    <div className="flex items-center">
                                        <icons.checkIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                        <span className="title-font font-medium text-white flex justify-between items-center w-full">
                                            <p className="flex-grow">{license.title}</p>
                                            {
                                                license.link != null ? <span className="flex-shrink-0 cursor-pointer">
                                                    <a target='_blank' href={license.link}><icons.linkIcon /></a>
                                                </span> : null
                                            }
                                        </span>
                                    </div>
                                    <div className='mb-3 ml-10'>
                                        <p>{license.company}</p>
                                        <p>{license.date}</p>
                                    </div>
                                    <div className="ml-10">
                                        {
                                            license.credential != null ? <p>{license.credential}</p> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        )) : null}
                </div>
            </div>
        </section>

    )
}


export default Training
