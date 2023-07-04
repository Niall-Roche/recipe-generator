import React from 'react'
import Link from 'next/link'
import Image from '@/components/image/Image'

const LinkCard = ({imgSize = 100, imgUrl, noTilt, text, to}) => {
  return (
    <div className='group overflow-hidden rounded-lg lg:shadow-lg border sm:border-none border-gray-600 hover:shadow-none transition-shadow bg-neutral-100'>
      <Link href={to}>
        <h3 className='text-center font-bold py-2'>{text}</h3>
        <Image
          className={`block h-auto w-auto m-auto p-3 transition-transform duration-300 ease-in-out group-hover:scale-105 ${noTilt ? '' : 'group-hover:rotate-6'}`}
          src={imgUrl}
          height={imgSize}
          width={imgSize}
          alt={text}
        />
      </Link>
    </div>
  )
}

export default LinkCard
