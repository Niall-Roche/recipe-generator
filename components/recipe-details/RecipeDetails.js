'use client'

import {useState} from 'react'

const INGREDIENT_KEY = 'ingredient'
const INSTRUCTIONS_KEY = 'instructions'

const RecipeDetails = ({meal}) => {
  const [activeKey, setActiveKey] = useState(INGREDIENT_KEY)

  const renderIngredients = meal => {
    const ingredients = []
    for (let i = 0; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]

      if (!!ingredient && !!measure) ingredients.push(
        <li className='flex'>
          <div className='me-1 text-xl font-bold'>{ingredient}:</div>
          <div className='text-xl font-light'>{measure}</div>
        </li>
      )
    }
    return ingredients
  }

  return (
    <div>
      <div className='flex flex-row my-3'>
        <button
          onClick={() => setActiveKey(INGREDIENT_KEY)}
          className={`text-2xl p-2 me-2 border-b ${activeKey === INGREDIENT_KEY ? 'border-b-blue-500' : 'border-b-transparent'} transition-border duration-200`}>
          Ingredients
        </button>
        <button
          onClick={() => setActiveKey(INSTRUCTIONS_KEY)}
          className={`text-2xl p-2 border-b ${activeKey === INSTRUCTIONS_KEY ? 'border-b-blue-500' : 'border-b-transparent'} transition-border duration-200`}>
          Instructions
        </button>
      </div>
      <div className='my-6'>
        {
          activeKey === INGREDIENT_KEY
            ? (
              <ul>
                {
                  renderIngredients(meal)
                }
              </ul>
            )
            : (
              <div className='text-xl font-light'>
                {
                  meal?.strInstructions
                }
              </div>
            )
        }
      </div>
    </div>
  )
}

export default RecipeDetails
