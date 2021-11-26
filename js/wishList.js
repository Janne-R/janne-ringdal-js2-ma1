import getExistingFavs from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const wishListContainer = document.querySelector(".wishlist-container");

if (favourites.length === 0) {
  wishListContainer.innerHTML = "No favorites yet";
}

favourites.forEach(favourite => {
  wishListContainer.innerHTML += `
  <div class ="result">
  <i class="fa fa-heart"></i>
    <h2>${favourite.title}</h2>
    <p>Price: ${favourite.price},-</p>
  </div>
  
`;
});