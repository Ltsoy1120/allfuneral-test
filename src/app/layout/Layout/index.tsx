import { Outlet } from 'react-router-dom'
import Sidebar from '@/app/layout/Sidebar'
import Menu from '@/app/layout/Menu'
import './style.scss'

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Menu />
      <Sidebar />
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
