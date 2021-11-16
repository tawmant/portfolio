import { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface ITextProps {
  children: ReactNode
}

export const Title: FC<ITextProps> = ({ children }) => (
  <Box display="flex">
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon mx={1} />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

interface IWorkImageProps {
  src: string
  alt: string
}
export const WorkImage: FC<IWorkImageProps> = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta: FC<ITextProps> = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
