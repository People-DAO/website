import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import meta from "../../../configuration/meta.yml"

const Head = ({title}) => {
  const fullTitle = title ? `${title} - ${meta.title}` : meta.title

  return (
    <Helmet>
      <html lang="en" />
      <meta httpEquiv="Content-Type" content="text/html" />
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={`${meta.url}/meta/og-image.jpg?v=${meta.version}`} />
      <meta property="og:image:width" content={meta.ogImageWidth} />
      <meta property="og:image:height" content={meta.ogImageHeight} />
      <meta property="og:url" content={meta.url} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/meta/apple-touch-icon.png?v=${meta.version}`} />
      <link rel="icon" type="image/svg+xml" href={`/meta/favicon.svg?v=${meta.version}`} />
      <link rel="icon" type="image/png" href={`/meta/favicon.png?v=${meta.version}`} />
      <link rel="manifest" href={`/meta/site.webmanifest?v=${meta.version}`} />
      <link rel="mask-icon" href={`/meta/safari-pinned-tab.svg?v=${meta.version}`} color={meta.appleAppColor} />
      <link rel="shortcut icon" href={`/meta/favicon.ico?v=${meta.version}`} />
      <meta name="msapplication-TileColor" content={meta.msAppColor} />
      <meta name="theme-color" content={meta.themeColor} />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string
}

export default Head