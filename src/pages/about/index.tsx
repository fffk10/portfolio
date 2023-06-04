import React, { ReactElement } from 'react'

import Head from 'next/head'
import tw from 'tailwind-styled-components'

import Layout from '@/components/layouts/layout'
import Section from '@/components/ui/section'

const AboutMe = () => {
  return (
    <div>
      <p>こんにちは、「わら」です</p>

      <br />
      <br />

      <p>一般企業でエンジニアとして働いています。</p>
      <p>最近は、React/Next.js/solidityあたりにハマっています。</p>
      <p>Kotlinも好きです。</p>
    </div>
  )
}

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name='description' content='About me page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section title='About'>
        <Container>
          <AboutMe />
        </Container>
      </Section>
    </>
  )
}

/** ====== About styled-components ====== */
const Container = tw.div`
    w-full
    max-w-lg
    min-w-xs
    m-auto
`
/** ====== About styled-components ====== */

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
