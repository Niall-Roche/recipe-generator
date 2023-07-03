'use client'

import {FaCircleExclamation} from 'react-icons/fa6'

const Error = () => {
  return (
    <div className='flex flex-row flex-nowrap mt-4 text-3xl'>
      <FaCircleExclamation />
      <div className='ms-2'>An error occurred. Please try again.</div>
    </div>
  )
}

export default Error
