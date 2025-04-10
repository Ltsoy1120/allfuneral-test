import { useNavigate } from 'react-router-dom'
import Icon from '../../../shared/components/Icon'
import './style.scss'
import { userStore } from '@/stores/userStore'

const Menu = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    userStore.logout()
    navigate('/sign-in')
  }

  return (
    <aside className="menu">
      <nav className="menu__nav">
        <ul>
          <li>
            <Icon name="logo" className="menu__logo" size={36} />
          </li>
          <li className="menu__item menu__item--active">
            <Icon name="company" />
          </li>
          <li className="menu__item">
            <Icon name="search" />
          </li>
        </ul>
      </nav>

      <div className="menu__bottom">
        <hr />
        <ul>
          <li className="menu__item">
            <Icon name="settings" />
          </li>
          <li className="menu__item" onClick={handleLogout}>
            <Icon name="sign-out" />
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Menu
