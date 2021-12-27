import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"

import * as purchaseStyle from "./Purchase.module.scss"

import content from "../../../../content/index/purchase.yml"

const PurchaseSection = () => (
  <Section name="purchase" className={purchaseStyle.purchase}>
    <div className={purchaseStyle.wrapper}>
      <Fade distance="25%">
        <div className={purchaseStyle.content}>
          <div className={purchaseStyle.title}>
            <h3>How to buy <strong>$PEOPLE</strong></h3>
          </div>
          <div className={purchaseStyle.list}>
            <span>@TODO</span>
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