import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Aboutus from '../Pages/Aboutus'
import Departments from '../Components/Departments'
import Login from '../Components/Login'
import Appointment  from '../Components/Appointment'
import Dashboard from '../Components/Dashboard'
import DoctorRegister from '../Components/DoctorRegister'
import ContactForm from '../Components/ContactForm'

const MainRouter = () => {
  return (
    <>
     <Routes>
        < Route path='/' element={<Home />}/>
        <Route path='about' element={<Aboutus />} />
        <Route path='departments' element={ <Departments />}/>
        <Route path='login' element={ <Login/> }/> 
        <Route path='appointment' element={<Appointment/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path="/register-doctor" element={<DoctorRegister />} />
        <Route path='contact' element={<ContactForm/>}/>
    </Routes> 
   </>
  )
}

export default MainRouter
