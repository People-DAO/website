import React from "react"
import {Link} from "gatsby"
import Fade from "react-reveal/Fade"
import SVG from "react-inlinesvg"
import {Link as ScrollLink} from 'react-scroll'

import Button from "../../components/button/Button"

import * as footerStyle from "./Footer.module.scss"

import socials from "../../../configuration/socials.yml"
import meta from "../../../configuration/meta.yml"

import PeopledaoIcon from "../../../static/assets/icons/peopledao/logo.svg";
import TwitterIcon from "../../../static/assets/icons/socials/twitter.svg"
import DiscordIcon from "../../../static/assets/icons/socials/discord.svg"
import GithubIcon from "../../../static/assets/icons/socials/github.svg"
import CoinmarketcapIcon from "../../../static/assets/icons/socials/coinmarketcap.svg"
import EtherscanIcon from "../../../static/assets/icons/socials/etherscan.svg"

const Footer = () => (
  <footer className={footerStyle.footer}>
    <Fade>
      <div className={footerStyle.container}>
        <div className={footerStyle.links}>
          <div className={footerStyle.logo}>
            <ScrollLink to="top" smooth>
              <SVG src={PeopledaoIcon} />
            </ScrollLink>
          </div>
          <div className={footerStyle.items}>
            {/* <Link to="/@TODO">Privacy</Link>
            <Link to="/@TODO">Terms</Link> */}
            <a href={meta.repository} target="_blank" rel="noreferrer noopener">Open source</a>
          </div>
        </div>
        <div className={footerStyle.actions}>
          <Button
            className={footerStyle.action}
            href={socials.discordUrl}
            target="_blank"
          >
            <span>Join the movement</span>
          </Button>
        </div>
        <div className={footerStyle.socials}>
          <a href={socials.twitterUrl} target="_blank">
            <SVG src={TwitterIcon} />
          </a>
          <a href={socials.discordUrl} target="_blank">
            <SVG src={DiscordIcon} />
          </a>
          <a href={socials.githubUrl} target="_blank">
            <SVG src={GithubIcon} />
          </a>
          <a href={socials.coinmarketcapUrl} target="_blank">
            <SVG src={CoinmarketcapIcon} />
          </a>
          <a href={socials.etherscanUrl} target="_blank">
            <SVG src={EtherscanIcon} />
          </a>
        </div>
      </div>
    </Fade>
  </footer >
)

export default Footer