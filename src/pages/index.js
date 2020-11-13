import React from "react"
import { Helmet } from "react-helmet"
import { css, jsx, Global } from "@emotion/react"
import { H1, H2, ExtraLight } from "../components/typography"
import Box from "../components/box"
import Link from "../components/link"

import "ress"
import "inter-ui"

const contacts = [
  {
    firstName: "Luca",
    lastName: "Di Stefano",
    phone: "+46708556723",
    email: "luca@ldsmo.com",
  },
  {
    firstName: "Magnus",
    lastName: "Ottosson",
    phone: "+46733908060",
    email: "magnus@ldsmo.com",
  },
]

export default () => (
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

        @supports (font-variation-settings: normal) {
          body {
            font-family: "Inter var", sans-serif;
          }
        }
      `}
    />
    <Helmet>
      <meta charSet="utf-8" />
      <title>LDSMO New Ventures</title>
      <description>LDSMO New Ventures</description>
      <link rel="canonical" href="http://ldsmo.com/" />
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
      <Box mb={5}>
        <H1>
          LDSMO <ExtraLight>New Ventures</ExtraLight>.
        </H1>
      </Box>
      <section
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: left;
        `}
      >
        {contacts.map(({ firstName, lastName, phone, email }, index) => (
          <React.Fragment key={index}>
            <Box my={2} minWidth={(1, 250)}>
              <Box>
                <H2>
                  {firstName} <ExtraLight>{lastName}</ExtraLight>
                </H2>
              </Box>
              <Box mt={3}>
                <Link href={`mailto:${email}`}>{email}</Link>
              </Box>
              <Box mt={2}>
                <Link href={`tel:${phone}`}>{phone}</Link>
              </Box>
            </Box>
          </React.Fragment>
        ))}
      </section>
    </main>
  </>
)