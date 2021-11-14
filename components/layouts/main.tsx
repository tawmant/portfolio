import React, { FC } from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'

type TMainProps = {
  children?: JSX.Element | JSX.Element[]
  router: any
}

const Main: FC<TMainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Azamat Askarov - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
