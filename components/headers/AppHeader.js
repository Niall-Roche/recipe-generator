import Link from 'next/link'
import Image from 'next/image'

const AppHeader = () => {
  return (
    <div className='w-100 bg-gray-200 shadow-md py-3 px-5 lg:px-0'>
      <Link className='mx-auto max-w-screen-lg flex flex-row items-center' href='/'>
        <Image src='/knife-fork-icon.png' width={32} height={32} />
        <div className='font-bold text-2xl ms-4'>RECIPE GENERATOR</div>
      </Link>
    </div>
  )
}

export default AppHeader
