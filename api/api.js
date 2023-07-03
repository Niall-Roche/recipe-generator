import {MEALS_URL, RECIPES_URL} from '@/constants/urls'

export async function fetchIngredients(query = '') {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const respJson = await res.json()
  //Normalise the data for the list view
  const data = respJson?.meals?.map(meal => ({
    title: meal?.strIngredient,
    imgUrl: `https://www.themealdb.com/images/ingredients/${meal?.strIngredient}-Small.png`,
    to: `${RECIPES_URL}/${meal?.strIngredient}`,
    ...meal,
  }))

  return (
    !!query
      ? data?.filter(({strIngredient}) => strIngredient?.toLowerCase()?.includes(query))
      : data
  )
}

export async function fetchRecipes(slug = '') {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${slug}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const respJson = await res.json()
  //Normalise the data for the list view
  return respJson?.meals?.map(meal => ({
    title: meal?.strMeal,
    imgUrl: meal?.strMealThumb,
    to: `${MEALS_URL}/${meal?.idMeal}`,
    ...meal,
  }))
}

export async function fetchMealById(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const respJson = await res?.json()
  return respJson?.meals[0]
}
