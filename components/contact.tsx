"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { IoPaperPlane } from "react-icons/io5";
import { motion } from 'framer-motion';


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
        <p className='text-slate-600 -mt-4'>Vous pouvez me contacter directment par mail à <a className="underline" href="mailto:smarc.mailpro@gmail.com">smarc.mailpro@gmail.com</a> 
        ou via ce formulaire : </p>

        <form className='mt-10 flex flex-col'>
            <input 
                type="email" 
                placeholder="Email" 
                className='h-14 rounded-lg border border-black/10 px-4 py-4'
            />
            <textarea placeholder='Message' className='h-52 my-3 rounded-lg border border-black1/2 px-4 py-4'/>
            <button 
                type="submit" 
                className='flex group items-center justify-center gap-2 mx-2 my-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-lg outline-none hover:bg-slate-800 font-medium hover:scale-110 active:scale-105 duration-200'
            >
                Envoyer 
                <IoPaperPlane className='group-hover: translate-x-1 group-hover:-translate-y-1 duration-200'/>
            </button>
        </form>    
    </motion.section>
  )
}
