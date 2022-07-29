import { services } from "/Challenge4-ORACLE-ONE/service/services.js";

const form = document.querySelector("[data-btn]");

const getInformation = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const category = url.searchParams.get("category");

  if (id === null) {
    alert("error");
  }
  const name = document.querySelector("[data-nombre]");
  const price = document.querySelector("[data-precio]");
  const image = document.querySelector("[data-image]");
  const cate = document.querySelector("[data-select]");

  const product = await services.detailProduct(category, id);
  name.value = product.name;
  price.value = product.price;
  image.value = product.image;
  cate.value = product.category;
};

getInformation();

function error() {
  const div = document.querySelectorAll("label");
  div.forEach((divs) => {
    divs.classList.add("error");
  });
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const name = document.querySelector("[data-nombre]").value;
  const price = document.querySelector("[data-precio]").value;
  const image = document.querySelector("[data-image]").value;
  const category = document.querySelector("[data-select]").value;

  if (
    name.value !== "" &&
    price.value !== "" &&
    categoria.value !== "" &&
    image.value !== ""
  ) {
    services.editProduct(name, price, image, category, id).then(() => {
      window.location.href =
        "/Challenge4-ORACLE-ONE/screens/login-products.html";
    });
  } else {
    error();
  }
});
