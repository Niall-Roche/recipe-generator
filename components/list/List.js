import Image from 'next/image'
import Link from 'next/link'

const List = ({items}) => {
  return (
    <div className='container my-12 mx-auto px-4 md:px-12'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {
          items?.map(({strIngredient}, i) => (
            <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6' key={i}>
              <div className='group overflow-hidden rounded-lg lg:shadow-lg border sm:border-none border-gray-600 hover:shadow-none transition-shadow bg-neutral-100'>
                <Link href={`/recipes/${strIngredient}`}>
                  <h3 className='text-center font-bold'>{strIngredient}</h3>
                  <Image
                    className='block h-auto w-auto m-auto p-3 group-hover:scale-105 group-hover:rotate-6 transition-transform'
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`}
                    height={100}
                    width={100}
                    alt={strIngredient}
                  />
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List
