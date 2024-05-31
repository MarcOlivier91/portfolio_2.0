'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { skills } from '@/lib/data'

// TODO: Fixed delayed items arrival

const fadeInAnimationVariants = {
  initital: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}


function About() {
  return (
    <motion.section
        id="about"
        className="mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center scroll-mt-28"
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
            {" "} mais je souhaiterais également devenir familier avec le <span className="underline">développement mobile</span> et bien d'autres langages.
        </p>
        <p className="text-lg mb-32">
            Lorsque je ne code pas, je joue aux jeux-vidéos, regarde des animes, lis des mangas et je m'entraine également à dessiner des illustrations.
            Je suis également les dernières <span className="font-medium">actualités automobiles et financières.</span>
        </p>

        <SectionHeading>Mes compétences</SectionHeading>
        <div className=' max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
          <ul className='text-grey-100 px-4 py-4 flex flex-wrap justify-center gap-2 text-md font-bold'>
            {skills.map((skill, index) => (
              <motion.li key={index}
              className="bg-slate-100 gap-2 px-8 py-2 rounded-xl border border-black-1/2 cursor-pointer hover:scale-105 duration-200"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ 
                once: true
              }}
              custom={index}

              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>

    </motion.section>
  )
}

export default About