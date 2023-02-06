import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
