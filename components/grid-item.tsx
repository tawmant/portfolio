import React, { FC } from 'react'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Global } from '@emotion/react'

interface IGridItemProps {
  children?: JSX.Element | JSX.Element[]
  href: string
  title: string
  thumbnail: string
}

export const GridItem: FC<IGridItemProps> = ({
  href,
  title,
  children,
  thumbnail
}) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

interface IWorkGridItemProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode
  id: string
  title: string
  thumbnail: string
}

export const WorkGridItem: FC<IWorkGridItemProps> = ({
  children,
  id,
  thumbnail,
  title
}) => {
  return (
    <Box w="100%" align="center">
      <NextLink href={`/works/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
    .grid-item-thumbnail {
      border-radios: 12x;
    }
  `}
    />
  )
}
