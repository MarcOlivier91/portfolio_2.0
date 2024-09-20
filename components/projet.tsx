"use client"

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from 'next/image';
import Link from "next/link";
import { BsGithub } from "react-icons/bs";


type ProjetProps = typeof projectsData[number];

export default function Projet({title, description, tags, imageUrl, githubRepo}: ProjetProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref, 
        offset: ['0 1', "0.8 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])


    return <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className="mb-4 sm:mb-8 last:mb-0">
        <section className="group bg-slate-100 hover:bg-slate-200 max-w-[42rem] border transition border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem]">
        <div className='py-2 pb-12 px-4 mb-2 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-800'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-[3rem]'>
            {tags.map((tag, index) => (
                <li className="px-2 py-2 mb-2 text-[0.7rem] uppercase font-extrabold tracking-wider text-white rounded-lg bg-slate-700" key={index}>
                    {tag}
                </li>
                ))}
            </ul>        
            <Link 
                href={githubRepo} 
                target="_blank" 
                className="group bg-gray-50 text-slate-900 my-2 py-4 flex flex-wrap font-semibold items-center justify-center border border-black/10 gap-2 rounded-full focus:sclae-110 active:scale-105 hover:scale-110 hover:bg-gray-100 hover:text-slate-950 duration-200">
                    Code Source
                    <BsGithub className="group-hover:scale-120 transition"/>
            </Link>
        </div>


        <Image 
            src={imageUrl} 
            alt={title} 
            quality={95} 
            className='absolute top-8 -right-40 w-[25.25rem] rounded-2xl shadow-2xl group-hover:scale-110 group-hover:translate-x-4 group-hover:translate-y-3 group-hover:rotate-2 duration-200'
        />
        </section>

    </motion.div>
}