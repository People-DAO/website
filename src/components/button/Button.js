import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

import * as linkStyle from "./Button.module.scss"

const Button = ({to, href, onClick, target, type, className, children, ...props}) => {
  let Tag = Link;
  if (href) {
    Tag = "a"
  }
  if (onClick) {
    Tag = "div"
  }

  let buttonType = linkStyle.primary
  if (type === "secondary") {
    buttonType = linkStyle.secondary
  }

  return (
    <Tag
      to={to}
      href={href}
      target={target}
      rel={href && target == "_blank" ? "noopener noreferrer" : null}
      onClick={onClick}
      className={`${linkStyle.button} ${buttonType} ${className || ""}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Button