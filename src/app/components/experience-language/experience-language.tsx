import Image from "next/image";
import "./experience-language.scss";

interface ExperienceLanguageProps {
    time: string,
    imagem: string,
    alt: string
}
export function ExperienceLanguage({imagem, time, alt}: ExperienceLanguageProps) {
    return (
        <div className="experience-language">
            <Image
                src={imagem}
                alt={alt}
                width={40}
                height={40}
                priority
            />
            <div className="experience-unit">
                <div className={"experience-measure measure-"+time}>
                    <span>{time} years</span>
                </div>
            </div>
        </div>
    )
}