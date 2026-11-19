import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'

import Home from './pages/Home.tsx'
import UnitPage from './pages/UnitPage.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="units/:unitId" element={<UnitPage />} />
  </Route>,
)
