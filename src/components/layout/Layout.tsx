import Header from "@/components/molecules/Header"
import Footer from "@/components/molecules/Footer"
import { ReactElement } from "react"

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}