import { SectionTitle } from "../sessionTitle/section-title";
import "./information.scss";
export function Info() {
    return (
        <div className="information">
          
          <SectionTitle text = "Languages"/>
          
          <div className="language-info">
            <span>🇧🇷 Pt-br - Native Speaker</span>
          </div>

          <SectionTitle text = "Education"/>
          
          <div className="educational-info">
            <span>💻</span>
            <span>Computer Science in Uniritter - in progress</span>
          </div>

        </div>
    )
}