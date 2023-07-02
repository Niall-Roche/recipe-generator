'use client'

import {useParams, useRouter} from 'next/navigation'
import {useState} from 'react'

const SearchInput = () => {
  const {push} = useRouter()
  const params = useParams()

  const [text, setText] = useState(params?.slug)

  const searchText = e => {
    const regex = /[^a-zA-Z]/g
    const text = e?.target?.value?.replace(regex, '')
    setText(text)
    push(text.length > 0 ? `/search/${text}` : '/')
  }

  const clearSearch = () => {
    setText('')
    push('/')
  }

  return (
    <div className='flex flex-nowrap'>
      <input
        autoFocus
        placeholder='Search Ingredients...'
        onChange={searchText}
        value={text}
      />
      <button onClick={clearSearch}>x</button>
    </div>
  )
}

export default SearchInput