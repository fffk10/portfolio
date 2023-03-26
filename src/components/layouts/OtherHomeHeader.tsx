import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs'




// TODO commonのファイルを参照する
const navMenu: string[] = [
  'Portfolio',
  'Blog',
  'Contact',
]

const OtherHomeHeader = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex">
          <Link href="/home" className="-m-1.5 p-1.5">
            <Image className="h-8 w-auto" src="/logo.png" alt={'logo'} width={70} height={60} />
          </Link>
        </div>

        <div className='flex'>
          <Link
            href='/home'
            className='px-6 py-3 rounded-md min-h-full text-sm font-semibold leading-6 text-gray-900'
          >Home
          </Link>
          <Link
            href='https://github.com/fffk10'
            className='px-6 py-4 text-lg text-gray-900'
          >
            <BsGithub />
          </Link >
        </div >
      </nav>
    </header>
  )
}

export default OtherHomeHeader;