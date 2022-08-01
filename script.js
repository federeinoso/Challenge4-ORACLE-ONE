import { services } from "/Challenge4-ORACLE-ONE/service/services.js";

const container_sillas = document.getElementById("sillas");

function uploader() {
  const loader = document.querySelectorAll(".lds-ring");
  loader.forEach((load) => {
    load.classList.add("display");
  });
}

services
  .newItem("sillas")
  .then(uploader())
  .then((data) => data.slice(0, res()))
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
  .then(uploader())
  .then((data) => data.slice(0, res()))
  .then((data) => {
    data.forEach(({ name, price, image, id, category }) => {
      const nuevaLinea = services.newProduct(name, price, image, id, category);
      container_consolas.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error"));

function res() {
  if (window.screen.availWidth <= 610) {
    return 2;
  } else if (window.screen.availWidth <= 768) {
    return 3;
  } else if (window.screen.availWidth <= 1366) {
    return 6;
  } else if (window.screen.availWidth >= 1920) {
    return 9;
  }
}
