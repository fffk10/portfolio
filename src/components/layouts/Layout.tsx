import { ReactElement } from "react"

import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"

type HomeLayoutProps = Required<{
  readonly children: ReactElement
}>

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen relative pb-24 box-border">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}