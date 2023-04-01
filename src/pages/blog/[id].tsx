import { ReactElement, useEffect, useState } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import tw from 'tailwind-styled-components'

import OtherHomeLayout from '@/components/layouts/OtherHomeLayout'
import { BlogArticle } from '@/components/page/Blog/BlogIF'

import { dateTimeFormat } from '@/utils/dateUtils'
import { client } from 'libs/client'
import ErrorModal from '@/components/utils/ErrorModal'
import { ErrorDetail } from '@/types/Error'
import { BackButton } from '@/components/utils/BackButton'
import styles from '@/styles/blog.module.scss'

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

  /** エラーモーダル表示情報 */
  const [error, setError] = useState<ErrorDetail>({
    type: '',
    message: ''
  })

  /**
   * ブログの記事データを取得
   */
  useEffect(() => {
    id && (async () => {
      try {
        setArticle(await client.get({ endpoint: `blogs/${id}` }))
      } catch (e: any) {
        setError({
          type: 'データ取得失敗',
          message: 'ブログの記事取得に失敗しました'
        })
      }
    })()
  }, [id])

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
        <div
          dangerouslySetInnerHTML={{
            __html: `${article.content}`,
          }}
          className={styles.content}
        />

        {/** homeに戻る */}
        <div className='mt-12'>
          <BackButton />
        </div>
      </Container>
      {error.type && <ErrorModal error={error} />}
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
  text-2xl
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