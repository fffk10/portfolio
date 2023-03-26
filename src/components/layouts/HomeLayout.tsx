import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import { ReactElement } from "react"

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