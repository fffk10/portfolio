import { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { BsTwitter, BsGithub } from 'react-icons/bs'


// TODO commonのファイルを参照する
const navMenu: string[] = [
  'Portfolio',
  'Blog',
  'Contact',
]

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex">
          <Link href="/home" className="-m-1.5 p-1.5">
            <Image className="h-8 w-auto" src="/logo.png" alt={'logo'} width={70} height={60} />
          </Link>
        </div>

        {/** pc menu */}
        <div className='hidden lg:flex'>
          {
            navMenu.map(item => (
              <AnchorLink key={item}
                href={`#${item}`}
                className={'px-6 py-3 rounded-md min-h-full text-sm font-semibold leading-6 text-gray-900'}
              > {item}</AnchorLink>
            ))
          }
          <Link
            href='https://github.com/fffk10'
            className='px-6 py-4 text-lg text-gray-900'
          >
            <BsGithub />
          </Link >
        </div >

        {/** humberger menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center er rounded-md p-2.5 text-gray-700"
            onClick={() => setOpenMobileMenu(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/** open mobile menu */}
      <Dialog as="div" className="lg:hidden" open={openMobileMenu} onClose={setOpenMobileMenu}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image className="h-8 w-auto" src="/logo.png" alt={'logo'} width={70} height={60} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setOpenMobileMenu(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {
                  navMenu.map(item => (
                    <AnchorLink key={item}
                      onClick={() => setOpenMobileMenu(false)}
                      href={`#${item}`}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    > {item}</AnchorLink>
                  ))
                }
              </div>

              {/** sns link */}
              <div className="py-6 flex justify-end">
                <Link
                  href='https://twitter.com/w_q_r_q'
                  className="block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <BsTwitter />
                </Link >
                <Link
                  href='https://github.com/fffk10'
                  className="block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <BsGithub />
                </Link >
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header;