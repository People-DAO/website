import React from 'react'
import Headroom from 'react-headroom'
import Fade from 'react-reveal/Fade'
import SVG from "react-inlinesvg"
import {Link as ScrollLink} from 'react-scroll'

import * as headerStyle from './Header.module.scss'

import socials from "../../../configuration/socials.yml"

const Header = () => (
  <Headroom>
    <Fade top>
      <header className={headerStyle.header}>
        <div className={headerStyle.container}>
          <div className={headerStyle.logo}>
            <ScrollLink to="top" smooth>
              <SVG src="/assets/icons/peopledao/logo.svg" />
            </ScrollLink>
          </div>
          <nav className={headerStyle.navigation}>
            <ScrollLink to="about" smooth>
              <span>History</span>
            </ScrollLink>
            <ScrollLink to="token" smooth>
              <span>$PEOPLE</span>
            </ScrollLink>
            <ScrollLink to="projects" smooth>
              <span>Projects</span>
            </ScrollLink>
            <ScrollLink to="proposals" smooth>
              <span>Proposals</span>
            </ScrollLink>
            <ScrollLink to="faq" smooth>
              <span>FAQ</span>
            </ScrollLink>
            <a className={headerStyle.action} href={socials.discordUrl} target="_blank">
              <span>Join Discord</span>
            </a>
          </nav>
        </div>
      </header>
    </Fade>
  </Headroom>
)

export default Header