import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Projet from './projet';


export default function projets() {
    
  return (
    <section id="mesprojets" className='scroll-mt-28 mb-28'>
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
