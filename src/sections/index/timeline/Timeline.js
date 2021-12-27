import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"

import * as timelineStyle from "./Timeline.module.scss"

import content from "../../../../content/index/timeline.yml"

const TimelineSection = () => (
  <Section name="timeline" className={timelineStyle.timeline}>
    <div className={timelineStyle.wrapper}>
      <Fade distance="25%">
        <div className={timelineStyle.content}>
          <div className={timelineStyle.list}>
            {content?.length && content.map((item) => (
              <div key={item?.title} className={timelineStyle.item}>
                <div className={timelineStyle.date}>
                  <span>{item?.date}</span>
                </div>
                <div className={timelineStyle.point} />
                <div className={timelineStyle.title}>
                  <span>{item?.title}</span>
                </div>
                <div className={timelineStyle.text}>
                  <p>{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default TimelineSection