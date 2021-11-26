export const createHtml = (data, targetElement) => {
  const resultContainer = document.querySelector(targetElement);
  resultContainer.innerHTML = "";

  data.forEach((item) => {
    resultContainer.innerHTML += `
                                  <div class ="result">
                                    <h2>${item.title}</h2>
                                    <p>Price: ${item.price},-</p>
                                  </div>
                                  
                                `;
  });
}

