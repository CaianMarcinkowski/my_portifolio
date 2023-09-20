import Image from 'next/image'
import "./header.scss"
export function Header(){
    return(
        <div className="header">
        <div>
            <h1>Hi, I am Caian 👨‍💻</h1>
            <h2>Software developer</h2>
        </div>
        <Image
          src="/perfil.jpeg"
          alt="Perfil Photo"
          width={260}
          height={260}
          priority
        />
      </div>
    )
}