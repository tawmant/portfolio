import React, { useRef } from 'react'
import WorkItem, {
  IWorkItem
} from '../../components/pages-components/work-item'

const JVA = () => {
  const dataRef = useRef<IWorkItem>({
    title: 'JVA',
    text: 'A multi-lingual platform for finding employees and investors for startups and businesses.',
    link: 'https://main.jva.vc',
    stack: [
      'NextJS',
      'ReactJS',
      'Typescript',
      'Redux',
      'Formik / Yup',
      'date-fns',
      'Mui',
      'styled-components',
      'i18next'
    ],
    images: [
      {
        link: '/images/works/jva-main.png',
        alt: 'main page'
      },
      {
        link: '/images/works/jva-user-profile.png',
        alt: 'user profile page'
      },
      {
        link: '/images/works/jva-edit-user.png',
        alt: 'edit user profile page'
      },
      {
        link: '/images/works/jva-calendar.png',
        alt: 'calendar page'
      }
    ]
  })
  return <WorkItem data={dataRef.current} />
}

export default JVA
