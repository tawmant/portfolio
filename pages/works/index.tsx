import { FC, useRef } from 'react'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../../components/UI/section'
import { WorkGridItem } from '../../components/grid-item'

import JVAImage from '/public/images/works/jva-main.png'
import HustleFreeImage from '/public/images/works/hustlefree-main.png'
import KEBEKImage from '/public/images/works/kebek-main.png'

interface IWorksItem {
  title: string
  id: string
  text?: string
  image: string
  delay: number
}

const Index: FC = () => {
  const worksRef = useRef<IWorksItem[]>([
    {
      title: 'JVA',
      id: 'jva',
      image: JVAImage,
      text: 'Finding employees and investors for a startup or business.',
      delay: 0
    },
    {
      title: 'Hustle Free',
      id: 'hustlefree',
      image: HustleFreeImage,
      text: 'Participate in, organize, and oversee competitions.',
      delay: 0
    },
    {
      title: 'KEBEK',
      id: 'kebek',
      image: KEBEKImage,
      text: 'bran order',
      delay: 0.1
    }
  ])

  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {worksRef.current.map(work => (
          <Section delay={work.delay}>
            <WorkGridItem
              id={work.id}
              title={work.title}
              thumbnail={work.image}
            >
              {work.text}
            </WorkGridItem>
          </Section>
        ))}

        {/*<Section delay={0.1}>*/}
        {/*  <WorkGridItem id="food" title="Food" thumbnail={food}>*/}
        {/*    Landing page for ordering healthy food, written without frameworks*/}
        {/*    and libraries on pure JavaScript.*/}
        {/*  </WorkGridItem>*/}
        {/*</Section>*/}
        {/*<Section delay={0.1}>*/}
        {/*  <WorkGridItem*/}
        {/*    id="titan-stroy"*/}
        {/*    title="Titan Stroy"*/}
        {/*    thumbnail={titanStroy}*/}
        {/*  >*/}
        {/*    A page for a construction company.*/}
        {/*  </WorkGridItem>*/}
        {/*</Section>*/}
      </SimpleGrid>
    </Container>
  )
}

export default Index
