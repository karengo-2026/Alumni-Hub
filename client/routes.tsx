import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import Home from './pages/Home.tsx'
import ResourcesPage from './pages/ResourcesPage.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="resources" element={<ResourcesPage />} />
  </Route>,
)
