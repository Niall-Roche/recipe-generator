'use client'

import {useParams, useRouter} from 'next/navigation'
import {useState} from 'react'
import {FaMagnifyingGlass, FaXmark} from 'react-icons/fa6'
import {SEARCH_URL} from '@/constants/urls'

const SearchInput = () => {
  const {push} = useRouter()
  const params = useParams()

  const [text, setText] = useState(params?.slug)

  const searchText = e => {
    const regex = /[^a-zA-Z]/g
    const text = e?.target?.value?.replace(regex, '')
    setText(text)
    push(text.length > 0 ? `${SEARCH_URL}/${text}` : '/')
  }

  const clearSearch = () => {
    setText('')
    push('/')
  }

  return (
    <div className='flex border-2 rounded'>
      <div className='flex items-center justify-center px-4 border-r'>
        <FaMagnifyingGlass />
      </div>
      <input
        autoFocus
        className='px-4 py-2 flex-1 focus:outline-none'
        placeholder='Search Ingredients...'
        onChange={searchText}
        value={text || ''}
      />
      <button
        id='clear-search'
        disabled={!text}
        className={`px-3 ${!text ? 'opacity-30' : 'opacity-1'}`}
        onClick={clearSearch}>
        <FaXmark />
      </button>
    </div>
  )
}

export default SearchInput
