import React from 'react';
import './navbar.css';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiTask } from 'react-icons/bi'
import { BiMessageAltDetail } from 'react-icons/bi'

const Navbar = () => {
    const [current, setCurrent] = useState("#header");
    return (
        <nav>
            <a href="#header" className={current === "#header" ? 'current' : ''} onClick={() => setCurrent("#header")}><AiOutlineHome /></a>
            <a href="#about" className={current === "#about" ? 'current' : ''} onClick={() => setCurrent("#about")}><AiOutlineUser /></a>
            <a href="#experience" className={current === "#experience" ? 'current' : ''} onClick={() => setCurrent("#experience")}><MdOutlineWorkOutline /></a>
            <a href="projects" className={current === "#projects" ? 'current' : ''} onClick={() => setCurrent("#projects")}><VscFolderLibrary /></a>
            <a href="#technologies" className={current === "#technologies" ? 'current' : ''} onClick={() => setCurrent("#technologies")}><BiTask /></a>
            <a href="#contact" className={current === "#contact" ? 'current' : ''} onClick={() => setCurrent("#contact")}><BiMessageAltDetail /></a>
        </nav>
    )
}

export default Navbar