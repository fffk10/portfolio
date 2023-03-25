import React from 'react'

type Props = {
  title: string
}

const SectionTitle = (props: Props) => {
  return (
    <h1 className='text-2xl text-center px-3 py-6 font-serif'>{props.title}</h1>
  )
}

export default SectionTitle