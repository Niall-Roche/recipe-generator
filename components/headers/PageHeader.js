'use client'

import {useParams, usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'
import {MEALS_URL, RECIPES_URL} from '@/constants/urls'
import {fetchMealById} from '@/api/api'

const PageHeader = () => {
  const pathname = usePathname()
  const params = useParams()

  const slug = decodeURIComponent(params?.slug)
  const id = params?.id

  const [message, setMessage] = useState('')
  const [detail, setDetail] = useState('')

  useEffect(() => {
    (async () => {
      if (pathname.includes(RECIPES_URL)) {
        setMessage('Viewing recipes for')
        setDetail(slug)
      }
      else if (pathname.includes(MEALS_URL)) {
        const meal = await fetchMealById(id)

        setMessage('Viewing instructions for the meal:')
        setDetail(meal?.strMeal)
      }
    })()
  }, [id, pathname, slug])

  return (
    <div className='font-thin text-2xl'>{message}<span className='font-bold ms-2'>{detail}</span></div>
  )
}

export default PageHeader
