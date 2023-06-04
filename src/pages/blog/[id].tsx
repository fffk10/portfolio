import { ReactElement, useEffect, useState } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import tw from 'tailwind-styled-components'

import Layout from '@/components/layouts/Layout'
import { BlogArticle } from '@/components/page/Blog/BlogIF'
import { BackButton } from '@/components/utils/BackButton'
import ErrorModal from '@/components/utils/ErrorModal'

import styles from '@/styles/blog.module.scss'
import { dateTimeFormat } from '@/utils/dateUtils'
import { client } from 'libs/client'

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
    width: 0,
  },
  category: {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    name: '',
  },
}

const BlogPage = () => {
  const router = useRouter()
  const { id } = router.query // blog article id
  const [article, setArticle] = useState(EMPTY_ARTICLE)

  /** エラーモーダル */
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false)

  /**
   * ブログの記事データを取得
   */
  useEffect(() => {
    id &&
      (async () => {
        try {
          setArticle(await client.get({ endpoint: `blogs/${id}` }))
        } catch (e: any) {
          setOpenErrorModal(true)
        }
      })()
  }, [id])

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta
          name='description'
          content="wara's portfolio page created by nextjs"
        />
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
      <ErrorModal
        open={openErrorModal}
        closeModal={() => setOpenErrorModal(false)}
        error={{
          type: '予期せぬエラー',
          message: '記事の取得に失敗しました',
        }}
      />
    </>
  )
}

/** ====== Blog/[id] styled-components ====== */
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
/** ====== Blog/[id] styled-components ====== */

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default BlogPage
