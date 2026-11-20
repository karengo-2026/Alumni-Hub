import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'

import Home from './pages/Home.tsx'
import LessonPage from './pages/LessonPage.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path='/lessons/:id' element={<LessonPage />} />
  </Route>,
)
