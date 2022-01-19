import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as projectsStyle from "./Projects.module.scss"

import socials from "../../../../configuration/socials.yml"
const comingSoon = '/assets/images/coming_soon.jpeg';

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
            <div className={projectsStyle.item}>
              <span className={projectsStyle.text}>Applying for Harmony Grant</span>
            </div>
            <div className={projectsStyle.item}>
              <span className={projectsStyle.text}>Writing DAO Consitution</span>
            </div>
            <div className={projectsStyle.item}>
              <span className={projectsStyle.text}>DAO-DAO Collaboration</span>
            </div>
            <div className={projectsStyle.item}>
              <span className={projectsStyle.text}>Coordinape Integration</span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default ProjectsSection