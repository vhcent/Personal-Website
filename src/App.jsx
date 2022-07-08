import React from "react";
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Technologies from "./components/technologies/Technologies"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Technologies />
            <Footer />
        </div>
    )
}

export default App