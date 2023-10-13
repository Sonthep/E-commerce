import axios from "axios";


const APIStore = 'https://fakestoreapi.com/products';

const fetchProducts = () => {
    return axios.get(`${APIStore}/products`)
}