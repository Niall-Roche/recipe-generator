import SearchInput from '@/components/inputs/SearchInput'
import List from '@/components/list/List'
import {fetchIngredients} from '@/api/api'

export default async function Page() {
  const data = await fetchIngredients()

  return (
    <main>
      <section>
        <SearchInput />
      </section>
      <section>
        <List items={data} />
      </section>
    </main>
  )
}
