import React, {useState} from "react"
import Fade from "react-reveal/Fade"
import CountUp from 'react-countup'

import Section from "../../../components/section/Section"

import * as tokenStyle from "./Token.module.scss"

import parseCountupValue from "../../../helpers/parseCountupValue"

const TokenSection = () => {
  const [countupReady, setCountupReady] = useState(false)

  // @TODO: Dynamic values

  const rank = parseCountupValue({value: 2324, reverse: true})
  const cap = parseCountupValue({value: 940})
  const volume = parseCountupValue({value: 8.9, decimals: 2})

  return (
    <Section name="token" className={tokenStyle.token}>
      <div className={tokenStyle.wrapper}>
        <Fade distance="25%" onReveal={() => setCountupReady(true)}>
          <div className={tokenStyle.content}>
            <div className={tokenStyle.header}>
              <span className={tokenStyle.governance}>Governed by</span>
              <span className={tokenStyle.title}>Constitution<strong>DAO</strong></span>
              <div className={tokenStyle.price}>
                <div className={tokenStyle.label}>$PEOPLE</div>
                <div className={tokenStyle.value}>$0.145 USD</div>
              </div>
            </div>
            <div className={tokenStyle.values}>
              <div className={tokenStyle.item}>
                <span className={tokenStyle.label}>Rank</span>
                <span className={tokenStyle.value}>
                  {countupReady && (
                    <CountUp
                      start={rank.start}
                      end={rank.end}
                      decimals={rank.decimals}
                      duration={5}
                    />
                  )}
                </span>
              </div>
              <div className={tokenStyle.item}>
                <span className={tokenStyle.label}>Market cap</span>
                <span className={tokenStyle.value}>
                  {"$"}
                  {countupReady && (
                    <CountUp
                      start={cap.start}
                      end={cap.end}
                      decimals={cap.decimals}
                      duration={5}
                    />
                  )}
                  {" M"}
                </span>
              </div>
              <div className={tokenStyle.item}>
                <span className={tokenStyle.label}>24h volume</span>
                <span className={tokenStyle.value}>
                  {"$"}
                  {countupReady && (
                    <CountUp
                      start={volume.start}
                      end={volume.end}
                      decimals={volume.decimals}
                      duration={5}
                    />
                  )}
                  {" M"}
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  )
}
export default TokenSection