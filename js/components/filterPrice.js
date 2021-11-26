import { createHtml } from "./createHtml.js";

export const filterPrice = (results, targetElement) => {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value;

    const filterdNumbers = results.filter(function (result) {
      if (result.price <= searchValue) {
        return true;

      }
      return false;

    });

    console.log(filterdNumbers);
    createHtml(filterdNumbers, targetElement);

  };

}