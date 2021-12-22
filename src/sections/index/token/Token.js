import React from "react"

import Section from "../../../components/section/Section"

import * as tokenStyle from "./Token.module.scss"

const TokenSection = () => (
  <Section name="token" className={tokenStyle.token}>
    <span>Token section</span>
  </Section>
)

export default TokenSection