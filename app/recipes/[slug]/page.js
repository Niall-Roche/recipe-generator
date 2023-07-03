import {fetchRecipes} from '@/api/api'
import List from '@/components/list/List'

export default async function Page({params}) {
  const {slug} = params

  const data = await fetchRecipes(slug)

  return <List items={data} noTilt cols={4} imgSize={300} />
}
