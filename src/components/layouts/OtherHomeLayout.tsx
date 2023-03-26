import { ReactElement } from "react"

import Footer from "@/components/layouts/Footer"

import OtherHomeHeader from "./OtherHomeHeader"

type OtherHomeLayoutProps = Required<{
  readonly children: ReactElement
}>

export default function HomeLayout({ children }: OtherHomeLayoutProps) {
  return (
    <div className="min-h-screen relative pb-24 box-border">
      <OtherHomeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}