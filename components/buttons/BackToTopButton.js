'use client'

import React, {useEffect, useState} from 'react'
import {FaChevronUp} from 'react-icons/fa6'

const BackToTopButton = _ => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      }
      else if (scrolled <= 300) {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => window.scrollTo(
    {
      top: 0,
      behavior: 'smooth',
    }
  )

  return (
    <button
      disabled={!visible}
      className={`rounded-full border-2 border-gray-200 hover:border-gray-600 p-3 fixed bottom-10 right-10 z-99 transition:block transition-colors:border duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}>
      <FaChevronUp />
    </button>
  )
}

export default BackToTopButton
