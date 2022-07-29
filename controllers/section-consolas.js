import { services } from "/Challenge4-ORACLE-ONE/service/services.js";

const container_consolas = document.getElementById("consolas");

services
  .newItem("consolas")
  .then((data) => {
    data.forEach(({ name, price, image, id, category }) => {
      const nuevaLinea = services.newProduct(name, price, image, id, category);
      container_consolas.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error en consolas"));
