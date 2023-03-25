import React, { useState } from 'react'
import BlogDataList from '../atoms/BlogDataList';
import tw from "tailwind-styled-components"

type Blog = {
  title: string,
  views: number,
  content: string
}

const Container = tw.div`
    w-full
    max-w-lg
    min-w-xs
    m-auto
`

const Blog = () => {
  const [blogList, setBlogList] = useState(dummyBlogList)  // TODO 動的にデータをとるように

  return (
    <Container>
      <BlogDataList dataList={blogList} />
    </Container>
  )
}

// TODO 削除
const dummyBlogList: Blog[] = [
  {
    title: "1first post",
    views: 1000,
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "2回目の投稿です",
    views: 300,
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "3long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    views: 1003,
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "4fours post",
    views: 1000000000000,
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "5first post",
    views: 1000,
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "62回目の投稿です",
    views: 300,
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "7long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    views: 1003,
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "8fours post",
    views: 1000000000000,
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "9first post",
    views: 1000,
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "10 2回目の投稿です",
    views: 300,
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "11long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    views: 1003,
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "12fours post",
    views: 1000000000000,
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "13first post",
    views: 1000,
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "14 2回目の投稿です",
    views: 300,
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "15 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    views: 1003,
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "16 fours post",
    views: 1000000000000,
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "17 first post",
    views: 1000,
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "18 2回目の投稿です",
    views: 300,
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "19 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    views: 1003,
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "20 fours post",
    views: 1000000000000,
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "21 first post",
    views: 1000,
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "22 2回目の投稿です",
    views: 300,
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "23 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    views: 1003,
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "24 fours post",
    views: 1000000000000,
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "25 first post",
    views: 1000,
    content: `first post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "26 2回目の投稿です",
    views: 300,
    content: `second post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "27 long long blog title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああああa",
    views: 1003,
    content: `third post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
  {
    title: "28 fours post",
    views: 1000000000000,
    content: `fours post blog.
    second line.
    hogehoge.
    fugafuga.
    `
  },
]

export default Blog