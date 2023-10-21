
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

function Store() {
  const ClothMen = "https://fakestoreapi.com/products/category/men's%20clothing"
  const ClothWomen = "https://fakestoreapi.com/products/category/women's%20clothing"
  const { data: products, isLoading, isError } = useQuery(['menClothing', 'womenClothing'], () =>
    axios.all([axios.get(ClothMen), axios.get(ClothWomen)])
      .then(axios.spread((menResponse, womenResponse) => {
        const menProducts = menResponse.data;
        const womenProducts = womenResponse.data;
        return [...menProducts, ...womenProducts];
      }))
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className='flex item-center justify-center'>

      <ul className='grid grid-flow-rows grid-cols-3 gap-[5rem] mt-10'>
        {products.map(product => (
          <li key={product.id} className=' rounded-lg text-center border w-[15rem]'>
            <p className='mb-4 mt-2'>{product.title}</p>
            <img src={product.image} alt="" className='' />
            <p className='mt-4'>Prize {product.price} $</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Store />
    </QueryClientProvider>
  );
}

export default Root;