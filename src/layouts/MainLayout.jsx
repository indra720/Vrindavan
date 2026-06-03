import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import FloatingActions from '../shared/FloatingActions'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-dark">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

