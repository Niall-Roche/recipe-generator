import Image from 'next/image'
import Link from 'next/link'

const List = ({items}) => {
  return (
    <div className='grid grid-cols-5'>
      {
        items?.map(({strIngredient}, i) => (
          <div className='flex flex-col items-center content-center h-auto max-w-full rounded-lg bg-stone-400 m-3 w-99 h-99 overflow-hidden' key={i}>
            <Link href={`/recipes/${strIngredient}`}>
              <h3 className='text-center'>{strIngredient}</h3>
              <Image
                src={`https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`}
                height={100}
                width={100}
                alt={strIngredient}
              />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default List