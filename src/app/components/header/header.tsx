import Image from 'next/image'
import "./header.scss"
export function Header(){
    return(
        <div className="header">
        <div>
            <h1>Hi, I am Caian Marcinkowski Ferreira</h1>
            <h2>Software developer</h2>
        </div>
        <Image
          src="/perfil.jpeg"
          alt="Vercel Logo"
          width={325}
          height={325}
          priority
        />
      </div>
    )
}