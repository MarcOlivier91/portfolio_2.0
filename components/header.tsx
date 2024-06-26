'use client';

import React from 'react'
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

// TODO: Finish "bubble" on each section as the page scrolls

export default function Header() {
    const { activeSection, setActiveSection} = useActiveSectionContext();

    return (
    <header className="z-[999] relative">
        <motion.div 
            className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-black border-opacity-30 bg-white bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:h-[3.25rem] md:w-[36rem] sm:rounded-md"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x:"-50%", opacity: 1 }}
            transition={{ delay: 0.1 }}

        >
        </motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 px-2 py-2 md:top-[1.7rem] lg:h-[initial] sm:py-0">
            <ul className="flex w-[32rem] flex-wrap items-center justify-center text-[1.5rem] gap-2 font-medium lg:w-[initial] sm:flex-nowrap">
                {links.map((link) => (
                    <motion.li
                        key={link.route} 
                        className=" h-3/4 flex items-center justify-center relative"                        
                        initial={{ y: -100,  opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        >
                            <Link href={link.route} 
                            className={clsx
                            ("flex w-full items-center justify-center px-2 py-2 text-slate-400 text-2xl hover:text-blue-950 duration-300 transition", 
                            {"text-slate-950": activeSection === link.name}
                            )}
                            onClick={() => setActiveSection(link.name)}
                            >
                            {link.name}

                            {link.name === activeSection && (
                                <motion.span 
                                    className='bg-gray-200 rounded-md absolute inset-0 -z-10' 
                                    layoutId="activeSection" 
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 460, 
                                        damping: 45 
                                    }}>
                                </motion.span>
                            )}
                            </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
