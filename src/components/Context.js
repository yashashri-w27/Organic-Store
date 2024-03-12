import React, { createContext,useContext, useReducer} from 'react'
import { productReducer } from './Reducers'
const Products=createContext()
function Context({children}) {
    
    let data=[
      {
        id: 1,
        image: "./images/coffee-asorted-300x300.jpg",
        category: "Groceries",
        name:"Assorted Coffee",
        price:35.00,
        stock:10,
        qty:0
      },
      {
        id: 2,
        image: "./images/cashew-butter-500-300x300.jpg",
        category: "Groceries",
        name:"Cashew Butter",
        price:25.00,
        stock:0,
        qty:0
      },
      {
        id: 3,
        image: "./images/diabetic-cookies-300x300.jpg",
        category: "Groceries",
        name:"Diabetic Cookies",
        price:25.00,
        stock:8,
        qty:0
      },
      {
        id: 4,
        image: "./images/eggs-300x300.jpg",
        category: "Juice",
        name:"Farm Fresh Eggs",
        price:34.00,
        stock:9,
        qty:0
      },
      {
        id: 5,
        image: "./images/orage-juice-kariz-300x300.jpg",
        category: "Juice",
        name:"Fresh Orange Juice",
        price:18.00,
        stock:7,
        qty:0
      },
      {
        id: 6,
        image: "./images/organic-honey-300x300.jpg",
        category: "Juice",
        name:"Organic Honey",
        price:34.00,
        stock:8,
        qty:0
      },
      {
        id: 7,
        image: "./images/sanitizer-300x300.jpg",
        category: "Groceries",
        name:"Hand Sanitizer",
        price:15.00,
        stock:0,
        qty:0
      },
      {
        id: 8,
        image: "./images/red-chillies-300x300.jpg",
        category: "Groceries",
        name:"Handpicked Red Chillies",
        price:19.00,
        stock:5,
        qty:0
      },
      {
        id: 9,
        image: "./images/edible-oil-300x300.jpg",
        category: "Groceries",
        name:"Extracted Edible Oil",
        price:25.00,
        stock:0,
        qty:0
      },
      {
        id: 10,
        image: "./images/face-wash-300x300.jpg",
        category: "Groceries",
        name:"Organic Face Scrub",
        price:35.00,
        stock:11,
        qty:0
      },
      {
        id: 11,
        image: "./images/pulses-300x300.jpg",
        category: "Groceries",
        name:"Pulses From Organic Farm",
        price:15.00,
        stock:9,
        qty:0
      },
      {
        id: 12,
        image: "./images/wheat-300x300.jpg",
        category: "Groceries",
        name:"wheat From Organic Farms",
        price:34.00,
        stock:15,
        qty:0
      }
    ]
      console.log(data)
      const [state,dispatch]=useReducer(productReducer,{
        data:data,
        cart:[]
      })
  return (
    <Products.Provider value={{state,dispatch}}>
      {children}
    </Products.Provider>
  )
}

export default Context
export const Cartstate=()=>{
    return useContext(Products)
}