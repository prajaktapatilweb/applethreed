import { navLists } from '@components/constants'
import { appleImg, bagImg, searchImg } from '@components/utils'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header className='w-full py-10 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
          <Image src={appleImg} alt='apple' width={14} height={18}></Image>
          <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((nav,i) =>(
              <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                {nav}
                </div>
            ))}
          </div>
          <div className='flex gap-7 items-baseline max-sm:justify-end mx-sm:fex-1'>
            <Image src={searchImg} alt='search' width={18} height={18}></Image>
            <Image src={bagImg} alt='buy' width={18} height={18}></Image>

          </div>
        </nav>
      </header>
    </div>
  )
}
