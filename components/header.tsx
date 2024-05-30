'use client';
import React from 'react'
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"

export default function header() {
  return (
    <header className="z-[999] relative">
        <motion.div 
            className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-80 bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x:"-50%", opacity: 1 }}
        >
        </motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 px-2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-2 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-2">
                {links.map((link) => (
                    <motion.li
                        key={link.route} 
                        className=" h-3/4 flex items-center justify-center"                        
                        initial={{ y: -100,  opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>
                            <Link href={link.route} className='flex w-full items-center justify-center px-2 py-2 text-slate-400 text-2xl hover:text-blue-950 duration-300 transition'>
                            {link.name}
                            </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
