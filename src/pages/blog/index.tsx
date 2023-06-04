import React, { ReactElement, useEffect, useState } from 'react'

import Head from 'next/head'
import tw from 'tailwind-styled-components'

import Layout from '@/components/layouts/layout'
import BlogDataList from '@/components/page/Blog/blogDataList'
import { BlogArticleList } from '@/components/page/Blog/blogIF'
import Section from '@/components/ui/section'

import { client } from 'libs/client'

const EMPTY_ARTICLE_LIST: BlogArticleList = {
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: 0,
}

const Blog = () => {
  const [articleList, setArticleList] = useState(EMPTY_ARTICLE_LIST)

  /**
   * 初回レンダーでブログの記事リストデータを取得
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await client.get({ endpoint: 'blogs' })
      console.log(`res=${JSON.stringify(res)}`)
      setArticleList(res)
    }

    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name='description' content='Blog page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section title='Blog'>
        <Container>
          {/** 記事一覧 */}
          <BlogDataList dataList={articleList} />
          {/** カテゴリリスト */}
        </Container>
      </Section>
    </>
  )
}

/** ====== Blog styled-components ====== */

const Container = tw.div`
    w-full
    max-w-lg
    min-w-xs
    m-auto
`
/** ====== Blog styled-components ====== */

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Blog
