import React from "react"

import Section from "../../../components/section/Section"

import * as heroStyle from "./Hero.module.scss"

const HeroSection = () => (
  <Section name="hero" className={heroStyle.hero}>
    <span>Hero section</span>
  </Section>
)

export default HeroSection