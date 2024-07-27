import './App.css'
import Homepage from './componets/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './componets/Contacts'

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/brianmungai' element={ <Homepage />} />
        <Route path='/brianmungai/contacts' element={ <Contacts />} />
      </Routes>
    </BrowserRouter>
  </>
      
  )
}

export default App
