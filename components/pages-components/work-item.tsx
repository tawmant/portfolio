import React, { FC } from 'react'
import Layout from '../layouts/article'
import { Meta, Title, WorkImage } from '../work'
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

interface IWorkItemProps {
  data: IWorkItem
}

export interface IWorkItem {
  title: string
  text?: string
  link: string
  shortLink?: string
  stack: string[]
  images: { link: string; alt?: string }[]
}

const WorkItem: FC<IWorkItemProps> = ({ data }) => {
  const { title, text, stack, link, shortLink, images } = data
  return (
    <Layout title={title}>
      <Container>
        <Title>{title}</Title>
        {!!text && <Paragraph>{text}</Paragraph>}
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={link} target="_blank">
              {shortLink || link} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              {stack.map(
                stackItem =>
                  `${stackItem}${
                    stack[stack.length - 1] === stackItem ? '' : ', '
                  }`
              )}
            </span>
          </ListItem>
        </List>

        {images.map(image => (
          <WorkImage key={image.link} src={image.link} alt={image.alt || ''} />
        ))}
      </Container>
    </Layout>
  )
}

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;
`

export default WorkItem
