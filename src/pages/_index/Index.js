import React from "react"

import Layout from "../../layout/Layout"

import * as indexStyle from "./Index.module.scss"

const IndexPage = () => (
  <Layout>
    <section id="proposals" className={indexStyle.proposals}>
      <div className={indexStyle.container}>
        <div className={indexStyle.title}>
          <h3>Proposals in snapshot</h3>
        </div>
        <div className={indexStyle.list}>
          <div className={indexStyle.item} />
          <div className={indexStyle.item} />
          <div className={indexStyle.item} />
          <div className={indexStyle.item} />
        </div>
        <div className={indexStyle.action}>
          <span>@TODO: Button</span>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
