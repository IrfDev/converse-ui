import axios from 'axios';
import { writable } from 'svelte/store';

function createDistribuidores() {
  let { subscribe, set, update } = writable(null);

  fetchProducts(set);

  return {
    subscribe,
  };
}

async function fetchProducts(set) {
  try {
    let {
      data: {
        data: { companies },
      },
    } = await axios.get('https://apihebo.online/gaerne/companies');

    let companiesArray = companies
      .filter((company) =>
        company.properties.gaerne && company.properties.website
          ? company.properties.gaerne.value === 'true'
          : false
      )
      .map(({ properties: company }) => {
        return {
          name: company.name
            ? company.name.value
            : company.website.value || 's',
          website: company.website ? company.website.value : null,
          fav: company.fav ? company.fav.value : false,
        };
      });

    console.log(companiesArray);

    return set(companiesArray);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const distribuidoresStore = createDistribuidores();
