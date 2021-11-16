import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/UI/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>Techaim</Title>
      <P>
        The Tech Aim Foundation was created in 2019 by girls and women
        developing in the areas of IT, STEAM and Digital. The Techeim Foundation
        makes the world of Technology and STEAM open and accessible to girls and
        women in Kyrgyzstan and Central Asia.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://techaim-349df.web.app/">
            https://techaim-349df.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript, SCSS, i18next</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
