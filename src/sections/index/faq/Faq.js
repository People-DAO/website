import React from "react"

import Section from "../../../components/section/Section"

import * as faqStyle from "./Faq.module.scss"

const FaqSection = () => (
  <Section name="faq" className={faqStyle.faq}>
    <div>
      <div className={faqStyle.wrapper}>
        <div className={faqStyle.title}>
          <h1>FAQ section</h1>
          <span>frequently asked questions</span>
          </div>
        <div className={faqStyle.content}>
          <div className={faqStyle.item}>What is PeopleDAO?</div>
          <div className={faqStyle.item}>What is PeopleDAO?</div>
          <div className={faqStyle.item}>What is PeopleDAO?</div>
          <div className={faqStyle.item}>What is PeopleDAO?</div>
          <div className={faqStyle.item}>What is PeopleDAO?</div>
        </div>
      </div>
    </div>
    {/* <span>FAQ section</span> */}
  </Section>
)

export default FaqSection