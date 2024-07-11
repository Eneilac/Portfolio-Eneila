import { useState } from "react";
import { toast } from 'sonner';
import Networks from "../components/Networks";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <Networks />
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d647.4271166064246!2d-6.376673645897433!3d39.476111619747776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splaza%20italia!5e0!3m2!1ses!2ses!4v1720545386083!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                DIRECCIÓN
                            </h2>
                            <p className="mt-1">
                                Marques de Oquendo <br />
                                Cáceres, 10004
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                CORREO ELECTRÓNICO
                            </h2>
                            <a
                                href="mailto:eduarneila@gmail.com"
                                className="text-indigo-400 leading-relaxed"
                            >
                                eduarneila@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                NÚMERO DE TELÉFONO
                            </h2>
                            <p className="leading-relaxed">605 310 957</p>
                        </div>
                    </div>
                </div>
                <form name="contact" method="POST" className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" >
                 
                    <input type="hidden" name="form-name" value="contact" />
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        ¡Contáctame!
                    </h2>
                    <p className="leading-relaxed mb-5 text-justify tracking-normal">
                        ¿Listo para comenzar tu próximo proyecto o tienes alguna pregunta? Estoy aquí para ayudarte.
                        No dudes en enviarme un mensaje y te responderé lo antes posible.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
