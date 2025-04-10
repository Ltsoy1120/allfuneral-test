import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { userStore } from '@/stores/userStore'
import Input from '@/shared/components/Input'
import Icon from '@/shared/components/Icon'
import Button from '@/shared/components/Button'
import './style.scss'

const AuthPage = () => {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!userName) return

    await userStore.login(userName)

    if (userStore.isAuth) {
      navigate('/')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-page__form">
        <Icon name="logo" size={50} />
        <h1>Sign In</h1>
        <Input
          value={userName}
          onChange={e => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your name"
        />
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  )
}

export default observer(AuthPage)
