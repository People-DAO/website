import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as proposalsStyle from "./Proposals.module.scss"

import socials from "../../../../configuration/socials.yml"
import proposal from "../../../../configuration/proposal.yml"

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
              <a href={proposal.PIP0Url} 
              target="_blank">
                <div className={proposalsStyle.item}> <span>PIP0 -- PeopleDAO, a meta DAO governed by PEOPLE token.</span> </div> 
              </a>
              <a href={proposal.PIP1Url} 
              target="_blank">
                <div className={proposalsStyle.item}> <span>Core Proposal PIP1 - Founding Voter POAP.</span> </div> 
              </a>
              <a href={proposal.PIP2Url} 
              target="_blank">
                <div className={proposalsStyle.item}> <span>Core Proposal PIP2 – Cross-chain Bridges.</span> </div> 
              </a>
              <div className={proposalsStyle.item}> <span>Coming Soon...</span> </div> 
            </div>
            <div className={proposalsStyle.action}>
              <Button
                type="secondary"
                className={proposalsStyle.button}
                href={proposal.peopleShapshot}
                target="_blank"
              >
                <span>Check All PROPOSALS</span>
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </Section>
)

export default ProposalsSection