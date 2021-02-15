// Função que abre o modal
function openModal(modalID) {
  // Seleciona o elemento a partir do id passado na função
  const modal = document.getElementById(modalID);
  // Cria uma instância do modal ao click no botão
  var instance = M.Modal.init(modal, Option);
}

function closeModal(modalID) {
  // Seleciona o elemento a partir do id passado na função
  const modal = document.getElementById(modalID);
  // Captura a instância do elemento
  var instance = M.Modal.getInstance(modal);
  // Encerra a instância
  instance.close();
}
