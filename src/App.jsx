import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul className='grid grid-rows-2 grid-flow-col gap-4'>
        {products.map(product => (
          <li key={product.id} className='text-red-500 '>{product.title} 
          <img src={product.image} alt="" className='' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;