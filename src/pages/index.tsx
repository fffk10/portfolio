import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/molecules/Header'
import Footer from '@/components/molecules/Footer'
import Section from '@/components/molecules/Section'
import Portfolio from '@/components/molecules/Portfolio'
import Contact from '@/components/molecules/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content="wara's portfolio page created by nextjs" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main>
        <Section title='Portfolio'><Portfolio /></Section>
        <Section title='News'><Portfolio /></Section>
        <Section title='Contact'><Contact /></Section>
      </main>
      <Footer />
    </>
  )
}
