import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProuductDetails.css'

export default function ProuductDetails() {
    const [product , setProduct]=useState({})
    let{productId}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5001/products/${productId}`)
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    },[])
  
  return (
    // <div>
    // <img src={product.image}/>
    // </div>
   
    <div className="recipe-details">
      <div className="recipe-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="recipe-content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="recipe-section">
          <h3>Ingredients:</h3>
          <p>{product.ingredients}</p>
        </div>
        <div className="recipe-section">
          <h3>Directions:</h3>
          <p>{product.description}</p>
        </div>
        <div className="recipe-section">
          <h3>Category:</h3>
          <p>{product.description}</p>
        </div>
      </div>
      </div>
  )
}
