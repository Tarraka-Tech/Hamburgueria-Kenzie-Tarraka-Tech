import { useEffect, useState } from 'react'
import { CardProduct } from '../Cards/Card'
import product from './products.module.css'

function Products({filtro,setCart,cart}){
    const[products,setProducts]=useState([])
        
    useEffect(()=>{
        async function request(){
            try{
                const response=await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
                const responseJson=await response.json()
                setProducts(responseJson)
            }
            catch(err){
                console.log(err)
            }
        }
        request()
    },[])

    return(
        <ul className={product.list}>
            {
                !filtro ?
                products.map(product=><CardProduct key={product.id} cart={cart} setCart={setCart} product={product}></CardProduct>)
                :
                (
                    products.filter(el=>el.category.toLowerCase().includes(filtro.toLowerCase()) || el.name.toLowerCase().includes(filtro.toLowerCase())).map(product=><CardProduct key={product.id} cart={cart} setCart={setCart} product={product}></CardProduct>)
                )

            }
        </ul>
    )
}

export {Products}