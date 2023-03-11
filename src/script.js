{
  const changeButtonText = () => {
    button.innerText === "Kliknij tutaj 🍁"
      ? (button.innerHTML = "Hello, have a nice day! 🍁🍂🌻 ")
      : (button.innerHTML = "Kliknij tutaj 🍁");
  };

  const init = () => {
    let button = document.querySelector("#button");
    button.addEventListener("click", changeButtonText);
  };
  init();
}
