import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btns/social-btns'
import { Footer } from './components/footer/footer'
import { GitIcon } from './components/icons/git-icon'
import { GitInfo } from './components/git-info/git-info'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className='primary-button' href='mailto: caianferre@gmail.com'>
            Contact me
            <EmailIcon/>
          </a>
        </div>
      <GitInfo/>      
    </main>
  )
}
