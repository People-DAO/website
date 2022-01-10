import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"

import * as purchaseStyle from "./Purchase.module.scss"

import content from "../../../../content/index/purchase.yml"
import Button from "../../../components/button/Button"
import socials from "../../../../configuration/socials.yml"

const PurchaseSection = () => (
  <Section name="purchase" className={purchaseStyle.purchase}>
    <div className={purchaseStyle.wrapper}>
      <Fade distance="25%">
        <div className={purchaseStyle.content}>
          <div className={purchaseStyle.title}>
            <h3>How to buy <strong>$PEOPLE</strong></h3>
          </div>
          <div className={purchaseStyle.list}>
            {/* <span>@TODO</span> */}
            <Button className={purchaseStyle.item} 
            href={socials.uniUrl}
            target="_blank"
            >UINSWAP</Button>
            <Button className={purchaseStyle.itemred}
            href={socials.ftxUrl}
            target="_blank"
            >FTX</Button>
            <Button className={purchaseStyle.item}
            href={socials.okexUrl}
            target="_blank"
            >OKEX</Button>
          </div>

          <div className={purchaseStyle.list}>
            {/* <span>@TODO</span> */}
            <Button className={purchaseStyle.item} 
            href={socials.binanceUrl}
            target="_blank"
            >BINANCE</Button>
          </div>
          <div className={purchaseStyle.text}>
            <p>{content.purchase}</p>
          </div>
        </div>
      </Fade>
    </div>
  </Section >
)

export default PurchaseSection