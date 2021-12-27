import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as aboutStyle from "./About.module.scss"

import content from "../../../../content/index/about.yml"
import socials from "../../../../configuration/socials.yml"

const AboutSection = () => (
  <Section name="about" className={aboutStyle.about}>
    <div className={aboutStyle.wrapper}>
      <Fade distance="25%">
        <div className={aboutStyle.content}>
          <div className={aboutStyle.text} dangerouslySetInnerHTML={{__html: content.about}} />
          <div className={aboutStyle.action}>
            <Button
              className={aboutStyle.button}
              href={socials.discordUrl}
              target="_blank"
            >
              <span>Join Discord</span>
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default AboutSection