import React from 'react'
import { useState,useEffect } from 'react'
import FeatureCard from '../FeatureCard/Feature'

const Categories = () => {
  
    const [categories, SetCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () =>{
            const response = await fetch ('https://fakestoreapi.com/products/categories')
            const data = await response.json() 
            console.log(data,'data')
            SetCategories(data) 
        }
        fetchCategories()
      
    }, [])

    if(categories.length === 0) return <div>Loading.....</div>
    


    return (
            <FeatureCard cards = {categories}/>
    )
  
}

export default Categories