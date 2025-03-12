import './App.scss'
// Imported Components
import Desktop from './components/desktop/Desktop'
import Mobile from './components/mobile/Mobile'
import { isMobile } from 'react-device-detect'


function App() {
  return (
    <>
     {isMobile ? <Mobile /> : <Desktop />}
    </>
  )
}

export default App
