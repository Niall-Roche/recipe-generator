import {fetchRecipes} from '@/api/api'
import List from '@/components/list/List'
import NoResults from '@/components/no-results/NoResults'

export default async function Page({params}) {
  const {slug} = params

  const data = await fetchRecipes(slug)

  if (!data || data?.length < 1) return <NoResults />

  return <List items={data} noTilt cols={4} imgSize={300} />
}
