const newItem = (categoria) =>
  fetch(`https://server-alura.herokuapp.com/${categoria}`).then((respuesta) =>
    respuesta.json()
  );

const newProduct = (name, price, image, id, category) => {
  const element = document.createElement("div");
  const content = `<div class="image">
            <img src="${image}" alt="" class="item_image" />
          </div>
          <div class="item_text">
            <p class="item_name">${name}</p>
            <p class="price">$${price}</p>
                        <a
                    href="/screens/product.html?id=${id}&category=${category}"
                    >
            <button class="btn_item">Ver producto</button> </a>
            </div>`;
  element.innerHTML = content;
  element.classList.add("items");
  return element;
};

const addItem = (name, price, image, category) => {
  return fetch(`https://server-alura.herokuapp.com/${category}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      image,
      category,
      id: uuid.v4(),
    }),
  });
};

const deleteProduct = (category, id) => {
  return fetch(`https://server-alura.herokuapp.com/${category}/${id}`, {
    method: "DELETE",
  });
};

const detailProduct = (category, id) => {
  return fetch(`https://server-alura.herokuapp.com/${category}/${id}`).then(
    (respuesta) => respuesta.json()
  );
};

const editProduct = (name, price, image, category, id) => {
  return fetch(`https://server-alura.herokuapp.com/${category}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price, image }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const services = {
  newProduct,
  addItem,
  newItem,
  deleteProduct,
  detailProduct,
  editProduct,
};
