import List from '@/components/list/List'
import {fetchIngredients} from '@/api/api'

export default async function Page({params}) {
  const slug = params?.slug
  const data = await fetchIngredients(slug)

  if (data?.length < 1) return <div>No Results</div>

  return <List items={data} />
}
