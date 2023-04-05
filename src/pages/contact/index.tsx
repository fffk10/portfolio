import { ReactElement, SyntheticEvent } from "react"

import tw from 'tailwind-styled-components'

import Layout from "@/components/layouts/Layout"
import Section from "@/components/ui/Section"

import { useMail } from "@/hooks/useMail"

/** Contact form page */
const Contact = () => {
  const { setFormData, send } = useMail()

  const handleOnChange = (event: any) => {
    const { name, value } = event.target
    const change = {
      [name]: value,
    }
    setFormData((p) => { return { ...p, ...change } })
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    send()
  }

  return (
    <Section title='Contact'>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormLabel htmlFor="name">
              氏名
            </FormLabel>
            <FormInput id="name" name="name" type="text" placeholder="氏名"
              onChange={handleOnChange} />
          </div>
          <div className="mb-4">
            <FormLabel htmlFor="email">
              メールアドレス
            </FormLabel>
            <FormInput id="email" name="email" type="email" placeholder="******@example.com"
              onChange={handleOnChange} />
          </div>
          <div className="mb-4">
            <FormLabel htmlFor="subject">
              件名
            </FormLabel>
            <FormInput id="subject" name="subject" type="text" placeholder="件名"
              onChange={handleOnChange} />
          </div>
          <div className="mb-6">
            <FormLabel htmlFor="email">
              お問い合わせ内容
            </FormLabel>
            <FormTextArea id="email" name="content" placeholder="お問い合わせ内容" rows={10}
              onChange={handleOnChange} />
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" className="sendBtn">
              送信
            </button>
          </div>
        </Form>
      </Container>
    </Section>
  )
}

/** ====== Contact styled-components ====== */
const Container = tw.div`
  w-full
  max-w-lg
  min-w-xs
  m-auto
`

const Form = tw.form`
  rounded
  px-8
  pt-6
  pb-8
  mb-4
`

const FormInput = tw.input`
  shadow 
  appearance-none 
  border
  rounded 
  w-full 
  py-2 
  px-3 
  mb-3 
  leading-tight 
  focus:outline-none 
  focus:shadow-outline
`

const FormTextArea = tw.textarea`
  shadow 
  appearance-none 
  border 
  rounded 
  w-full 
  py-2 
  px-3 
  mb-3 
  leading-tight 
  focus:outline-none 
  focus:shadow-outline
`

const FormLabel = tw.label`
  block 
  text-sm 
  font-bold 
  mb-2
`
/** ====== Contact styled-components ====== */

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact