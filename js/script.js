const url = "https://fakestoreapi.com/products";

const resultContainer = document.querySelector(".results");

const getResults = async () => {

  const response = await fetch(url);
  const json = await response.json();

  console.log(json);

  resultContainer.innerHTML = "";

  json.forEach((item) => {
    resultContainer.innerHTML += `
                                    <div class ="result">
                                      <h2>${item.title}</h2>
                                      <p>Price: ${item.price},-</p>
                                    </div>
                                    
                                  `;
  });

}

getResults();