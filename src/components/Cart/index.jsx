import Total from "../TotalCart";
import { BoxCart, CardContent, CartEmpty, TitleCard, TotalCart } from "./style";

function Cart({ currentSale, removeCart, setCurrentSale }) {
  return (
    <BoxCart>
      <TitleCard>Carrinho de compras</TitleCard>

      {currentSale.length > 0 ? (
        <>
          {currentSale.map((produto) => (
            <CardContent key={produto.id}>
              <img alt="img" src={produto.img} />

              <section>
                <h3>{produto.name}</h3>
                <p>{produto.category}</p>
              </section>

              <button
                onClick={() => {
                  removeCart(produto);
                }}
              >
                Remover
              </button>
            </CardContent>
          ))}
          <TotalCart>
            <Total currentSale={currentSale} />
            <button
              onClick={() => {
                setCurrentSale([]);
              }}
            >
              Remover todos
            </button>
          </TotalCart>
        </>
      ) : (
        <CartEmpty>
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </CartEmpty>
      )}
    </BoxCart>
  );
}

export default Cart;
