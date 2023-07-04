import SearchInput from '@/components/inputs/SearchInput'

const SearchLayout = ({children}) => {
  return (
    <main>
      <section>
        <SearchInput />
      </section>
      <section>
        {children}
      </section>
    </main>
  )
}

export default SearchLayout
