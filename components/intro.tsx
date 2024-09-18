'use client'

import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { BsArrowRight, BsArrowDownSquareFill, BsLinkedin, BsGithub   } from "react-icons/bs"
import photo from '@/public/photo.jpg'
import { motion } from "framer-motion"

function intro() {
  return (
    <section id='home' className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{ type: "spring", delay: 0.1 }}
            >
                <Image 
                src={ photo } 
                alt="Portrait de Marc-Olivier"
                quality="95"
                priority={true}
                className="h-40 w-40 rounded-full border-[0.25rem] border-white shadow-xl"
                />
            </motion.div>
        </div>
        <motion.h1 
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
            initial={{ y: 100,  opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.9 }}
            >
            <span className="font-bold">
                Bonjour, je suis Marc-Olivier.</span> {" "}
                Je suis un <span className="font-bold">développeur full-stack</span> à la recherche <span className="font-bold"> d'une alternance pour commencer dès que possible.</span>.
                J'aime beaucoup créer des <span className='underline italic'>sites vitrines et des webapps
            </span>.
        </motion.h1>
        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 font-semibold'
            initial={{ y: 100,  opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", delay: 0.3, duration:0.9 }}
            >
                <Link href="#contact" className="group bg-slate-800 text-white px-4 py-4 flex items-center gap-2 rounded-full outline-none focus:sclae-110 active:scale-105 hover:scale-110 hover:bg-slate-900 duration-200">
                    Contactez-moi ici 
                    <BsArrowRight className="group-hover:translate-x-1 transition"/>
                </Link>
                <a className="group bg-gray-50 text-slate-900 px-4 py-4 flex items-center border border-black/10 gap-2 rounded-full cursor-pointer focus:sclae-110 active:scale-105 hover:scale-110 hover:bg-gray-100 hover:text-slate-950 duration-200" 
                href="/Marc-Olivier_Sossou_CV.pdf" 
                download={true}
                >
                    Téléchargez mon CV 
                    <BsArrowDownSquareFill className="group-hover:translate-y-1 transition"/>
                </a>
                <Link href="https://www.linkedin.com/in/marcolivier-sossou/" 
                target='_blank'
                className="group bg-gray-50 text-slate-900 px-4 py-4 border border-black/10 flex items-center gap-2 rounded-full focus:sclae-110 active:scale-105 hover:scale-110 hover:text-slate-950 hover:bg-gray-100 duration-200">
                    LinkedIn 
                    <BsLinkedin className="group-hover:scale-120 transition"/>
                </Link>
                <Link href="https://github.com/MarcOlivier91" 
                target="_blank"
                className="group bg-gray-50 text-slate-900 px-4 py-4 flex items-center border border-black/10 gap-2 rounded-full focus:sclae-110 active:scale-105 hover:scale-110 hover:bg-gray-100 hover:text-slate-950 duration-200">
                    Github 
                    <BsGithub className="group-hover:scale-120 transition"/>
                </Link>
        </motion.div>
    </section>
    )
}

export default intro