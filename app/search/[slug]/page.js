import Link from 'next/link'

async function fetchIngredients(query) {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const respJson = await res.json()
  const meals = respJson?.meals?.filter(({strIngredient}) => strIngredient?.toLowerCase()?.includes(query))

  return meals
}

export default async function Page({params}) {
  const slug = params?.slug
  const data = await fetchIngredients(slug)

  return (
    <div>
      {
        data?.map(({strIngredient}, i) => (
          <div key={i}>
            <Link href={`/recipes/${strIngredient}`}>
              {strIngredient}
            </Link>
          </div>
        ))
      }
    </div>
  )
}