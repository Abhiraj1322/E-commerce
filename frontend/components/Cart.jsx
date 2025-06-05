import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Cart = () => {
  
const userid=localStorage.getItem("user_id")
useEffect(()=>{
const fetchData=async()=>{
  try{
const response=await axios.get(`http://localhost:8000/cart/${userid}`)
console.log("fetched data:",response.data)
  }
  catch(error){
console.error("Eror fetching")
  }
}
fetchData();
},[])



    
  return (
    <div>
 <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <section className="space-y-4">
        {/* Example cart item - map this if needed */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center">
            <img
              src="/uploads/example-product.jpg"
              alt="Product"
              className="w-20 h-20 object-cover mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">Product Name</h2>
              <p className="text-gray-600">$49.99</p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 text-center border rounded"
            />
            <button className="ml-4 text-red-500 hover:underline">Remove</button>
          </div>
        </div>

        {/* Add more items here */}
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-semibold">Total: $49.99</h3>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Checkout
        </button>
      </section>
    </main>




    </div>
  )
}

export default Cart