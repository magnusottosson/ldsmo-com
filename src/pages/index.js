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

export default () => (
  <Page
    keywords="ldsmo, new ventures, magnus ottosson, luca di stefano"
    description="LDSMO New Ventures."
    title="LDSMO New Ventures."
  >
    <Box mb={5}>
      <H1>LDSMO <ExtraLight>New Ventures</ExtraLight>.</H1>
    </Box>
  </Page>
)
