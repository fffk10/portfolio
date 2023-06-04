import { ReactNode } from 'react'

import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

type HomeLayoutProps = Required<{
  readonly children: ReactNode
}>

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className='min-h-screen relative pb-24 box-border'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
