import React from "react";
import Header from "./components/header/Header"
import About from "./components/about/About"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {
    return(
        <div>
            <Header/>
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    )
}

export default App