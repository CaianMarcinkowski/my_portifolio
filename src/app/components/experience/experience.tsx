import { SectionTitle } from "../sessionTitle/section-title";
import { ExperienceLanguage } from "../experience-language/experience-language";
import './experience.scss';


export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p> ▪️ Software developer at Maven</p>
            <p> ▪️ IT Specialist at ECORE Group</p>
            <div className="experience-time">
                <ExperienceLanguage time={4} imagem="/java.png" alt="Java Logo"/>
                <ExperienceLanguage time={3} imagem="/node.png" alt="Node Logo"/>
                <ExperienceLanguage time={3} imagem="/android.png" alt="Android Logo"/>
                <ExperienceLanguage time={2} imagem="/php.png" alt="PHP Logo"/>
            </div>
        </div>
    )
}