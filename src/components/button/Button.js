import React from "react"
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
      onClick={onClick}
      className={`${linkStyle.button} ${buttonType} ${className || ""}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button