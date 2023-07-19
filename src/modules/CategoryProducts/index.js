import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/Products'

const CategoryProducts = () => {
    const {name} = useParams()
    const [products, SetProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () =>{
            const response = await fetch (`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json() //parsing in json format
            console.log(data)
            SetProducts(data) //setProduct function is called
        }
        fetchProducts()
      
    }, [])

    if(products.length ===0) return <div>Loading....</div>

    return(
        <ProductCard products = {products}/>

    )
}

export default CategoryProducts