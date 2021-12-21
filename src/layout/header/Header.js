import React from 'react'
import PropTypes from 'prop-types'
import Headroom from 'react-headroom'
import Fade from 'react-reveal/Fade'

import * as headerStyle from './Header.module.scss'

const Header = () => (
  <Headroom>
    <Fade top>
      <header className={headerStyle.header}>Header</header>
    </Fade>
  </Headroom>
)

export default Header