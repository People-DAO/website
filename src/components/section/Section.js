import React from "react"
import PropTypes from "prop-types"

import * as sectionStyle from "./Section.module.scss"

const Section = ({name, className, children, ...props}) => (
  <section
    id={name}
    className={`${sectionStyle.section} ${className || ""}`}
    {...props}
  >
    <div className={sectionStyle.container}>
      {children}
    </div>
  </section>
)

Section.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section