'use client'

import {useRouter} from 'next/navigation'
import {FaArrowLeftLong} from 'react-icons/fa6'

const GoBackButton = () => {
  const {back} = useRouter()

  return (
    <button id='back-button' className='me-2' onClick={back}><FaArrowLeftLong className='h-7 w-7 transition transform hover:scale-110' /></button>
  )
}

export default GoBackButton
