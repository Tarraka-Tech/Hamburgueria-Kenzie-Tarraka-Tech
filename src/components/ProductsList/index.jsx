import Product from "../Product";
import { List } from "./style";

function ProductsList({ products, handleClick, resultTo }) {

  return (
    <List>
      <>
        {products.map((produto) => (
          <Product
            img={produto.img}
            nome={produto.name}
            categoria={produto.category}
            preco={produto.price}
            id={produto.id}
            key={produto.id}
            handleClick={handleClick}
          />
        ))}
      </>
    </List>
  );
}

export default ProductsList;
