import React from "react"

import Section from "../../../components/section/Section"

import * as purchaseStyle from "./Purchase.module.scss"

const PurchaseSection = () => (
  <Section name="purchase" className={purchaseStyle.purchase}>
    <span>Purchase section</span>
  </Section>
)

export default PurchaseSection