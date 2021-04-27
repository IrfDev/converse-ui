// import { writable } from "svelte/store";
// import { productsStore } from "./products";

// function createCategories() {
//   let { subscribe, set, update } = writable(null)
  
//   filterCategories(set)
  
//   return {
//     subscribe
//   }
// };

// async function filterCategories(set) {
//   try {
//     let products = productsStore.subscribe()
// console.log("Bring products:",products)
//     let categoriesArray = products.map((product) => {
//     return product.meta_data.find((data) => data.key === 'estilo_gaerne')
//     });
//     console.log(categoriesArray)

//     let uniqueCategories = new Set(categoriesArray);
    
//     console.log("[Filtered categories]", [...uniqueCategories])

//   return set([...uniqueCategories]);
    
//   } catch (error) {
//    return(error) 
//   }
// };


// export const categories = createCategories();
