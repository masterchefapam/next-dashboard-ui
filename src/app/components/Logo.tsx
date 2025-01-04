import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <div className='flex flex-col gap-0'>
        <Link href="/">
        <Image src="/images/logojapanese.png"
           alt="logo" 
           width={96}
           height={22}
           className='
            w-14 lg:w-24 '
           />
        </Link>
       

    <span className='text-xs flex-wrap p-2 font-semibold'>
        Student Managment App
    </span>

           
    </div>
  )
}

export default Logo