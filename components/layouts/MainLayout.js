import GoBackButton from '../buttons/GoBackButton'
import PageHeader from '@/components/headers/PageHeader'

export default function MainLayout({children}) {
  return (
    <div>
      <div className='flex flex-row flex-wrap'>
        <GoBackButton />
        <PageHeader />
      </div>
      {children}
    </div>
  )
}
