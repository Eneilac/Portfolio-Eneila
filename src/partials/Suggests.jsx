import { icons, mentions } from "../utils/staticData"

const Suggests = () => {

    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <icons.usersIcon className="w-full h-16 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Recomendaciones
                </h1>
                <div className="flex flex-wrap m-4">
                    {mentions && mentions.length > 0 ? (
                        mentions.map((mention, index) => (
                            <div className="p-4 md:w-1/2 w-full" key={index}>
                                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                    <icons.linkedinIcon className="block w-10 text-gray-500 mb-4" />
                                    <p className="leading-relaxed mb-6 text-justify">{mention.quote}</p>
                                    <div className="inline-flex items-center">
                                        <img
                                            alt="testimonial"
                                            src={mention.image}
                                            className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-white">
                                                {mention.name}
                                            </span>
                                            <span className="text-gray-500 text-sm uppercase">
                                                {mention.company}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No hay testimonios disponibles en este momento.</p>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Suggests
