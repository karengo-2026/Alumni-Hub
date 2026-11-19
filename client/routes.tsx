import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'

import Home from './pages/Home.tsx'
import SidePanel from './components/SidePanel.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="SidePanel" element={<SidePanel onClose={function (): void {
      throw new Error('Function not implemented.')
    } } children={undefined} title={undefined} />}/>
  </Route>,
)
