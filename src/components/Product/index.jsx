import { BoxImage, Produto } from "./style";

function Product(props) {
  return (
    <Produto id={props.id}>
      <BoxImage>
        <img alt="produto" src={props.img} />
      </BoxImage>

      <h2>{props.nome}</h2>
      <p>{props.categoria}</p>
      <h3>
        {props.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h3>

      <button
        onClick={() => {
          props.handleClick(props.id);
        }}
      >
        Adicionar
      </button>
    </Produto>
  );
}

export default Product;
