import { services } from "/service/services.js";

const container_sillas = document.getElementById("sillas");

services
  .newItem("sillas")
  .then((data) => data.slice(0, 6))
  .then((data) => {
    data.forEach(({ name, price, image, id, category }) => {
      const nuevaLinea = services.newProduct(name, price, image, id, category);
      container_sillas.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error"));

const container_consolas = document.getElementById("consolas");

services
  .newItem("consolas")
  .then((data) => data.slice(0, 6))
  .then((data) => {
    data.forEach(({ name, price, image, id, category }) => {
      const nuevaLinea = services.newProduct(name, price, image, id, category);
      container_consolas.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error"));
