
const Footer = () => {

    return (
        <footer
            className="flex flex-col items-center bg-gradient-to-r from-blue-800 via-azul-500 to-green-900 md:sticky top-0 z-10 text-white mt-20">
            <div className="container p-6">
                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="mb-1 md:mb-2">
                        <h5 className="mb-2 font-medium uppercase">! Gracias por su atención ¡</h5>

                        <p className="mb-4">
                        Este portfolio ha sido desarrollado por Eduardo Neila utilizando React y TailwindCSS.
                        </p>
                        <p>Para cualquier consulta no dude en contactarme.</p>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h5 className="mb-2 font-medium uppercase">Librerías utilizadas:</h5>


                        <p>
                            Toasts: <a target="_blank" href="https://sonner.emilkowal.ski/">Sonner</a>
                        </p>
                        <p>
                            Iconos: <a target="_blank" href="https://react-icons.github.io/react-icons/">React-icons</a>
                        </p>
                        <p>
                            Estilos: <a target="_blank" href="https://tailwindcss.com/">Tailwindcss</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-black/5 p-4 text-center">
                © 2024 Copyright: Eduardo Neila
            </div>
        </footer>
    )
}


export default Footer
