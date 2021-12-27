import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Accordion from "../../../components/accordion/Accordion"

import * as faqStyle from "./Faq.module.scss"

import content from "../../../../content/index/faq.yml"

const FaqSection = () => (
  <Section name="faq" className={faqStyle.faq}>
    <div className={faqStyle.wrapper}>
      <Fade distance="25%">
        <div className={faqStyle.content}>
          <div className={faqStyle.title}>
            <h3>FAQ</h3>
            <span>Frequently asked questions</span>
          </div>
          <div className={faqStyle.list}>
            {content?.length && content.map((item, index) => (
              <Accordion
                title={item?.question}
                className={faqStyle.item}
                open={!index}
              >
                <p>{item?.answer}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default FaqSection