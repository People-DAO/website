import React from "react"

import Section from "../../../components/section/Section"

import * as aboutStyle from "./About.module.scss"

const AboutSection = () => (
  <Section name="about" className={aboutStyle.about}>
    <span>About section</span>
  </Section>
)

export default AboutSection