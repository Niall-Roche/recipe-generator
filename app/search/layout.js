import SearchInput from '@/components/inputs/SearchInput'

export default async function Layout({children}) {
  return (
    <main>
      <section>
        {
          <SearchInput />
        }
      </section>
      <section>
        {children}
      </section>
    </main>
  )
}