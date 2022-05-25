import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
      <div className="header-socials">
          <a href="http://www.linkedin.com/in/agustin-luna-089579182/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/AgustinLuna98" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial