import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Box align="center">
      <Heading as="h2" mt={20} mb={20}>
        404 | page not found!
      </Heading>
    </Box>
  )
}

export default NotFoundPage
