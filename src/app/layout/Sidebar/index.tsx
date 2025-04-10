import clsx from 'clsx'
import './style.scss'
import Button from '@/shared/components/Button'

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
          <li className="sidebar__item">
            <Button startIcon="company">Organizations</Button>
          </li>
          <li className="sidebar__item">
            <Button variant="outline" startIcon="contractor">
              Contractors
            </Button>
          </li>
          <li className="sidebar__item">
            <Button variant="outline" startIcon="account">
              Clients
            </Button>
          </li>
        </ul>
      </nav>
      <span>All Funeral Services © 2015-2025</span>
    </aside>
  )
}

export default Sidebar
