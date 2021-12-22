import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as proposalsStyle from "./Proposals.module.scss"

const ProposalsSection = () => (
  <Section name="proposals" className={proposalsStyle.proposals}>
    <Fade bottom distance="25%">
      <div className={proposalsStyle.title}>
        <h3>Proposals in snapshot</h3>
      </div>
    </Fade>
    <Fade distance="25%">
      <div className={proposalsStyle.content}>
        <div className={proposalsStyle.list}>
          <div className={proposalsStyle.item} />
          <div className={proposalsStyle.item} />
          <div className={proposalsStyle.item} />
          <div className={proposalsStyle.item} />
        </div>
        <div className={proposalsStyle.action}>
          <Button
            type="secondary"
            className={proposalsStyle.button}
            href="@TODO"
            target="_blank"
          >
            <span>Download proposal template</span>
          </Button>
        </div>
      </div>
    </Fade>
  </Section>
)

export default ProposalsSection