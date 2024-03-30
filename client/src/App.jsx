import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoute from './component/PrivateRoute'
import CreateListing from './pages/CreateListing'

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route element={<PrivateRoute />}>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/create-listing' element={<CreateListing />}/>

    </Route>
    
    <Route path='/signin' element={<SignIn />}/>
    <Route path='/signup' element={<SignUp />} />
  </Routes>
  </BrowserRouter>
}
