import YoutubePlayer from '@/components/media/YoutubePlayer'
import {fetchMealById} from '@/api/api'
import RecipeDetails from '@/components/recipe-details/RecipeDetails'

export default async function Page({params}) {
  const {id} = params

  const meal = await fetchMealById(id)

  return (
    <main>
      <RecipeDetails meal={meal} />
      {
        !!meal?.strYoutube &&
        <div>
          <div className='text-2xl font-thin mb-2'>Watch an Instructional Video</div>
          <YoutubePlayer title={meal?.strMeal} url={meal?.strYoutube} />
        </div>
      }
    </main>
  )
}
