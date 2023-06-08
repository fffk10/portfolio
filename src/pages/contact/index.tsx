import { ReactElement, SyntheticEvent, useRef, useState } from 'react'

import Head from 'next/head'
import tw from 'tailwind-styled-components'

import Layout from '@/components/layouts/layout'
import Section from '@/components/ui/section'
import CommonModal from '@/components/utils/commonModal'
import ErrorModal from '@/components/utils/errorModal'
import Spinner from '@/components/utils/spinner'

import { FormData, useMail } from '@/hooks/useMail'

/** 入力内容初期値 */
const EMPTY_FORM_DATA: FormData = {
  name: '',
  email: '',
  subject: '',
  content: '',
}

/** Contact form page */
const Contact = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM_DATA)
  const { send } = useMail()
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  })

  const [openCommonModal, setOpenCommonModal] = useState<boolean>(false)
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false)

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
  }

  const validate = (formData: FormData): FormData => {
    let errors: FormData = {
      name: '',
      email: '',
      subject: '',
      content: '',
    }

    if (formData.name.length === 0) {
      errors.name = '名前は必須項目です'
    }
    if (formData.email.length === 0) {
      errors.email = 'メールアドレスは必須項目です'
    }
    if (formData.subject.length === 0) {
      errors.subject = '件名は必須項目です'
    }
    if (formData.content.length === 0) {
      errors.content = '本文は必須項目です'
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

    setErrors(() => validate(formData))

    // validate
    if (!isValid()) {
      isLoading.current = false
      return
    }

    setIsSpinner(true)

    // 送信処理
    try {
      await send(formData)
      setOpenCommonModal(true)
    } catch (err) {
      setOpenErrorModal(true)
    }

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
        <meta name='description' content='contact form page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section title='Contact'>
        <Container>
          <Form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <FormLabel htmlFor='name'>氏名</FormLabel>
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <FormInput
                id='name'
                name='name'
                type='text'
                placeholder='氏名'
                onChange={handleOnChange}
              />
            </div>
            <div className='mb-4'>
              <FormLabel htmlFor='email'>メールアドレス</FormLabel>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <FormInput
                id='email'
                name='email'
                type='email'
                placeholder='******@example.com'
                onChange={handleOnChange}
              />
            </div>
            <div className='mb-4'>
              <FormLabel htmlFor='subject'>件名</FormLabel>
              {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
              <FormInput
                id='subject'
                name='subject'
                type='text'
                placeholder='件名'
                onChange={handleOnChange}
              />
            </div>
            <div className='mb-6'>
              <FormLabel htmlFor='email'>お問い合わせ内容</FormLabel>
              {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
              <FormTextArea
                id='email'
                name='content'
                placeholder='お問い合わせ内容'
                rows={10}
                onChange={handleOnChange}
              />
            </div>
            <div className='flex items-center justify-end'>
              <button type='submit' className='sendBtn'>
                送信
              </button>
            </div>
          </Form>
        </Container>
        {isSpinner && <Spinner />}
        <CommonModal
          open={openCommonModal}
          closeModal={() => setOpenCommonModal(false)}
          text='正常にメールが送信されました'
        />
        <ErrorModal
          open={openErrorModal}
          closeModal={() => setOpenErrorModal(false)}
          error={{
            type: '予期せぬエラー',
            message: 'メール送信の送信に失敗しました',
          }}
        />
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
