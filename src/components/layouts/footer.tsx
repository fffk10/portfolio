import Link from 'next/link'
import { BsTwitter, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 p-4 w-full text-center'>
      <div className='flex justify-center'>
        <Link
          href='https://twitter.com/warafffk10'
          className='px-6 py-4 text-lg'
        >
          <BsTwitter />
        </Link>
        <Link href='https://github.com/fffk10' className='px-6 py-4 text-lg'>
          <BsGithub />
        </Link>
      </div>
      <p>&copy; Copyright 2023 fffk10, All rights reserved.</p>
    </footer>
  )
}

export default Footer
