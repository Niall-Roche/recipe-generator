import {MEALS_URL, RECIPES_URL} from '@/constants/urls'
import {NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_BASE_API_URL} from '@/constants/env'

export async function fetchIngredients(query = '') {
  const res = await fetch(`${NEXT_PUBLIC_BASE_API_URL}/api/json/v1/${NEXT_PUBLIC_API_KEY}/list.php?i=list`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const respJson = await res.json()
  //Normalise the data for the list view
  const data = respJson?.meals?.map(meal => ({
    title: meal?.strIngredient,
    imgUrl: `${NEXT_PUBLIC_BASE_API_URL}/images/ingredients/${meal?.strIngredient}-Small.png`,
    to: `${RECIPES_URL}/${meal?.strIngredient}`,
    ...meal,
  }))

  // If there is a query filter the list based on this value
  return (
    !!query
      ? data?.filter(({strIngredient}) => strIngredient?.toLowerCase()?.includes(decodeURIComponent(query)?.toLowerCase()))
      : data
  )
}

export async function fetchRecipes(slug = '') {
  const res = await fetch(`${NEXT_PUBLIC_BASE_API_URL}/api/json/v1/${NEXT_PUBLIC_API_KEY}/filter.php?i=${slug}`)

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
  const res = await fetch(`${NEXT_PUBLIC_BASE_API_URL}/api/json/v1/${NEXT_PUBLIC_API_KEY}/lookup.php?i=${id}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const respJson = await res?.json()
  return respJson?.meals[0]
}
