import { Button } from "../Button/Button";
import card from './card.module.css'

function CardProduct({product,cart,setCart}){

    function addToCart(){
        if(cart.includes(product)){
            const index=cart.indexOf(product)
            const newCart=cart.filter(el=>el.id)
            newCart[index]['quantidade']+=1
            setCart(newCart)
        }
        else{
            product['quantidade']=1
            setCart((oldCart)=>[...oldCart,product])
        }
    }

    return(
       <li className={card.card}>
            <img src={product.img} alt="" />
            <div className={card.info}>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p className={card.price}>R$:{product.price.toFixed(2)}</p>
            </div>
            <Button onClick={addToCart}>Adicionar</Button>
       </li>
    )
}

function CardCart({product,cart,setCart}){

    function removeToCart(){
        const index=cart.indexOf(product)
        if(cart[index]['quantidade']>1){
            const newCart=cart.filter(el=>el)
            newCart[index]['quantidade']-=1
            setCart(newCart)
        }
        else{
            setCart((oldCart)=>oldCart.filter(el=>el!=product))
        }
    }

    function addToCart(){
        const index=cart.indexOf(product)
        if(cart[index]['quantidade']>0){
            const newCart=cart.filter(el=>el)
            newCart[index]['quantidade']+=1
            setCart(newCart)
        }
    }


    return(
       <li className={card.cart}>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.quantidade && `un: ${product.quantidade}`}</p>
            </div>
            <Button className={'remove'} onClick={removeToCart}>-</Button>
            <Button className={'remove'} onClick={addToCart}>+</Button>
       </li>
    )
}


export{CardProduct,CardCart}