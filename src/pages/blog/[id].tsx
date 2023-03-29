
import { ReactElement, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import Head from 'next/head'
import { useRouter } from 'next/router'
import remarkGfm from 'remark-gfm'
import tw from 'tailwind-styled-components'

import OtherHomeLayout from '@/components/layouts/OtherHomeLayout'
import { BlogArticle } from '@/components/page/Blog/BlogIF'

import styles from '@/styles/md.module.css'
import { dateTimeFormat } from '@/utils/dateUtils'
import { client } from 'libs/client'

type BlogPageProps = {
  data: MarkdownMetaData
  content: string
}

type MarkdownMetaData = {
  title: string,
  date: string,
  description: string
}

const EMPTY_ARTICLE: BlogArticle = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  content: '',
  eyecatch: {
    url: '',
    height: 0,
    width: 0
  },
  category: {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    name: ''
  }
}

const BlogPage = () => {
  const router = useRouter()
  const { id } = router.query  // blog article id
  const [article, setArticle] = useState(EMPTY_ARTICLE)

  /**
 * 初回レンダーでブログの記事データを取得
 */
  useEffect(() => {
    (async () => {
      setArticle(await client.get({ endpoint: `blogs/${id}` }))
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name='description' content="wara's portfolio page created by nextjs" />
      </Head>

      <Container>
        {/** データ部 */}
        <Title>{article.title}</Title>
        <Date>{dateTimeFormat(article.publishedAt)}</Date>

        {/** 本文 */}
        <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
      </Container>
    </>
  )
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <OtherHomeLayout>{page}</OtherHomeLayout>
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