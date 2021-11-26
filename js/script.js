import { createHtml } from "./components/createHtml.js";
import { filterPrice } from "./components/filterPrice.js";

const url = "https://fakestoreapi.com/products";


const getResults = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    createHtml(json, ".results");
    filterPrice(json, ".results");

  } catch (error) {
    console.log(error);
  }



}

getResults();