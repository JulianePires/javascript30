//armazena os inputs em uma constante
const inputs = document.querySelectorAll(".controls input");

//função de alteração de propriedades
function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //resgata os valores dos atributos "data"
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//mapeia os valores dos inputs ao alterar em seus modificadores
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
//mapeia os valores dos inputs ao mover o mouse acima do seletor
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
