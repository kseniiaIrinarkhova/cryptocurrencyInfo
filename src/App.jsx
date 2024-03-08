import './App.css'

//Import Routes and pages
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Price from './pages/Price';
import Currencies from './pages/Currencies';

//Import components
import Nav from './components/Nav/Nav'


function App() {

  return (
    <>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/currencies' element={<Currencies />} />
          <Route path='/price' element={<Price />} />
        </Routes>
      </div>
    </>
  )
}

export default App
