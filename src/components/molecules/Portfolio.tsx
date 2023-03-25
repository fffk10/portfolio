import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Site = {
  imagePath: string,
  pageTitle: string,
  url: string,
  description: string
}

const Portfolio = () => {
  return (
    <div className={styles.container}>
      {portfolioList.map((site: Site) => {
        return (
          <div key={site.pageTitle} className={styles.card}>
            <Link href={site.url}>
              <Image src={site.imagePath} alt={site.pageTitle} width={50} height={50} className={styles.pageIcon} />
              {site.pageTitle}
            </Link>
            <p className={styles.description}>
              {site.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  container: `
    grid 
    gap-4
    px-10
    lg:grid-cols-4
    sm:grid-cols-3
  `,
  card: `
    text-center
  `,
  pageIcon: `
    m-auto
  `,
  description: `
    text-sm
    text-gray-400
    whitespace-pre-wrap	
  `
}

// 作成したサイトリスト
const portfolioList: Site[] = [
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-1',
    url: 'demo-site-1',
    description: "ここがサイトの説明部分です。\nここで改行されます\n数行程度で簡単な説明を記載してください"
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-2',
    url: 'demo-site-2',
    description: 'second site'
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-3',
    url: 'demo-site-3',
    description: 'third site'
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-4',
    url: 'demo-site-5',
    description: 'site'
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-6',
    url: 'demo-site-6',
    description: 'site'
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-7',
    url: 'demo-site-7',
    description: 'site'
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-8',
    url: 'demo-site-8',
    description: 'site'
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-9',
    url: 'demo-site-9',
    description: 'site'
  },
  {
    imagePath: '/portfolio_image/image1.png',
    pageTitle: 'demo-site-10',
    url: 'demo-site-10',
    description: 'site'
  },
]

export default Portfolio