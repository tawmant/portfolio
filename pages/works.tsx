import React from 'react'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/UI/section'
import { WorkGridItem } from '../components/grid-item'

import pizza from '../public/images/works/pizza.png'
import techaim from '../public/images/works/techaim.png'
import titanStroy from '../public/images/works/titan-stroy.png'
import food from '../public/images/works/food.png'

const Works: React.FC = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="pizza" title="Pizza" thumbnail={pizza}>
            Pizza ordering app, written in: React, Redux, SCSS, TypeScript.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="techaim" title="Techaim" thumbnail={techaim}>
            The TechAim Foundation makes the world of Technology and STEAM open
            and accessible to girls and women in Kyrgyzstan and Central Asia.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="titanStroy"
            title="Titan Stroy"
            thumbnail={titanStroy}
          >
            A page for a construction company.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="food" title="Food" thumbnail={food}>
            Landing page for ordering healthy food, written without frameworks
            and libraries on pure JavaScript.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
