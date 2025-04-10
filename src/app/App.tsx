import { Navigate, Route, Routes } from 'react-router-dom'
import { userStore } from '@/stores/userStore'
import { observer } from 'mobx-react-lite'
import AuthPage from '@/pages/AuthPage'
import CompanyPage from '@/pages/CompanyPage'
import Layout from './layout/Layout'

const App = observer(() => {
  const isAuth = userStore.isAuth
  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path="/sign-in" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </>
      ) : (
        <Route element={<Layout />}>
          <Route path="/" element={<CompanyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      )}
    </Routes>
  )
})

export default App
