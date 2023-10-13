import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Card from "./Components/Home/Card.jsx";
import axios from "axios";

const APIURL =
  "https://fakestoreapi.com/products";



function Home() {
  // Define a query for getting all movies
  const { data: allProducts, isLoading: isLoadingAllProducts } = useQuery(
    "allProducts",
    async () => {
      const response = await axios.get(APIURL);
      return response.data.results;
    }
  );

  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      {isLoadingAllProducs ? (
        <div className="text-3xl text-center mt-2"> Loading... </div>
      ) : (
        <Card Products={allProducts} />
      )}
    </div>
  );
}

// Wrap your component with QueryClientProvider

export default Home;


