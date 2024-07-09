import Navbar from "../components/Navbar"
import Networks from "../components/Networks"
import About from "../partials/About"
import Contact from "../partials/Contact"
import Projects from "../partials/Projects"
import Skills from "../partials/Skills"
import Suggests from "../partials/Suggests"

const Layout = () => {

    return (
        <>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Suggests />
            <Contact />

            <div className="hidden sm:block lg:block">
                <Networks />
            </div>

        </>
    )
}


export default Layout
