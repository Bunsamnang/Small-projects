const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.value;
    document.body.style.backgroundColor = color;
  });
});
