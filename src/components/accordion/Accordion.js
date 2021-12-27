import React, {useState} from "react"

import * as accordionStyle from "./Accordion.module.scss"

const Accordion = ({title, children, open = false, className, ...props}) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`${accordionStyle.accordion} ${isOpen ? accordionStyle.open : ""} ${className || ""}`}
      onClick={handleClick}
      {...props}
    >
      <div className={accordionStyle.header}>
        <span>{title}</span>
      </div>
      <div className={accordionStyle.content}>
        {isOpen && (<p>{children}</p>)}
      </div>
    </div>
  )
}

export default Accordion