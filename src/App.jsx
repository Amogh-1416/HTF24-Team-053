import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Settings from './Settings'
import Profile from './Profile'
import Home from './Home'
<<<<<<< HEAD
import Library from './Library'
=======
import Synthesia from './popup'
import Footer from './components/Footer'
import Notebook from './Notebook'
>>>>>>> 153a1cd46e5a463b47db2d99b9ce4138946f074d

function App() {
  

  return (
    <div className='bg-gray-900'>
      <Navbar />
    <Routes>
      <Route path='/popup' element ={<Synthesia />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/library' element={<Library />}></Route>
      <Route path='/settings' element={<Settings />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/notebook' element={<Notebook />}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
