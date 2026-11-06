import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ParrotCompanion from './brand/ParrotCompanion'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      {/* remounts per page, so the parrot flies in on every page */}
      <ParrotCompanion key={pathname} />
    </div>
  )
}
