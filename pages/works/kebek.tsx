import React, { useRef } from 'react'
import WorkItem, {
  IWorkItem
} from '../../components/pages-components/work-item'

const KEBEK = () => {
  const dataRef = useRef<IWorkItem>({
    title: 'KEBEK',
    text: 'Application for the purchase of bran from the mill',
    link: 'https://kebek.kz',
    stack: [
      'NextJS',
      'ReactJS',
      'Typescript',
      'Redux',
      'Formik / Yup',
      'Mui',
      'scss',
      'i18next'
    ],
    images: [
      {
        link: '/images/works/kebek-main.png',
        alt: 'main page'
      },
      {
        link: '/images/works/kebek-cart.png',
        alt: 'cart page'
      }
    ]
  })
  return <WorkItem data={dataRef.current} />
}

export default KEBEK
