import { services } from "/Challenge4-ORACLE-ONE/service/services.js";

const container = document.getElementById("products");

const editProduct = (name, price, image, id, category) => {
  const element = document.createElement("div");
  const content = `<div class="image">
            <img src="${image}" alt="" class="item_image" />
          </div>
          <div class="item_text">
            <p class="item_name">${name}</p>
            <p class="price">$${price}</p>
            <a
                    href="../screens/admin-edit.html?id=${id}&category=${category}"
                    class="simple-button simple-button--edit"
                    >
            <button class="btn_item" data-edit>Edit</button></a
                  >
            <button class="btn_item error" id="${id}" data-delete>Delete</button>
            </div>`;
  element.innerHTML = content;
  element.classList.add("items");
  const btnDelete = element.querySelector("[data-delete]");
  btnDelete.addEventListener("click", () => {
    const id = btnDelete.id;
    services
      .deleteProduct(category, id)
      .then((respuesta) => console.log(respuesta))
      .catch((err) => console.log("error"))
      .then(() => location.reload());
  });
  return element;
};

services
  .newItem("consolas")
  .then((data) => {
    data.forEach(({ name, price, image, id, category }) => {
      const nuevaLinea = editProduct(name, price, image, id, category);
      container.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error en consolas"));

services
  .newItem("sillas")
  .then((data) => {
    data.forEach(({ name, price, image, id, category }) => {
      const nuevaLinea = editProduct(name, price, image, id, category);
      container.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error en consolas"));
