import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"
import socials from "../../../../configuration/socials.yml"

import * as supportStyle from "./Support.module.scss"
import { element } from "prop-types"
import support from "../../../../configuration/support.yml"

const SupportSection = () => (

  <Section name="support" className={supportStyle.support}>
    <div className={supportStyle.wrapper}>
      <Fade distance="25%">
        <div className={supportStyle.content}>
          <div className={supportStyle.title}>
            <h3>People support $PEOPLE</h3>
          </div>
          
          <div className={supportStyle.content}>
            <div className={supportStyle.list}>
              {
                support.supports.filter((item, index )=> index % 4 === 0).map((element, index) => {
                  return (
                  <div className={supportStyle.item} >
                    <div className={supportStyle.left}>
                      <div className={supportStyle.left1} style={{ background: `url("/assets/images/people${index * 4 + 1}.png") center center /cover` }} />
                      <div className={supportStyle.left2} style={{ background: `url("/assets/images/people${index * 4 + 2}.png") center center /cover` }} />
                    </div>
                    <div className={supportStyle.right}>
                      <div className={supportStyle.right1} style={{ background: `url("/assets/images/people${index * 4 + 3}.png") center center /cover` }} />
                      <div className={supportStyle.right2} style={{ background: `url("/assets/images/people${index * 4 + 4}.png") center center /cover` }} />
                    </div>
                  </div>)
                })
              }
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default SupportSection