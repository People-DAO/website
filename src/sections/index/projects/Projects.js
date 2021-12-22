import React from "react"

import Section from "../../../components/section/Section"

import * as projectsStyle from "./Projects.module.scss"

const ProjectsSection = () => (
  <Section name="projects" className={projectsStyle.projects}>
    <span>Projects section</span>
  </Section>
)

export default ProjectsSection