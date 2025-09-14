onload = () => {
  document.body.classList.remove("container");
};

function mostrarCarta() {
  const carta = document.getElementById("carta");
  carta.style.display = carta.style.display === "none" ? "block" : "none";
}
