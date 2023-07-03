import List from '@/components/list/List'
import {fetchIngredients} from '@/api/api'
import NoResults from '@/components/no-results/NoResults'

export default async function Page({params}) {
  const slug = params?.slug
  const data = await fetchIngredients(slug)

  if (!data || data?.length < 1) return <NoResults />

  return <List items={data} />
}
