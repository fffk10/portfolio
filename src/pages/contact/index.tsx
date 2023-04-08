import { ReactElement, SyntheticEvent, useRef, useState } from "react"

import Head from 'next/head'
import tw from 'tailwind-styled-components'

import Layout from "@/components/layouts/Layout"
import Section from "@/components/ui/Section"
import Spinner from "@/components/utils/Spinner"

import { FormData, useMail } from "@/hooks/useMail"

/** Contact form page */
const Contact = () => {
  const { setFormData, send } = useMail()
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  })

  const isEdit = useRef(false)

  // お問い合わせ送信時のスピナー
  const [isSpinner, setIsSpinner] = useState(false)

  const isLoading = useRef(false)

  /**
   * 入力時のハンドラ
   * @param event 
   */
  const handleOnChange = (event: any) => {
    isEdit.current = true
    const { name, value } = event.target
    const change = {
      [name]: value,
    }
    let updateFormData: FormData
    setFormData((p) => {
      updateFormData = { ...p, ...change }
      return updateFormData
    })
    setErrors(() => validate(updateFormData))
  }

  const validate = (formData: FormData): FormData => {
    let errors: FormData = {
      name: '',
      email: '',
      subject: '',
      content: '',
    }

    if (formData.name.length === 0) {
      errors.name = "名前は必須項目です"
    }
    if (formData.email.length === 0) {
      errors.email = "メールアドレスは必須項目です"
    }
    if (formData.subject.length === 0) {
      errors.subject = "件名は必須項目です"
    }
    if (formData.content.length === 0) {
      errors.content = "本文は必須項目です"
    }
    return errors
  }

  /**
   * 送信ボタン押下時のハンドラ
   * バリデートに失敗したら送信しない
   * 
   * @param event 
   * @returns 
   */
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    if (isLoading.current) return
    isLoading.current = true

    // validate
    if (!isValid()) return

    setIsSpinner(true)

    // 送信処理
    await send()

    setIsSpinner(false)

    isLoading.current = false
  }

  /**
   * 必須項目が入力されているか
   * @returns 
   */
  const isValid = () => {
    return (
      isEdit.current &&
      errors.name.length === 0 &&
      errors.email.length === 0 &&
      errors.subject.length === 0 &&
      errors.content.length === 0
    )
  }

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name='description' content="contact form page" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section title='Contact'>
        <Container>
          <Form onSubmit={handleSubmit}>
            <div className="mb-4">
              <FormLabel htmlFor="name">氏名</FormLabel>
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <FormInput id="name" name="name" type="text" placeholder="氏名"
                onChange={handleOnChange} />
            </div>
            <div className="mb-4">
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <FormInput id="email" name="email" type="email" placeholder="******@example.com"
                onChange={handleOnChange} />
            </div>
            <div className="mb-4">
              <FormLabel htmlFor="subject">件名</FormLabel>
              {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
              <FormInput id="subject" name="subject" type="text" placeholder="件名"
                onChange={handleOnChange} />
            </div>
            <div className="mb-6">
              <FormLabel htmlFor="email">お問い合わせ内容</FormLabel>
              {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
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
        {isSpinner && <Spinner />}
      </Section>
    </>
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

const ErrorMessage = tw.div`
  text-red-600
  text-sm
  font-bold
  mb-2
`
/** ====== Contact styled-components ====== */

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact