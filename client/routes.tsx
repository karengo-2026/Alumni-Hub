import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'

import Home from './pages/Home.tsx'
import LecturePanel from './components/LecturePanel.tsx'
import HandbookPanel from './components/HandbookPanel.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="LecturePanel" element={<LecturePanel onClose={function (): void {
      throw new Error('Function not implemented.')
    } } children={undefined} title={undefined} />}/>
    <Route path="HandbookPanel" element={<HandbookPanel onClose={function (): void {
      throw new Error('Function not implemented.')
    } } children={undefined} title={undefined} />}/>

  </Route>,
)
