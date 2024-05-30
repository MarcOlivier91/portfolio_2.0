import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';

export default function projets() {
  return (
    <section>
        <SectionHeading>Mes Projets</SectionHeading>
        <div>
            {projectsData.map((projet, index) => (
                <React.Fragment key={index}>
                    <Projet {...projet}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

type ProjetProps = typeof projectsData[number];

function Projet({title, description, tags, imageUrl}: ProjetProps) {
    return <section className="bg-slate-300 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8">
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p>{description}</p>
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>
                    {tag}
                </li>
            ))}
        </ul>

        <Image src={imageUrl} alt={title} quality={90} />
    </section>
}