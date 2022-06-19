import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/vincent-huang-24a048212/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/vhcent" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials