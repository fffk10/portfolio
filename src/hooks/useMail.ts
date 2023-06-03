export type FormData = {
  name: string
  email: string
  subject: string
  content: string
}

/** Custom hook for send mail. */
export const useMail = () => {
  const send = async (formData: FormData) => {
    if (!formData) return

    return await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`)
        }
      })
      .catch((err) => {
        throw err
      })
  }

  return {
    send,
  }
}
