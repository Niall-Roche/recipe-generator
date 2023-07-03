import SearchInput from '@/components/inputs/SearchInput'
import List from '@/components/list/List'

async function fetchIngredients() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await fetchIngredients()

  return (
    <main>
      <section>
        <SearchInput />
      </section>
      <section>
        <List items={data?.meals} />
      </section>
    </main>
  )
}
