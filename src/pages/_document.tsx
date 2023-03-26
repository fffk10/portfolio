import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name='description' content="wara's portfolio page created by nextjs" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
