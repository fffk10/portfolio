import React, { useEffect, useState } from 'react'

import tw from "tailwind-styled-components"

import { client } from 'libs/client'

import BlogDataList from './BlogDataList'
import { BlogArticleList } from './BlogIF'

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
    <>
      <Container>
        <BlogDataList dataList={articleList} />
      </Container>
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

export default Blog