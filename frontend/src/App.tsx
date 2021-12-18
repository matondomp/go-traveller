import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom'


import { SignIn } from './peges/signIn'
import { SignUp } from './peges/signup'
import { CreateLocation } from './peges/createLocations'
import { Details } from './peges/details/index'
import { AppProvider } from './hooks';

function App() {
  return (
  
<BrowserRouter>
  <AppProvider>
       <Routes>
            <Route path='/detail' element={<Details />}/>
            <Route path='/' element={<SignIn />}/>
            <Route path='/create' element={<SignUp />}/>
            <Route path='/create-city' element={<CreateLocation />}/>
        </Routes>
  </AppProvider>
   
</BrowserRouter>
     

  )
}
export default App;
