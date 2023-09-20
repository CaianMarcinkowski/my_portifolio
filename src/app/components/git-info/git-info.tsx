import { SectionTitle } from "../sessionTitle/section-title"
import "./git-info.scss"

export function GitInfo() {
  return (
    <div className="languages-git">
      <SectionTitle text = "Github Status"/>
      <img
        src="https://camo.githubusercontent.com/bd537d133edf6972ff3699273ea66ae01c8377cdf713b2c100e90aeb2a0ad3e1/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d436169616e4d617263696e6b6f77736b69266c61796f75743d636f6d70616374266c616e67735f636f756e743d37267468656d653d746f6b796f6e69676874"
        alt="Git"
        width={300}
        height={190}
      />
    </div>
  )
}