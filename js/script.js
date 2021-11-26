import { createHtml } from "./components/createHtml.js";
import { filterPrice } from "./components/filterPrice.js";
import { displayMessage } from "./components/displayMessage.js";

const url = "https://fakestoreapi.com/products";


const getResults = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    createHtml(json, ".results");
    filterPrice(json, ".results");

  } catch (error) {
    displayMessage("error", "Sorry we are having problems with the API call", ".results");
  }



}

getResults();