import Image from '@/components/image/Image'
import Link from 'next/link'
import BackToTopButton from '@/components/buttons/BackToTopButton'

const List = props => {
  const {
    cols = 6,
    items,
    imgSize = 100,
    noTilt = false,
  } = props

  return (
    <>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {
          items?.map(({imgUrl, title, to}, i) => (
            <div className={`my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/${cols}`} key={i}>
              <div className='group overflow-hidden rounded-lg lg:shadow-lg border sm:border-none border-gray-600 hover:shadow-none transition-shadow bg-neutral-100'>
                <Link href={to}>
                  <h3 className='text-center font-bold py-2'>{title}</h3>
                  <Image
                    className={`block h-auto w-auto m-auto p-3 group-hover:scale-105 transition-transform ${noTilt ? '' : 'group-hover:rotate-6'}`}
                    src={imgUrl}
                    height={imgSize}
                    width={imgSize}
                    alt={title}
                  />
                </Link>
              </div>
            </div>
          ))
        }
      </div>
      <BackToTopButton />
    </>
  )
}

export default List
