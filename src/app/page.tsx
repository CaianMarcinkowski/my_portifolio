"use client";
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btns/social-btns'
import { GitInfo } from './components/git-info/git-info'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <motion.a className='primary-button' href='mailto: caianferre@gmail.com'
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Contact me
          <EmailIcon />
        </motion.a>
      </div>
      <GitInfo />
    </main>
  )
}
