import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pizza">
    <Container>
      <Title>Pizza</Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-firebase-pizza.web.app/">
            https://react-firebase-pizza.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux(thunk), SCSS, TypeScript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pizza.png" alt="Pizza" />
      <WorkImage src="/images/works/pizza2.png" alt="Pizza" />
    </Container>
  </Layout>
)

export default Work
