import {fetchRecipes} from '@/api/api'
import NoResults from '@/components/no-results/NoResults'
import RecipeList from '@/components/list/RecipeList'

export default async function Page({params}) {
  const {slug} = params

  const data = await fetchRecipes(slug)

  if (!data || data?.length < 1) return <NoResults />

  return <RecipeList items={data} />
}
