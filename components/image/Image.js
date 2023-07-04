'use client'

import {useState} from 'react'
import NextImage from 'next/image'

const Image = ({className, ...rest}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`${loaded ? 'bg-transparent animate-none' : 'bg-gray-200 animate-pulse duration-1000'}`}>
      <NextImage
        className={`transition-opacity duration-200 ${loaded ? 'opacity-1' : 'opacity-0'} ${className}`}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </div>
  )
}

export default Image
