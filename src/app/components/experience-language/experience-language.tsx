"use client";
import Image from "next/image";
import "./experience-language.scss";
import { motion } from 'framer-motion'


interface ExperienceLanguageProps {
    time: number,
    imagem: string,
    alt: string
}
export function ExperienceLanguage({ imagem, time, alt }: ExperienceLanguageProps) {
    
    return (
        <motion.div className="experience-language"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Image
                src={imagem}
                alt={alt}
                width={40}
                height={40}
                priority
            />
            <div className="experience-unit">
                <motion.div className={"experience-measure measure-" + time}
                    initial={{ opacity: 0, width: '0%' }}
                    whileInView={{ opacity: 1, width: ((time*100)/4)+'%' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    
                >
                    <span>{time} years</span>
                </motion.div>
            </div>
        </motion.div>
    )
}