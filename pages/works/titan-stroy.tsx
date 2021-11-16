import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/UI/paragraph'

const Work = () => (
  <Layout title="Pizza">
    <Container>
      <Title>Titan stroy</Title>
      <P>a landing page for the company "Titan stroy"</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://titanstroy.kz/titan-stroy.html">
            https://titanstroy.kz <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, JavaScript</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
