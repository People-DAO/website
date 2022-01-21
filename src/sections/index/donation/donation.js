import { ethers } from 'ethers';
import React, { useState } from "react"
import Fade from "react-reveal/Fade"

import Section from "../../../components/section/Section"
import Button from "../../../components/button/Button"

import * as donationStyle from "./donation.module.scss"

import content from "../../../../content/index/donation.yml"
import tokens from "../../../../content/index/tokens.yml"
import { setUpContracts } from "../../../util/web3/etherUtil"
import { connect } from 'react-redux';

const poap = '/assets/images/donate.svg';

const treasuryAddress = "0xf41aab66e7771BdfcCf43953b7843873d9bB74f4"

const DonationSection = (props) => {

  const { wallet_connect, account } = props;
  // Form states
  const [tokenToDonate, setToken] = useState(tokens.length ? tokens[0].ticker : "");
  const [chain, setChain] = useState();
  const [amountToDonate, setAmount] = useState("");
  const [isWalletConnected, setWalletConnect] = useState(false);
  // Validate form
  const isValid = amountToDonate > 0 && tokenToDonate !== "";

  function connect() {
    setUpContracts()
  };

  function handleInput(amount) {
    amount < 0 ? setAmount("") : setAmount(amount);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (!isValid) return;
    if (!isValid) {
      return
    }
    var amountWei = ethers.utils.parseEther(amountToDonate);
    if (tokenToDonate === 'ETH') {
      // global.signer.transfor(amountToDonate)
      global.signer.sendTransaction({
        to: treasuryAddress,
        value: amountWei,
        gasPrice: global.signer.getGasPrice(),
        gasLimit: 21000,
      }).then(function (tx) {
        alert("success")
        console.log('tx : ', tx);
      }).catch(e => {
        alert("donate fail!")
      });

    } else if (tokenToDonate === 'PEOPLE') {
      const peopleWithSigner = global.peopleContract.connect(global.signer);
      peopleWithSigner.transfer(treasuryAddress, amountWei).then(response => {

      }).catch(e => {
        alert("donate fail!")
        console.log(' transfer exception : ', e);
      });
    }
  }

  // Show form button based on whether user connected to metamask
  const FormButton = () => {
    if (wallet_connect) {
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
              <span className={donationStyle.title}>Donation:{account === '' ? " Connect Wallet " : account.slice(0, 4) + "..." + account.slice(-4)}</span>
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
                    step="1"
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

const mapStateToProps = (state) => {
  return {

    wallet_connect: state.wallet_connect,
    account: state.account,

  }
}

export default connect(mapStateToProps, null)(DonationSection);

// export default DonationSection