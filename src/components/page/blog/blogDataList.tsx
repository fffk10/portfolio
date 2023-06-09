import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

import Link from 'next/link'
import tw from 'tailwind-styled-components'

import { dateTimeFormat } from '@/utils/dateUtils'

import { BlogArticleList } from './blogIF'

type BlogDataListProps = {
  dataList: BlogArticleList
}

/** ====== Pager setting constants ====== */
/** ページネーション1ページの最大表示 */
const CONTENT_LENGTH_ONE_PAGE = 7
/** 終端に表示するページ数 */
const LAST_DISPLAY_SIZE = 1
/** 選択位置から表示するページ数 */
const AROUND_DISPLAY_PAGES = 4

const BlogDataList = (props: BlogDataListProps) => {
  const { dataList } = props
  const [currentPager, setCurrentPager] = useState(1)

  /** ページネーション */
  const handlePaginate = (selectedItem: { selected: number }) => {
    setCurrentPager(selectedItem.selected + 1) // クリックしたページの数-1がselectedに入っている
  }
  return (
    <>
      {/** DataList */}
      <ListContainer className='grid gap-4'>
        {dataList.contents
          .slice(
            (currentPager - 1) * CONTENT_LENGTH_ONE_PAGE,
            currentPager * CONTENT_LENGTH_ONE_PAGE
          )
          .map((data: any) => {
            return (
              <div key={data.id}>
                <Link href={`blog/${data.id}`}>
                  <Title>{data.title}</Title>
                  <PublishedAt>{dateTimeFormat(data.publishedAt)}</PublishedAt>
                </Link>
              </div>
            )
          })}
      </ListContainer>

      {/** Pager */}
      <ReactPaginate
        pageCount={Math.ceil(dataList.totalCount / CONTENT_LENGTH_ONE_PAGE)}
        marginPagesDisplayed={LAST_DISPLAY_SIZE}
        pageRangeDisplayed={AROUND_DISPLAY_PAGES}
        onPageChange={handlePaginate}
        containerClassName={pagerStyles.pagination}
        pageClassName={pagerStyles.pageItem}
        activeClassName={pagerStyles.active}
        previousLinkClassName={pagerStyles.previousLink}
        nextLinkClassName={pagerStyles.nextLink}
        breakClassName={pagerStyles.break}
        previousLabel={<span>«</span>}
        nextLabel={<span>»</span>}
      />
    </>
  )
}

/** ====== DataList styled-components ====== */
const ListContainer = tw.div`
  grid 
  gap-4
`
const Title = tw.h2`
  break-all
  max-w-lg
`

const PublishedAt = tw.span`
  text-sm
  text-gray-600
`
/** ====== DataList styled-components ====== */

/** Pager style */
const pagerStyles = {
  pagination: `
    flex
    items-center
    justify-end
  `,
  pageItem: `
    w-3
    h-10
    text-gray-500 
    hover:text-blue-600 
    p-3
    inline-flex 
    items-center 
    text-sm 
    font-medium 
    rounded-full"
  `,
  previousLink: `
    text-gray-500 
    hover:text-blue-600 
    p-4 
    inline-flex 
    items-center 
    gap-2 
    rounded-md
  `,
  nextLink: `
    text-gray-500 
    hover:text-blue-600 
    p-4 
    inline-flex 
    items-center 
    rounded-md
  `,
  active: `
    w-3
    h-10
    text-blue-600 
    p-3
    inline-flex 
    items-center 
    text-sm 
    font-medium 
    rounded-full"
  `,
  break: `
    text-gray-500 
    inline-flex 
    items-center
    p-1
    rounded-md
  `,
}

export default BlogDataList
