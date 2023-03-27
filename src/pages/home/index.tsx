import fs from 'fs'

import { ReactElement } from 'react'

import matter from 'gray-matter'
import Head from 'next/head'

import HomeLayout from '@/components/layouts/HomeLayout'
import Blog, { BlogArticle } from '@/components/page/Blog/Blog'
import Contact from '@/components/page/Contact/Contact'
import Portfolio from '@/components/page/Portfolio/Portfolio'
import Section from '@/components/ui/Section'

type HomeProps = {
  articleList: BlogArticle[]
}

const Home = ({ articleList }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Section title='Portfolio'><Portfolio /></Section>
      <Section title='Blog'><Blog articleList={articleList} /></Section>
      <Section title='Contact'><Contact /></Section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}

export const getStaticProps = () => {
  console.log("Start getStaticProps.")
  const resultArticleList: BlogArticle[] = []

  const posts = fs.readdirSync('posts')
  posts.map(post => {
    const { data, content } = matter(fs.readFileSync(`posts/${post}`, 'utf-8'))
    resultArticleList.push({
      title: data.title,
      date: data.date,
      content: content
    })
  })

  return {
    props: {
      articleList: resultArticleList
    }
  }
}

export default Home