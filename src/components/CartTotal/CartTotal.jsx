import total from './cartTotal.module.css'
import { Button } from '../Button/Button'


function CartTotal({setCart,cart}){

    function removeAll(){
        setCart([])
    }

    return(
        <>
            <div className={total.total}>
                <p>Total</p>
                <p>R$: {cart.map(el=>el.price*el.quantidade).reduce((current,previus)=>current+previus,0).toFixed(2)}</p>
            </div>
            <Button onClick={removeAll} className={'remove'}>Remover Todos</Button>
        </>
    )
}

export {CartTotal}