import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';


export default function Layout() {
  return <>

  <Navbar/>

  <div className="container-fluid p-0">
    <Outlet/>
  </div>
  
  <Footer/>

  
  
  </>

}
