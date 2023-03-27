import React, { useState } from 'react'

import tw from "tailwind-styled-components"

import BlogDataList from './BlogDataList'

export type BlogArticle = {
  title: string,
  date: string,
  content: string
}

type BlogProps = {
  articleList: BlogArticle[]
}

const Blog = ({ articleList }: BlogProps) => {
  const [viewArticleList, setViewArticleList] = useState(articleList)

  return (
    <>
      <Container>
        <BlogDataList dataList={viewArticleList} />
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


// TODO 削除
const dummyBlogList: BlogArticle[] = [
  {
    title: "first-post",
    date: '2022-07-13',
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "2回目の投稿です",
    date: '2022-07-13',
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "3long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    date: '2022-07-13',
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "4fours post",
    date: '2022-07-13',
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "5first post",
    date: '2022-07-13',
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "62回目の投稿です",
    date: '2022-07-13',
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "7long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    date: '2022-07-13',
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "8fours post",
    date: '2022-07-13',
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "9first post",
    date: '2022-07-13',
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "10 2回目の投稿です",
    date: '2022-07-13',
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "11long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    date: '2022-07-13',
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "12fours post",
    date: '2022-07-13',
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "13first post",
    date: '2022-07-13',
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "14 2回目の投稿です",
    date: '2022-07-13',
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "15 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    date: '2022-07-13',
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "16 fours post",
    date: '2022-07-13',
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "17 first post",
    date: '2022-07-13',
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "18 2回目の投稿です",
    date: '2022-07-13',
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "19 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    date: '2022-07-13',
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "20 fours post",
    date: '2022-07-13',
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "21 first post",
    date: '2022-07-13',
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "22 2回目の投稿です",
    date: '2022-07-13',
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "23 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    date: '2022-07-13',
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "24 fours post",
    date: '2022-07-13',
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "25 first post",
    date: '2022-07-13',
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "26 2回目の投稿です",
    date: '2022-07-13',
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "27 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    date: '2022-07-13',
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "28 fours post",
    date: '2022-07-13',
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
]

export default Blog