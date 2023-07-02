import GoBackButton from '../buttons/GoBackButton'

export default function MainLayout({children}) {
  return (
    <div>
      <div>
        <GoBackButton />
      </div>
      {children}
    </div>
  )
}