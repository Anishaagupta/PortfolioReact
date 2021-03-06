import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import computer from '../assets/icons/computer.svg'
// import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import ux from '../assets/icons/ux.svg'

import Skillcard from './Skillcard';
import { motion } from 'framer-motion'
const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: backend,
        title: "Backend  Development",
        about: "handle database, server, api using and SQLlite",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using django-rest-api "
    },
    
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    
]


const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
            I describe myself as a self-motivated, Self-taught, Creative, and Ambitious Web Developer who's Persistant and quick learner. I have 1+ years working experience in Front End Web Development.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;
