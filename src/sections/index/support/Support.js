import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"

import * as supportStyle from "./Support.module.scss"

const SupportSection = () => (
  <Section name="support" className={supportStyle.support}>
    <div className={supportStyle.wrapper}>
      <Fade distance="25%">
        <div className={supportStyle.content}>
          <div className={supportStyle.title}>
            <h3>People support $PEOPLE</h3>
          </div>
          <span>@TODO</span>
        </div>
      </Fade>
    </div>
  </Section>
)

export default SupportSection