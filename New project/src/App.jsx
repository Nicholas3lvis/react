import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import Support from './components/Pages/Support'
function App() {
  return (
    <>
      <Nav/>
      <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/support' element={<Support/>}/>
      </Routes>
    </>
  )
}

export default App
