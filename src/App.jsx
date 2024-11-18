import app from './App.module.css'
import {Logo} from './components/Logo/Logo'
import {InputSearch} from './components/Inputs/Inputs'
import { Products } from './components/Products/products'
import { CartList } from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const[cart,setCart]=useState([])
  const[filtro,setFiltro]=useState()

  return (
    <div className={app.body}>
      <header>
        <div className={app.container}>
          <Logo></Logo>
          <InputSearch setFiltro={setFiltro} id='pesquisa' placeholder={'Digitar pesquisa'} />
        </div>
      </header>
      <main>
        <div className={app.container}>
            <Products filtro={filtro} cart={cart} setCart={setCart}></Products>
            <CartList cart={cart} setCart={setCart}></CartList>
        </div>
      </main>   
    </div>
         
    
  )
}

export default App
