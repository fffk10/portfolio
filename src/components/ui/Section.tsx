import React, { ReactNode } from 'react'

import SectionTitle from './SectionTitle'

type Props = {
  title: string,
  children: ReactNode
}

const Section = (props: Props) => {
  const { title, children } = props

  return (
    <div id={title} className='py-6 px-10 mb-28'>
      <SectionTitle title={title} />
      {children}
    </div>
  )
}

export default Section