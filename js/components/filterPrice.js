import { displayResult } from "./displayResult.js";
import { displayMessage } from "./displayMessage.js";

export const filterPrice = (results, targetElement) => {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value;

    const filterdNumbers = results.filter(result => result.price <= searchValue);

    if (filterdNumbers.length === 0) {
      displayMessage("error", "No results matching your search", ".results");
    } else {

      displayResult(filterdNumbers, targetElement);
    }

  };

}