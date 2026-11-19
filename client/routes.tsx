import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ResourcesPage from './pages/ResourcesPage.tsx'

export default createRoutesFromElements(
  <>
    <Route index element={<App />} />
    <Route path="resources" element={<ResourcesPage />} />
  </>,
)
