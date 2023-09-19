import { DiscordIcon } from "../icons/discord-icon";
import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/marcinkowski__/?next=%2F"><InstaIcon/></a>
            <a href="https://github.com/CaianMarcinkowski"><GitIcon/></a>
            <a href="https://www.linkedin.com/in/caian-marcinkowski-ferreira-bb541a137/"><LinkedinIcon/></a>
            <a href="https://discord.gg/KrhJ4mF6MK"><DiscordIcon/></a>
        </div>
    )
}