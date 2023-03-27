import fs from 'fs'

import { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'

import matter from 'gray-matter'
import Head from 'next/head'
import remarkGfm from 'remark-gfm'
import tw from 'tailwind-styled-components'

import OtherHomeLayout from '@/components/layouts/OtherHomeLayout'

import styles from '@/styles/md.module.css'

type BlogPageProps = {
  data: MarkdownMetaData
  content: string
}

type MarkdownMetaData = {
  title: string,
  date: string,
  description: string
}

const BlogPage = ({ data, content }: BlogPageProps) => {

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name='description' content="wara's portfolio page created by nextjs" />
      </Head>

      <Container>
        {/** データ部 */}
        <Title>{data.title}</Title>
        <Date>{data.date}</Date>

        {/** 本文 */}
        <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </Container>
    </>
  )
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <OtherHomeLayout>{page}</OtherHomeLayout>
}

export const getStaticPaths = async () => {
  console.log('Start getStaticPaths.')
  const posts = fs.readdirSync('posts')

  const paths = posts.map(post => {
    const path = post.replaceAll(".md", "")
    return { params: { id: path } }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = (context: any) => {
  console.log("Start getStaticProps.")

  const id = context.params.id
  const targetBlogName = fs.readdirSync('posts').find(post => post.match(`${id}.md`))
  console.log('targetBlogName:', targetBlogName)

  const targetBlog = fs.readFileSync(`posts/${targetBlogName}`, 'utf-8')
  const { data, content } = matter(targetBlog)

  console.log("content=" + content)

  return {
    props: {
      data: data,
      content: content
    }
  }
}

const Container = tw.div`
  w-full
  max-w-2xl
  min-w-xs
  m-auto
  p-8
`

const Title = tw.h1`
  text-3xl
  font-serif
  font-bold
  text-center
  mt-8
`

const Date = tw.p`
  text-right
  pb-2
  px-3
  mb-4
  border-b-2
`

export default BlogPage