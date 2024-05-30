'use client'

import React from 'react'
import { motion } from "framer-motion"


function sectionDivider() {
  return (
    <motion.div 
        className="bg-slate-200 my-24 h-16 w-1 rounded-full visible sm:block"
        initial={{ y: 100,  opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.9 }}>

    </motion.div>
  )
}

export default sectionDivider