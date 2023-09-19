import { SectionTitle } from "../sessionTitle/section-title";
import "./information.scss";
export function Info() {
    return (
        <div className="information">
          
          <SectionTitle text = "Languages"/>
          
          <div className="language-info">
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>

          <SectionTitle text = "Education"/>
          
          <div className="educational-info">
            <span>💻 Computer Science at Uniritter - in progress</span>
          </div>

        </div>
    )
}