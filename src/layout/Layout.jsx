import Navbar from "../components/Navbar"
import Networks from "../components/Networks"
import About from "../partials/About"
import Contact from "../partials/Contact"
import Experience from "../partials/Experience"
import Projects from "../partials/Projects"
import Skills from "../partials/Skills"
import Suggests from "../partials/Suggests"

const Layout = () => {

    return (
        <div className="flex flex-col gap-15">
            <Navbar />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Suggests />
            <Contact />

            <div className="hidden sm:block lg:block">
                <Networks />
            </div>

        </div>
    )
}


export default Layout
