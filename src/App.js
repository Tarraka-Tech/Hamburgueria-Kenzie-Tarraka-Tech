import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { Header, Logo, Main, Pesquisa } from "./styles";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function showProducts() {
    const filtro = products.filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filtro);
  }

  function handleClick(productId) {
    const produto = products.find((item) => item.id === productId);
    const verificacao = currentSale.some((item) => item.id === productId);
    if (verificacao) {
      return toast.error("Item já adicionado");
    } else {
      toast.success("Item adicionado com sucesso");
      return setCurrentSale([...currentSale, produto]);
    }
  }

  function removeCart(item) {
    const result = currentSale.filter((elem) => {
      return elem !== item;
    });
    setCurrentSale(result);
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ style: { fontFamily: "Inter" } }}
      />

      <Header>
        <Logo>
          Burguer<span>Kenzie</span>
        </Logo>

        <Pesquisa>
          <input
            type="text"
            onChange={(evt) => setInputValue(evt.target.value)}
            placeholder="Digite sua pesquisa"
          />
          <button onClick={showProducts}>Pesquisar</button>
        </Pesquisa>
      </Header>

      <Main>
        <ProductsList
          products={filteredProducts.length > 0 ? filteredProducts : products}
          handleClick={handleClick}
        />
        <div>
          <Cart
            removeCart={removeCart}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale ? currentSale : false}
          />
        </div>
      </Main>
    </div>
  );
}

export default App;
