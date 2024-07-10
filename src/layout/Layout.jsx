import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Networks from "../components/Networks";
import About from "../partials/About";
import Achievements from "../partials/Achievements";
import Contact from "../partials/Contact";
import Experience from "../partials/Experience";
import Projects from "../partials/Projects";
import Skills from "../partials/Skills";
import Suggests from "../partials/Suggests";
import Training from "../partials/Training";

const Layout = () => {

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (
        <div className="flex flex-col gap-15 relative">
            <Navbar />
            <About />
            <Projects />
            <Experience />
            <Training />
            <Skills />
            <Achievements />
            <Suggests />
            <Contact />

            <div className="hidden sm:block lg:block">
                <Networks />
            </div>

            {showArrow && (
                <button onClick={scrollToTop} className="fixed left-6 bottom-6 bg-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-lg text-base font-semibold">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                </button>
            )}
        </div>
    );
}

export default Layout;
