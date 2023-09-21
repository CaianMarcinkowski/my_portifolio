"use client";
import { DiscordIcon } from "../icons/discord-icon";
import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { motion } from "framer-motion";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <motion.a
        href="https://www.instagram.com/marcinkowski__/?next=%2F"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <InstaIcon />
      </motion.a>
      <motion.a
        href="https://github.com/CaianMarcinkowski"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <GitIcon />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/caian-marcinkowski-ferreira-bb541a137/"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <LinkedinIcon />
      </motion.a>
      <motion.a
        href="https://discord.gg/KrhJ4mF6MK"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <DiscordIcon />
      </motion.a>
    </div>
  );
}
