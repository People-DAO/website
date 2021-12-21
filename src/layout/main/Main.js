import React from "react"
import PropTypes from "prop-types"

const Main = ({children, ...props}) => (
  <main id="top" {...props}>
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main