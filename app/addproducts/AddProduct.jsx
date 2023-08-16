import React from 'react'
import Link from 'next/link';

function AddingProButton() {
  return (
   <button className='float-right px-5 py-3 rounded-lg text-white font-semibold bg-blue-500 mx-8'>  <Link href="/addproducts"> Add Product</Link> </button>
  )
}

export default AddingProButton;