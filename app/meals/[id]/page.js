import YoutubePlayer from '@/components/media/YoutubePlayer'
import {fetchMealById} from '@/api/api'
import RecipeDetails from '@/components/recipe-details/RecipeDetails'

export default async function Page({params}) {
  const {id} = params

  const meal = await fetchMealById(id)

  return (
    <main>
      <div className='flex flex-row mt-6'>
        {
          !!meal?.strCategory &&
          <div className='flex flex-col me-6'>
            <div className='text-sm font-light border-b border-b-gray-400'>Category</div>
            <div className='text-lg font-bold'>{meal?.strCategory}</div>
          </div>
        }
        {
          !!meal?.strArea &&
          <div className='flex flex-col'>
            <div className='text-sm font-light border-b border-b-gray-400'>Region</div>
            <div className='text-lg font-bold'>{meal?.strArea}</div>
          </div>
        }
      </div>
      <RecipeDetails meal={meal} />
      {
        !!meal?.strYoutube &&
        <div className='max-w-screen-sm'>
          <div className='text-2xl font-thin mb-2'>Watch an Instructional Video</div>
          <YoutubePlayer
            className='relative overflow-hidden'
            style={{paddingBottom: '56.25%'}}
            iframeClassName='overflow-hidden border-none self-center absolute top-0 left-0 w-full h-full'
            title={meal?.strMeal}
            url={meal?.strYoutube}
          />
        </div>
      }
    </main>
  )
}
