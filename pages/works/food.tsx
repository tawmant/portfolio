import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/UI/paragraph'

const Work = () => (
  <Layout title="Pizza">
    <Container>
      <Title>Healthy food</Title>
      <P>
        Landing page for ordering healthy food, written in pure javascript:
        slider, tabs, calculator, timer and dynamic layout.
        <Text color="red">*no adaptive.</Text>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tawmant.github.io/Food/">
            https://tawmant.github.io/Food/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Webpack</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/food.png" alt="Food" />
      <WorkImage src="/images/works/food2.png" alt="Food" />
      <WorkImage src="/images/works/food3.png" alt="Food" />
      <WorkImage src="/images/works/food4.png" alt="Food" />
    </Container>
  </Layout>
)

export default Work
