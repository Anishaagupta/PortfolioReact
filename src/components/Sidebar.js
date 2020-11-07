import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import phone from '../assets/icons/phone-call.svg'
import tie from '../assets/icons/tie.svg'
import msg from '../assets/icons/message.svg'
import coder from '../assets/projects_images/IMG_20191023_092627.jpg'
import resume from '../assets/MyResume.pdf';
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:anisha8057@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }
    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"
        >
            <img src={coder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Anisha <span>Gupta</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.linkedin.com/in/anisha-gupta-66096318b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" /></a>
                <a href="https://www.facebook.com/profile.php?id=100014848606870" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/anishaaguptta/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/Anishaagupta" target="_blank" rel="noopener noreferrer" ><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Haridwar, India</div>
                <div className="sidebar__item"><img src={msg} alt="location" className="sidebar__icon mr-3" />anisha8057@gmail.com</div>
                <div className="sidebar__item"><img src={phone} alt="location" className="sidebar__icon mr-3" />+91 7505829625</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email Me</div>
        </motion.div>
    )
}

export default Sidebar;