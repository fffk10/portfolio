import React, { ReactNode } from 'react'
import SectionTitle from '../atoms/SectionTitle'

type Props = {
  title: string,
  children: ReactNode
}

const Section = (props: Props) => {
  return (
    <div className='py-6 px-10 mb-28'>
      <SectionTitle title={props.title} />
      {props.children}
    </div>
  )
}

export default Section