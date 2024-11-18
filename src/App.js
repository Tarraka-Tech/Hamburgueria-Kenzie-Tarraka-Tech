import './reset.css';
import './App.css';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (id) => {
    const findProduct = products.find((elem) => elem.id === id);
    const verify = currentSale.find((elem) => findProduct.id === elem.id);

    if (!verify) {
      setCurrentSale((prevSale) => [...prevSale, findProduct]);
    } else {
      toast.error('Produto já adicionado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const showProduct = (event) => {
    event.preventDefault();
    setFilteredProducts(event.target.filter.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burguer <span>Kenzie</span></h1>
        <form className='searchArea' onSubmit={showProduct}>
          <input
            className='searchInput'
            placeholder='Digitar Pesquisa'
            name='filter'
            required
          />
          <button className='btnSearch' type='submit'>Pesquisar</button>
        </form>
      </header>
      <main>
        <ProductList products={products} handleClick={handleClick} filteredProducts={filteredProducts} />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </div>
  );
}

export default App;