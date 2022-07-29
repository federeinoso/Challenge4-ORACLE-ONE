import { services } from "../service/services.js";

const main = document.querySelector(".product-container");
const url = new URL(window.location);
const id = url.searchParams.get("id");
const category = url.searchParams.get("category");

const getInformation = async () => {
  const product = await services.detailProduct(category, id);

  const container = document.createElement("div");
  const content = `
            <img src="${product.image}" alt="" class="product-image" />
          <div class='product-text'>
                <div class="product-title">
                    <p>${product.name}</p>
                </div>
                <div class="product-price">$${product.price}</div>
          <div class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>`;
  container.innerHTML = content;
  container.classList.add("product-flex");
  main.appendChild(container);

  return container;
};

getInformation();

const simil = document.querySelector(".product-simil");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

services
  .newItem(category)
  .then((data) => data.slice(0, 6))
  .then((data) =>
    data.sort(function (a, b) {
      return 0.5 - Math.random();
    })
  )
  .then((data) => {
    data.forEach(({ name, price, image, id, category }) => {
      const nuevaLinea = services.newProduct(name, price, image, id, category);
      simil.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error"));
