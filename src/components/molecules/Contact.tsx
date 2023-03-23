import { SyntheticEvent, useState } from "react"
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
    send()
    event.preventDefault()
    console.log("send")
  }

  return (
    <div className="w-full max-w-lg min-w-xs m-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            氏名
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="氏名"
            onChange={handleOnChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            メールアドレス
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="******@example.com"
            onChange={handleOnChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            件名
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="subject" name="subject" type="text" placeholder="件名"
            onChange={handleOnChange} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            お問い合わせ内容
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" name="content" placeholder="お問い合わせ内容" rows={10}
            onChange={handleOnChange} />
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact