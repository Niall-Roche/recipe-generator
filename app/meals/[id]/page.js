import YoutubePlayer from '@/components/media/YoutubePlayer'
import {fetchMealById} from '@/api/api'

export default async function Page({params}) {
  const {id} = params

  const meal = await fetchMealById(id)

  const renderIngredients = meal => {
    const ingredients = []
    for (let i = 0; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]

      if (!!ingredient && !!measure) ingredients.push(
        <li className='flex'>
          <div className='me-1'>{ingredient}:</div>
          <div>{measure}</div>
        </li>
      )
    }
    return ingredients
  }

  return (
    <main>
      <div>{meal?.strMeal}</div>
      <div>
        <ul>
          {
            renderIngredients(meal)
          }
        </ul>
        <div>
          <h3>Instructions</h3>
          {
            meal?.strInstructions
          }
        </div>
      </div>
      {
        !!meal?.strYoutube &&
        <YoutubePlayer title={meal?.strMeal} url={meal?.strYoutube} />
      }
    </main>
  )
}
