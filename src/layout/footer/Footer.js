import React from "react"
import {Link} from "gatsby"
import Fade from "react-reveal/Fade"
import SVG from "react-inlinesvg"

import * as footerStyle from "./Footer.module.scss"

import socials from "../../../configuration/socials.yml"

import PeopledaoIcon from "../../../static/assets/icons/peopledao/logo.svg";
import TwitterIcon from "../../../static/assets/icons/socials/twitter.svg"
import DiscordIcon from "../../../static/assets/icons/socials/discord.svg"
import CoinmarketcapIcon from "../../../static/assets/icons/socials/coinmarketcap.svg"
import EtherscanIcon from "../../../static/assets/icons/socials/etherscan.svg"

const Footer = () => (
  <footer className={footerStyle.footer}>
    <Fade>
      <div className={footerStyle.container}>
        <div className={footerStyle.group}>
          <div className={footerStyle.logo}>
            <SVG src={PeopledaoIcon} />
          </div>
          <div className={footerStyle.links}>
            <Link to="/@TODO">Privacy</Link>
            <Link to="/@TODO">Terms</Link>
          </div>
        </div>
        <div className={footerStyle.group}>
          <span>@TODO: Button</span>
        </div>
        <div className={footerStyle.group}>
          <div className={footerStyle.socials}>
            <a href={socials.twitterUrl} target="_blank">
              <SVG src={TwitterIcon} />
            </a>
            <a href={socials.discordUrl} target="_blank">
              <SVG src={DiscordIcon} />
            </a>
            <a href={socials.coinmarketcapUrl} target="_blank">
              <SVG src={CoinmarketcapIcon} />
            </a>
            <a href={socials.etherscanUrl} target="_blank">
              <SVG src={EtherscanIcon} />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  </footer >
)

export default Footer