function change() {
  let button = document.querySelector("#button");

  button.innerText === "Kliknij tutaj 🍁"
    ? (button.innerHTML = "Hello, have a nice day! 🍁🍂🌻 ")
    : (button.innerHTML = "Kliknij tutaj 🍁");
}

button.addEventListener("click", change);
