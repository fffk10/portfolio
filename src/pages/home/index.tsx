import Head from 'next/head'

import Blog from '@/components/page/Blog/Blog'
import Contact from '@/components/page/Contact/Contact'
import Portfolio from '@/components/page/Portfolio/Portfolio'
import Section from '@/components/ui/Section'

const Home = (props: any) => {
  console.log('home=', props.posts)
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Section title='Portfolio'><Portfolio /></Section>
      <Section title='Blog'><Blog /></Section>
      <Section title='Contact'><Contact /></Section>
    </>
  )
}

export default Home