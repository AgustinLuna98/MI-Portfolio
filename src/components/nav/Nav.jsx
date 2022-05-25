import { React, useState } from "react";
import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageAltDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";


const Nav = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav >
      <a onClick={() => setactiveNav("#")}
        className={activeNav === '#' ? 'active' : ''} href="#"><AiOutlineHome /></a>
      <a onClick={() => setactiveNav("#about")}
        className={activeNav === '#about' ? 'active' : ''} href="#about"><AiOutlineUser /></a>
      <a onClick={() => setactiveNav("#experience")}
        className={activeNav === '#experience' ? 'active' : ''} href="#experience"><BiBook /></a>
      <a onClick={() => setactiveNav("#services")}
        className={activeNav === '#services' ? 'active' : ''} href="#services"><RiServiceLine /></a>
      <a onClick={() => setactiveNav("#contact")}
        className={activeNav === '#contact' ? 'active' : ''} href="#contact"><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav