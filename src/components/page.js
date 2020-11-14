import React from 'react'
import { Helmet } from 'react-helmet'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react'

export default ({ 
    children,
    title,
    meta
}) => (
    <>
      <Global
        styles={css`
          body {
            background-color: #000;
            color: #fff;
            font: 15px/22px Inter, system-ui, sans-serif;
            font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
            font-kerning: normal;
            font-variant-ligatures: contextual common-ligatures;
            font-weight: 300;
            letter-spacing: -0.004em;
            line-height: 1.5em;
            scroll-behavior: smooth;
          }
        `}
      />
      <Helmet
        meta={meta}
        title={title}
      >
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>
      <main
        css={css`
          align-items: center;
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          min-height: 100vh;
          padding: 25px;
        `}
      >
        {children}
      </main>
    </>
  )
  