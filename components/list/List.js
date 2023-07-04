import BackToTopButton from '@/components/buttons/BackToTopButton'

const List = ({children}) => {
  return (
    <>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {children}
      </div>
      <BackToTopButton />
    </>
  )
}

export default List
