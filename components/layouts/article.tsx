import { motion } from 'framer-motion'
import React from 'react'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { Box } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

interface ILayoutProps {
  children: JSX.Element
  title?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
    >
      <Box position="relative">
        {title && (
          <Head>
            <title>{title} - Azamat Askarov</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </Box>
    </motion.article>
  )
}

export default Layout
