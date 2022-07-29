import { services } from "/Challenge4-ORACLE-ONE/service/services.js";

const submit = document.querySelector("[data-btn]");

function error() {
  const div = document.querySelectorAll("label");
  div.forEach((divs) => {
    divs.classList.add("error");
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.querySelector("[data-nombre]").value;
  const price = document.querySelector("[data-precio]").value;
  const categoria = document.querySelector("[data-select]").value;
  const image = document.querySelector("[data-image]").value;

  if (
    name.value !== "" &&
    price.value !== "" &&
    categoria.value !== "" &&
    image.value !== ""
  ) {
    services
      .addItem(name, price, image, categoria)
      .then(
        () =>
          (window.location.href =
            "/Challenge4-ORACLE-ONE/screens/login-products.html")
      )
      .catch((err) => console.log(err));
  } else {
    error();
  }
});
