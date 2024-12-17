 
import Characters from './HomePage/Function/Characters';
import Episod from './wrapper/episod/episod';
import Location from './wrapper/episod/Location';
import { useState } from 'react'
import Details from './components/header/Details/Details';
import './App.css'
import { UserContext } from './userContext/userContext';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [data, setData] = useState('');
  const providerData = {
    onchange: setData,
    products:data
  }
//  const nav = useNavigate()

  return (
    <>
      <UserContext.Provider value={providerData}>
    <Routes>
      <Route path='/' element={<Characters></Characters>}></Route>
      <Route path='/character/:id' element={<Details/>}></Route>
      <Route path='/episode' element={<Episod></Episod>}></Route>
      <Route path='/location' element={<Location></Location>}></Route>
    </Routes>
      </UserContext.Provider>
    </>
      
    
    
  )
}

export default App
