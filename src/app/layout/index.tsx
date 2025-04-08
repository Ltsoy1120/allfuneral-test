import { Outlet } from 'react-router-dom'
import Sidebar from '@/shared/components/Sidebar'
import Menu from '@/shared/components/Menu'
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
