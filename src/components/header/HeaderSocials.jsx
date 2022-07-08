import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className="header-socials">
            <a href="https://www.linkedin.com/in/vincent-huang-24a048212/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/vhcent" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="mailto:vinhuang@ucdavis.edu"><AiOutlineMail /></a>
            <a href="https://www.instagram.com/vhcent/?hl=en" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
            <a href="https://www.facebook.com/vincent.huang.7503314" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
        </div>
    )
}

export default HeaderSocials