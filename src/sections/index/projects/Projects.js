import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as projectsStyle from "./Projects.module.scss"

import socials from "../../../../configuration/socials.yml"

const ProjectsSection = () => (
  <Section name="projects" className={projectsStyle.projects}>
    <div className={projectsStyle.wrapper}>
      <Fade distance="25%">
        <div className={projectsStyle.content}>
          <div className={projectsStyle.title}>
            <h3>People<strong>DAO</strong><br /><strong>Ongoing projects</strong></h3>
          </div>
          <div className={projectsStyle.actions}>
            <Button
              type="secondary"
              className={projectsStyle.button}
              href={socials.discordUrl}
              target="_blank"
            >
              <span>Join Discord</span>
            </Button>
          </div>
          <div className={projectsStyle.list}>
            <div className={projectsStyle.item} />
            <div className={projectsStyle.item} />
            <div className={projectsStyle.item} />
            <div className={projectsStyle.item} />
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default ProjectsSection