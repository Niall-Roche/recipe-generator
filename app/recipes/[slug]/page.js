import Link from 'next/link'

async function fetchRecipes(slug) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${slug}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({params}) {
  const {slug} = params

  const data = await fetchRecipes(slug)

  return (
    <main>
      {
        data?.meals?.map(({idMeal, strMeal}, i) => (
          <div key={i}>
            <Link href={`/meals/${idMeal}`}>
              {strMeal}
            </Link>
          </div>
        ))
      }
    </main>
  )
}