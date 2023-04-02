import * as React from 'react';

import Link from 'next/link';
import { BsTwitter, BsGithub } from 'react-icons/bs'

const Footer = () => {

  return (
    <footer className="absolute bottom-0 p-4 w-full text-center text-gray-500 bg-slate-800">
      <div className='flex justify-center'>
        <Link
          href='https://twitter.com/w_q_r_q'
          className='px-6 py-4 text-lg'
        >
          <BsTwitter />
        </Link >
        <Link
          href='https://github.com/fffk10'
          className='px-6 py-4 text-lg'
        >
          <BsGithub />
        </Link >
      </div>
      <p>&copy; Copyright 2023 fffk10, All rights reserved.</p>
    </footer>
  );
}

export default Footer;