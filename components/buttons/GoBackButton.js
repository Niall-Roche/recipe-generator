'use client'

import {useRouter} from 'next/navigation'
import {FaArrowLeftLong} from 'react-icons/fa6'

const GoBackButton = () => {
  const {back} = useRouter()

  return (
    <button onClick={back}><FaArrowLeftLong className='h-7 w-7 me-2' /></button>
  )
}

export default GoBackButton
