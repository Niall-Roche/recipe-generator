import {fetchIngredients} from '@/api/api'
import IngredientList from '@/components/list/IngredientList'
import SearchLayout from '@/components/layouts/SearchLayout'

export default async function Page() {
  const data = await fetchIngredients()

  return (
    <SearchLayout>
      <IngredientList items={data} />
    </SearchLayout>
  )
}
