import React, { ReactElement, useEffect, useState } from 'react'

import tw from "tailwind-styled-components"

import Layout from '@/components/layouts/Layout'
import BlogDataList from '@/components/page/blog/BlogDataList'
import { BlogArticleList } from '@/components/page/blog/BlogIF'
import Section from '@/components/ui/Section'

import { client } from 'libs/client'


const EMPTY_ARTICLE_LIST: BlogArticleList = {
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: 0
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
    <Section title='Blog'>
      <Container>
        <BlogDataList dataList={articleList} />
      </Container>
    </Section>

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