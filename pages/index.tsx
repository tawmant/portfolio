import React from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'

import Section from '../components/UI/section'
import Paragraph from '../components/UI/paragraph'
import { BioYear, BioSection } from '../components/UI/bio'

import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a front-end developer based in Bishkek(Kyrgyzstan)!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Azamat Askarov
          </Heading>
          <p>
            Digital Craftzman( Front-End / Back-End(basic of nodejs) / Designer
            )
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/azamat-avatar.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Azamat is a freelance and a front-end developer based in Bishkek with
          a passion for building the sites he wants. He can solve real problems
          with code. When he's not online, he loves spending time with his
          camera{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Bishkek, Kyrgyzstan.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>I started studying python programming, at the
          end of 2020 started to get interested in the front-end part and took a
          course in this specialty in{' '}
          <Link target="_blank" href="http://alatoo.edu.kg/#gsc.tab=0">
            Ala-too
          </Link>
          , and also took a course from{' '}
          <Link
            target="_blank"
            href="https://www.udemy.com/course/javascript_full/"
          >
            Ivan Petrichenko on Udemy
          </Link>{' '}
          and to this day I am engaged in self-education.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>I worked at{' '}
          <Link target="_blank" href="https://atek.kg/">
            A-tek
          </Link>{' '}
          from June to October, I was developing SPA on React and landing pages,
          and I also had experience in freelancing.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Drawing, Playing basketball, Photography, One Piece.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
