import React, { FC } from 'react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp(prop: string): boolean {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface ISectionProps {
  children: JSX.Element | JSX.Element[]
  delay?: number
}

const Section: FC<ISectionProps> = ({ children, delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // @ts-ignore
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
