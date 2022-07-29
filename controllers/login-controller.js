const submit = document.querySelector("[data-btn]");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("[data-email]");
  const password = document.querySelector("[data-password]");
  const label = document.querySelector("[data-label]");
  const label2 = document.querySelector("[data-label2]");

  if (email.value === "admin@alura.com" && password.value === "alura123") {
    window.location.href = "/Challenge4-ORACLE-ONE/screens/login-products.html";
  } else {
    label.classList.add("error");
    label2.classList.add("error");
  }
});
