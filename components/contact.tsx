"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';


// TODO: Better email form 


export default function contact() {
return (
    <motion.section 
        id="contact" 
        className='mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center'
        initial={{ 
            opacity: 0
        }}
        whileInView={{ 
            opacity: 1
        }}
        transition={{ 
            duration: 1
        }}
        viewport={{ 
            once: true
        }}
        >
        <SectionHeading>Prise de contact</SectionHeading>
        <p className='text-slate-600 -mt-4 mb-8'>Si mon profile vous intéresse, vous pouvez me contacter par les moyens suivants : </p>

        <ul className='text-left list-disc'>
            <li>
                Par mail : <span className='underline'>smarc.mailpro@gmail.com</span>
            </li>
            <li>
                Par téléphone au : 06 81 29 67 39
            </li>
            <li>
                Par LinkedIn : {""} 
                <a 
                    href="https://www.linkedin.com/in/marcolivier-sossou/" 
                    target="_blank"
                    className='underline hover:text-slate-500 hover:scale-110 active:scale-105 duration-200'
                >
                    Marc-Olivier Sossou
                </a>
            </li>
        </ul>   
    </motion.section>
  )
}
