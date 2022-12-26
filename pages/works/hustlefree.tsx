import React, { useRef } from 'react'
import WorkItem, {
  IWorkItem
} from '../../components/pages-components/work-item'

const HustleFree = () => {
  const dataRef = useRef<IWorkItem>({
    title: 'Hustle Free',
    link: 'https://hustlefree.pro',
    text: 'On this platform you can participate, organize and monitor competitions, as well as it is multilingual',
    stack: [
      'NextJS',
      'ReactJS',
      'Redux',
      'Formik / Yup',
      'Mui',
      'styled-components',
      'i18next'
    ],
    images: [
      {
        link: '/images/works/hustlefree-main.png',
        alt: 'main page'
      },
      {
        link: '/images/works/hustlefree-community.png',
        alt: 'community page'
      }
    ]
  })
  return <WorkItem data={dataRef.current} />
}

export default HustleFree
