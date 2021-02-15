function openModal(modalID) {
  // Captura o modal através do seu ID
  const modal = document.getElementById(modalID);
  // Adiciona a classe que faz o modal aparecer
  modal.classList.add('show');
}

function closeModal(modalID) {
  // Captura o modal através do seu ID
  const modal = document.getElementById(modalID);
  // Adiciona a classe que faz o modal aparecer
  modal.classList.remove('show');
}

// Captura o botão de abrir o modal
const botaoAbrir = document.querySelector('#open');
// Adiciona o evento que chama a função de abrir o modal ao clicar no botão
botaoAbrir.addEventListener('click', function() { openModal('modal') });

// Captura o botão de fechar o modal
const botaoFechar = document.querySelector('#close');
// Adiciona o evento que chama a função de abrir o modal ao clicar no botão
botaoFechar.addEventListener('click', function() { closeModal('modal') });

