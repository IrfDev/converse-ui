import axios from 'axios';
import { writable } from "svelte/store";

function createProducts() {
  let { subscribe, set, update } = writable(null)
  
  fetchProducts(set)
  
  return {
    subscribe
  }
};

async function fetchProducts(set) {
  try {
    let { data: { data: products } } = await axios.get('https://apihebo.online/gaerne');

    let productsArray = products.filter((product) => product.meta_data.find(data => data.key === 'estilo_gaerne'))

    return set(productsArray)
    
  } catch (error) {
   return(error) 
  }
};


export const productsStore = createProducts();
