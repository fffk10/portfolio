
import { ReactElement } from 'react'

import Head from 'next/head'

import HomeLayout from '@/components/layouts/Layout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}

export default Home