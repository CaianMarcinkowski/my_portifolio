import { Header } from './components/header/header'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <div className="experiences">
        <h3>Software Engineer</h3>
        <p>text</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="language-info">
            <span>🇧🇷 Pt-br - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>💻</span>
            <span>Copmuter Science in Uniritter - in progress</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
      </div>
    </main>
  )
}
