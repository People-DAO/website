import React, { useState } from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as donationStyle from "./donation.module.scss"

import content from "../../../../content/index/donation.yml"
import tokens from "../../../../content/index/tokens.yml"

const poap = '/assets/images/donate.svg';

const DonationSection = () => {
  // Form states
  const [tokenToDonate, setToken] = useState(tokens.length ? tokens[0].ticker : "");
  const [chain, setChain] = useState();
  const [amountToDonate, setAmount] = useState("");
  const [isWalletConnected, setWalletConnect] = useState(false);
  // Validate form
  const isValid = amountToDonate > 0 && tokenToDonate !== "";

  function connect(){};

  function handleInput(amount) {
    amount <= 0 ? setAmount("") : setAmount(amount);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (!isValid) return;
    console.log('isValid: ', isValid);
    console.log('tokenToDonate: ', tokenToDonate);
    console.log('amountToDonate: ', amountToDonate);
  }

  // Show form button based on whether user connected to metamask
  const FormButton = () => {
    if (isWalletConnected) {
      return (
        <Button
          type="primary"
          className={donationStyle.button}
          onClick={handleSubmit}
        >
          <span>Donate</span>
        </Button>
      );
    } else {
      return (
        <Button
          type="primary"
          className={donationStyle.button}
          onClick={connect}
        >
          <span>Connect Wallet</span>
        </Button>
      );
    }
  }

  return (
    <Section name="donation" className={donationStyle.donation}>
      <div className={donationStyle.wrapper}>
        <Fade distance="25%">
          <div className={donationStyle.content}>
            <div className={donationStyle.donationPrompt}>
              <h3>
                Donate to People<strong>DAO</strong>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: content.pitch }} />
            </div>

            <div className={donationStyle.donateForm}>
              <span className={donationStyle.title}>Donation</span>
              <form>
                <div className={donationStyle.row}>
                  <label for="selectToken">Select token</label>
                  <select
                    id="selectToken"
                    className={donationStyle.select}
                    value={tokenToDonate}
                    onChange={(e) => setToken(e.target.value)}
                  >
                    {tokens?.length &&
                      tokens.map((item, index) => (
                        <option key={index} value={item?.ticker}>
                          {item?.ticker}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={donationStyle.row}>
                  <label for="donationAmount">Amount</label>
                  <input
                    className={donationStyle.input}
                    type="number"
                    min={0}
                    value={amountToDonate}
                    onChange={(e) => handleInput(e.target.value)}
                  ></input>
                </div>
                <p className={donationStyle.small}>
                  Donations are sent to our Gnosis Multi-sig wallet via the
                  Ethereum network.
                </p>
                <div className={donationStyle.actions}>
                  <FormButton />
                </div>
              </form>
            </div>

            <div className={donationStyle.poap}>
              <div className={donationStyle.row}>
                <span className={donationStyle.title}>I donated POAP</span>
                <Fade right distance="25%">
                  <img
                    className={donationStyle.donateImg}
                    src="/assets/images/donate.svg"
                    alt="invite to donate"
                  />
                </Fade>
              </div>
              <div className={donationStyle.innerWrapper}>
                <p className={donationStyle.poapPrompt}>
                  Donate to get this POAP
                </p>
                <Fade right distance="25%">
                  <img
                    className={donationStyle.poapImg}
                    src="/assets/images/donation-to-peoople-dao-poap.png"
                    alt="donated to peopledao poap"
                  />
                </Fade>
              </div>
              <div className={donationStyle.actions}>
                <Button type="primary" className={donationStyle.button}>
                  <span>Mint</span>
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  );
};

export default DonationSection