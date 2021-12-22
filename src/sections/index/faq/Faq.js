import React from "react"

import Section from "../../../components/section/Section"

import * as faqStyle from "./Faq.module.scss"

const FaqSection = () => (
  <Section name="faq" className={faqStyle.faq}>
    <span>FAQ section</span>
  </Section>
)

export default FaqSection