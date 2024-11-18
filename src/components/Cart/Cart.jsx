import { CardCart } from '../Cards/Card'
import { CartTotal } from '../CartTotal/CartTotal'
import cartStyle from './cart.module.css'

function CartList({cart,setCart}){
    return(
        <div>
            <h2 className={cartStyle.title}>Carrinho</h2>
            <ul className={cartStyle.list}>
                {cart.map(product=><CardCart key={product.id} cart={cart} product={product} setCart={setCart}></CardCart>)}
            </ul>
            <CartTotal setCart={setCart} cart={cart}></CartTotal>
        </div>
    )
}

export{CartList}