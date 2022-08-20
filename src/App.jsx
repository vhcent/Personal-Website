import React from "react";
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <div class="main-body">
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
        </div>
    )
}

export default App