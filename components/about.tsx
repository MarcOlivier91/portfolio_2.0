'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion , useScroll} from "framer-motion"


function About() {
  return (
    <motion.section 
        className="mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center"
        initial={{ y: 100,  opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.9, delay: 0.50 }}
        >
        <SectionHeading>A propos de moi..</SectionHeading>
        <p className='text-lg'>
            C'est en fillière <span className="font-medium">STI2D</span> en terminale que ma passion pour le <span className="underline">développment informatique</span> est née. 
            Avec les bases en <span className="font-medium">HTML et CSS</span>, j'ai pu commencer à développer de petits sites webs reflétant ma passion pour les voitutes, les jeux et les animes. 
            Après le BAC, j'ai donc décidé de poursuivre dans cette voie fantastique. 
            J'utilise principalement <span className="font-semibold">React, Next.js, Node.js, et MongoDB</span> pour me spécialiser dans le <span className="font-medium">développement front-end</span> 
            mais je souhaiterais également devenir familier avec le <span className="underline">développement mobile</span> et bien d'autres langages.
        </p>
        <p className="text-lg">
            Lorsque je ne code pas, je joue aux jeux-vidéos, regarde des animes, lis des mangas et je m'entraine également à dessiner des illustrations.
            Je suis également les dernières <span className="font-medium">actualités automobiles et financières.</span>
        </p>
    </motion.section>
  )
}

export default About