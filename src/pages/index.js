import React from "react"

import Layout from "../layout/Layout"

import HeroSection from "../sections/index/hero/Hero"
import AboutSection from "../sections/index/about/About"
import TimelineSection from "../sections/index/timeline/Timeline"
import TokenSection from "../sections/index/token/Token"
import PurchaseSection from "../sections/index/purchase/Purchase"
import ProjectsSection from "../sections/index/projects/Projects"
import ProposalsSection from "../sections/index/proposals/Proposals"
import FaqSection from "../sections/index/faq/Faq"
import SupportSection from "../sections/index/support/Support"
import { Provider } from 'react-redux';
import store from '../store/index';
import DonationSection from "../sections/index/donation/donation"

const IndexPage = () => (
  <Provider store={store}>
    <Layout>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <TokenSection />
      <PurchaseSection />
      <ProjectsSection />
      <DonationSection />
      <ProposalsSection />
      <FaqSection />
      <SupportSection />
    </Layout>
  </Provider>
)

export default IndexPage