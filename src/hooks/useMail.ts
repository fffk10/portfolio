import { useState } from 'react'

export type FormData = {
  name: string
  email: string
  subject: string
  content: string
}

const EMPTY_FORM_DATA: FormData = {
  name: '',
  email: '',
  subject: '',
  content: '',
}

/** Custom hook for send mail. */
export const useMail = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM_DATA)

  const send = async () => {
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }

  return {
    setFormData,
    send,
  }
}
