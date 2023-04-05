import React, { ReactElement } from 'react'

import tw from 'tailwind-styled-components'

import Layout from '@/components/layouts/Layout'
import Section from '@/components/ui/Section'

const AboutMe = () => {

  return (
    <div>
      <p>
        こんにちは、「わら」と申します！<br />
        普段は一般企業で主にソフトウェアエンジニアとして働いています。<br />
        <br />
      </p>

      <h2>最近ハマっている言語・フレームワーク</h2>
      <ol>
        <li>Typescript</li>
        <li>Solidity</li>
        <li>Kotlin</li>
        <li>React/Next.js</li>
      </ol>
    </div>

  )
}

const About = () => {
  return (
    <Section title='About'>
      <Container>
        <AboutMe />
      </Container>
    </Section>
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