import { useRouter } from 'next/router'
import { IoMdArrowBack } from 'react-icons/io'

export const BackButton = () => {
  const router = useRouter()

  return (
    <>
      <div className='flex h-6 hover:text-gray-500'>
        <IoMdArrowBack className='text-center items-center content-center h-full' />
        <button alia-label="戻る" type="button" className='' onClick={() => router.back()}>
          戻る
        </button>
      </div>
    </>

  )
}