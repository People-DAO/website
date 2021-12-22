import React from "react"

import Section from "../../../components/section/Section"

import * as timelineStyle from "./Timeline.module.scss"

const TimelineSection = () => (
  <Section name="timeline" className={timelineStyle.timeline}>
    <span>Timeline section</span>
  </Section>
)

export default TimelineSection