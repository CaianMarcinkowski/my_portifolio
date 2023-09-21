"use client";
import Image from 'next/image'
import "./header.scss"
import { motion } from 'framer-motion'

export function Header(){
    return(
        <motion.div className="header" 
        initial={{ opacity:0, x: -100 }} 
        whileInView={{opacity:1, x: 0 }}
        exit={{opacity:0, x: -100 }}
        transition={{ duration: 0.5 }}
        >
        <div>
            <h1>Hi, I am Caian 👨‍💻</h1>
            <h2>Software developer</h2>
        </div>
        <Image
          src="/perfil.png"
          alt="Perfil Photo"
          width={260}
          height={260}
          priority
        />
      </motion.div>
    )
}