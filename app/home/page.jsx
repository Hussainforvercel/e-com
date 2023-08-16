import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Products from '../product/page'
import Features from '../features/page'
import Footer from '../footer/page'
// import App from '../addproducts/page'
// import { AddProducts } from '../addproducts/page'
import AddingProButton from "../addproducts/AddProduct"

function Homee() {
  return (
    <div>
 <Navbar/>
 <Hero/>
 <AddingProButton/>
 <Products/>

 <Features/>
 <Footer/>

 {/* <AddProducts/> */}
 {/* <App/> */}
 </div>
  )
}

export default Homee