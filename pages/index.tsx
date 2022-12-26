import React, { useRef } from 'react'
import {
  As,
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/UI/section'
import Paragraph from '../components/UI/paragraph'
import { BioYear, BioSection } from '../components/UI/bio'
import { IoLogoInstagram, IoLogoGithub, IoLogoGitlab } from 'react-icons/io5'
import { BsTelegram } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

import { ChevronRightIcon } from '@chakra-ui/icons'

interface ISocialMediaRef {
  title: string
  link: string
  icon: As<any> | undefined
}

const Page = () => {
  const socialMediaRef = useRef<ISocialMediaRef[]>([
    {
      title: '@tawmant',
      link: 'https://www.linkedin.com/in/tawmant/',
      icon: AiFillLinkedin
    },
    {
      title: '@tawmant',
      link: 'https://gitlab.com/tawmant/',
      icon: IoLogoGitlab
    },
    {
      title: '@tawmant',
      link: 'https://github.com/tawmant/',
      icon: IoLogoGithub
    },
    {
      title: '@tawmant_work',
      link: 'https://t.me/tawmant_work/',
      icon: BsTelegram
    }
  ])

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={3}
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
              Digital Craftzman( Front-End / Back-End(basic of nodejs) /
              Designer )
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
            Azamat is a freelance and a front-end developer based in Bishkek
            with a passion for building the sites he wants. He can solve real
            problems with code. When he's not online, he loves spending time
            with his camera.
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
            end of 2020 started to get interested in the front-end part and took
            a course in this specialty in{' '}
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
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/a-tek-digital-studio/"
            >
              A-tek
            </Link>{' '}
            from May to September. From October to the end of the year, I worked
            remotely for Simple Apps Dev. I was developing SPA on ReactJS, SSR
            on NextJS and landing pages, and I also had experience in
            freelancing.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            From the beginning to the end of the year, I worked at{' '}
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/zettasoft-io/"
            >
              ZettaSoft IO
            </Link>{' '}
            as a middle developer.
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

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            {socialMediaRef.current.map(socialMediaItem => (
              <ListItem key={socialMediaItem.link}>
                <Link href={socialMediaItem.link} target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={socialMediaItem.icon} />}
                  >
                    {socialMediaItem.title}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
