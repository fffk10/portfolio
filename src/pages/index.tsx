import Head from 'next/head'
import Section from '@/components/molecules/Section'
import Portfolio from '@/components/molecules/Portfolio'
import Contact from '@/components/molecules/Contact'
import Layout from '@/components/layout/Layout'
import Blog from '@/components/molecules/Blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content="wara's portfolio page created by nextjs" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <>
          <Section title='Portfolio'><Portfolio /></Section>
          <Section title='Blog'><Blog /></Section>
          <Section title='Contact'><Contact /></Section>
        </>
      </Layout>
    </>
  )
}
