import React from 'react'
import Currencies from './pages/Currencies'
import {Routes,Route} from 'react-router-dom';
import Price from './pages/Price';
import Main from './pages/Main';
import Nav from './components/Nav';


function App() {
    
  return (

    <>
    <Nav />
   
      <Routes>
<Route path='/' element={<Main />}/>
<Route path='/currencies' element={<Currencies />}/>
<Route path='/price/:symbol' element={<Price />}/>
    </Routes>

    </>
  )
}

export default App