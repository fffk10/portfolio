import React, { ReactElement } from 'react'

import Head from 'next/head'
import tw from 'tailwind-styled-components'

import Layout from '@/components/layouts/layout'
import Section from '@/components/ui/section'

type Site = {
  imagePath: string
  pageTitle: string
  url: string
  description: string
}

const Portfolio = () => {
  return (
    // <Container>
    //   {portfolioList.map((site: Site) => {
    //     return (
    //       <Site key={site.pageTitle}>
    //         <Link href={site.url}>
    //           <Image src={site.imagePath} alt={site.pageTitle} width={50} height={50} className="m-auto" />
    //           {site.pageTitle}
    //         </Link>
    //         <SiteDescription>
    //           {site.description}
    //         </SiteDescription>
    //       </Site>
    //     )
    //   })}
    // </Container>

    // TODO ポートフォリオがない
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='portfolio page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section title='Portfolio'>
        <NoContentContainer>
          <NoContent>Coming soon...</NoContent>
        </NoContentContainer>
      </Section>
    </>
  )
}

/** ====== Portfolio styled-components ====== */
const Container = tw.div`
  grid 
  gap-4
  px-10
  lg:grid-cols-4
  sm:grid-cols-3
`

const Site = tw.div`
  text-center
`

const SiteDescription = tw.p`
  text-sm
  text-gray-400
  whitespace-pre-wrap	
`

const NoContentContainer = tw.div`
  px-10
  mt-8
`

const NoContent = tw.h1`
  text-4xl
  w-full
  text-center
`
/** ====== Portfolio styled-components ====== */

// TODO 削除 作成したサイトリスト(dummy)
const portfolioList: Site[] = [
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-1',
    url: 'demo-site-1',
    description:
      'ここがサイトの説明部分です。\nここで改行されます\n数行程度で簡単な説明を記載してください',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-2',
    url: 'demo-site-2',
    description: 'second site',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-3',
    url: 'demo-site-3',
    description: 'third site',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-4',
    url: 'demo-site-5',
    description: 'site',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-6',
    url: 'demo-site-6',
    description: 'site',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-7',
    url: 'demo-site-7',
    description: 'site',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-8',
    url: 'demo-site-8',
    description: 'site',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-9',
    url: 'demo-site-9',
    description: 'site',
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-10',
    url: 'demo-site-10',
    description: 'site',
  },
]

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Portfolio
