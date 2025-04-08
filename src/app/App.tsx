import CompanyPage from '@/pages/CompanyPage'
import Layout from './layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthPage from '@/pages/AuthPage'

function App() {
  const isAuth = Boolean(localStorage.getItem('token'))
  return (
    //  <Suspense fallback={<Loader />}>
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
}

export default App
