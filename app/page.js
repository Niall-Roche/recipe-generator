import SearchInput from '@/components/inputs/SearchInput'
import {fetchIngredients} from '@/api/api'
import IngredientList from '@/components/list/IngredientList'

export default async function Page() {
  const data = await fetchIngredients()

  return (
    <main>
      <section>
        <SearchInput />
      </section>
      <section>
        <IngredientList items={data} />
      </section>
    </main>
  )
}
