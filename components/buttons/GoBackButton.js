'use client'

import {useRouter} from 'next/navigation'

const GoBackButton = () => {
  const {back} = useRouter()

  return (
    <button onClick={back}>Go Back</button>
  )
}

export default GoBackButton