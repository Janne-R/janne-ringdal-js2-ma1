import getExistingFavs from "../utils/favFunctions.js";

export const displayResult = (data, targetElement) => {
  const resultContainer = document.querySelector(targetElement);
  resultContainer.innerHTML = "";

  if (data.length === 0) {
    resultContainer.innerHTML = "No results matching your search";
  }

  const favourites = getExistingFavs();

  data.forEach((item) => {
    let cssClass = "far";

    const doesObjectExist = favourites.find(function (fav) {
      console.log(fav);

      return fav.title === item.title;
    });

    console.log(doesObjectExist);

    if (doesObjectExist) {
      cssClass = "fa";
    }

    resultContainer.innerHTML += `
                                  <div class ="result">
                                  <i class="${cssClass} fa-heart" data-title="${item.title}" data-price="${item.price}"></i>
                                    <h2>${item.title}</h2>
                                    <p>Price: ${item.price},-</p>
                                  </div>
                                  
                                `;
  });


  const favButtons = document.querySelectorAll(".result i");

  console.log(favButtons);

  favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);

  });

  function handleClick(event) {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const title = this.dataset.title;
    const price = this.dataset.price;

    const currentFavs = getExistingFavs();

    const productExist = currentFavs.find(function (fav) {
      return fav.title === title;
    });

    if (!productExist) {
      const product = { title: title, price: price };
      currentFavs.push(product);
      saveFavs(currentFavs);

    } else {
      const newFavs = currentFavs.filter(fav => fav.title !== title);
      saveFavs(newFavs);

    }


  }


  function saveFavs(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));

  }

}

