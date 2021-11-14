import React from 'react'
import { Html, Head, NextScript, Main } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../libs/theme'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
