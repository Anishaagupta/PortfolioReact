import React from 'react';
import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import ux from '../../assets/icons/ux.svg'
import computer from '../../assets/icons/computer.svg'
// import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: ["I can build a beautiful and scalable SPA using ",<strong key={1}>HTML, CSS, Javascript</strong>," & ", <strong key={2}>HTML, CSS, React.js</strong>],
    },
    {
        icon: backend,
        title: "Backend  Development",
        about: ["I can Handle Database, create Server using ", <strong key={3}>Node.js</strong>," and ", <strong key={4}>Express.js</strong>],
    },
    {
        icon: api,
        title: "JavaScript Framework",
        about: ["I can develop ",<strong key={5}>Single Page Applications </strong>," using ", <strong key={6}>React.js</strong>," and ", <strong key={7}>Redux</strong>],
    },
    
    {
        icon: ux,
        title: "UI/UX designer",
        about: ["I can create Minimalistic, Simple, Clean & Clear User Interface Designs using ",<strong key={8}>Figma</strong>],
    },
    {
        icon: puzzle,
        title: "CSS Framework/Libraries",
        about: ["I can create a website based on ",<strong key={9}>BootStrap, Materialize, Material-UI</strong>,"."]
    },
    {
        icon: computer,
        title: "MERN Stack",
        about: ["I am walking on a path to be a",<strong key={10}>MERN Stack Developer</strong> ," ."]
    },
]

export default skills;