import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as proposalsStyle from "./Proposals.module.scss"

import socials from "../../../../configuration/socials.yml"

const comingSoon = '/assets/images/coming_soon.jpeg';

const ProposalsSection = () => (
  <Section name="proposals" className={proposalsStyle.proposals}>
    <div className={proposalsStyle.wrapper}>
      <Fade distance="25%">
        <div className={proposalsStyle.content}>
          <div className={proposalsStyle.title}>
            <h3>Proposals in snapshot</h3>
          </div>
          <div className={proposalsStyle.content}>
            <div className={proposalsStyle.list}>
              <div className={proposalsStyle.item} />
              <div className={proposalsStyle.item} />
              <div className={proposalsStyle.item} />
              <div className={proposalsStyle.item}  />
            </div>
            <div className={proposalsStyle.action}>
              <Button
                type="secondary"
                className={proposalsStyle.button}
                href={socials.discordUrl}
                target="_blank"
              >
                <span>Download proposal template</span>
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default ProposalsSection