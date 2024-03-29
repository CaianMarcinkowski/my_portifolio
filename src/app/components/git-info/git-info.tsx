"use client";
import { SectionTitle } from "../sessionTitle/section-title"
import "./git-info.scss"

import { motion } from 'framer-motion'

export function GitInfo() {
  return (
    <div className="languages-git">
      <SectionTitle text = "Github Status"/>
      <motion.img
        src="https://camo.githubusercontent.com/263d97e87c97d0a23d52b01a2ec91d4e336bc137bc8607d29ab72b7345db1520/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d436169616e4d617263696e6b6f77736b69266c61796f75743d636f6d70616374266c616e67735f636f756e743d37267468656d653d746f6b796f6e69676874"
        alt="Git"
        width={300}
        height={190}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      />
    </div>
  )
}