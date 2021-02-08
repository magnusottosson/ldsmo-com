import React from 'react'
import { Helmet } from 'react-helmet'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react'
import { H1, H2, ExtraLight } from '../components/typography'
import Box from '../components/box'
import Link from '../components/link'
import Page from '../components/page'

import 'ress'
import '../components/fonts.scss'

const contacts = [
  {
    firstName: 'Luca',
    lastName: 'Di Stefano',
    phone: '+46708556723',
    email: 'luca@ldsmo.com',
  },
  {
    firstName: 'Magnus',
    lastName: 'Ottosson',
    phone: '+46733908060',
    email: 'magnus@ldsmo.com',
  },
]

const missing = () => (
  <Page
    meta={[
      {
        name: 'description',
        content: 'LDSMO New Ventures.',
      },
      {
        name: 'keywords',
        content: 'ldsmo, new ventures, magnus ottosson, luca di stefano',
      },
    ]}
    title="LDSMO New Ventures."
  >
    <Box mb={5}>
      <H1>404 <ExtraLight>NOT FOUND</ExtraLight>.</H1>
    </Box>
  </Page>
)

export default missing