import clsx from 'clsx'
import './style.scss'

interface SidebarProps {
  isOpen?: boolean
}

const Sidebar = ({ isOpen = true }: SidebarProps) => {
  return (
    <aside className={clsx('sidebar', { open: isOpen })}>
      <div className="sidebar__title">
        <h2>Oak Tree Cemetery</h2>
        <h3>Process Manager</h3>
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li className="sidebar__item sidebar__item--active">Dashboard</li>
          <li className="sidebar__item">Orders</li>
          <li className="sidebar__item">Products</li>
          <li className="sidebar__item">Customers</li>
        </ul>
      </nav>
      <span>All Funeral Services © 2015-2025</span>
    </aside>
  )
}

export default Sidebar
