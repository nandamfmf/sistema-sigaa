const busca = document.querySelector('.search-bar');
const botao = document.querySelector('.search-button');
const cards = document.querySelectorAll('.card');

const hamb = document.querySelector('.hamb');
if (hamb) {
  hamb.addEventListener('click', () => {
    hamb.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
}

botao.addEventListener('click', () => {
  const termoBusca = busca.value.toLowerCase();

  cards.forEach(card => {
    const nome = card.querySelector('.list-item-name').textContent.toLowerCase();

    if (nome.includes(termoBusca)) {
      card.style.display = 'flex';
      card.classList.add('centralizado');
    } else {
      card.style.display = 'none';
    }
  });
});

busca.addEventListener('input', () => {
  const termoBusca = busca.value.toLowerCase();

  cards.forEach(card => {
    const nome = card.querySelector('.list-item-name').textContent.toLowerCase();

    if (nome.includes(termoBusca)) {
      card.style.display = 'flex';
      card.classList.add('centralizado');
    } else {
      card.style.display = 'none';
    }
  });
});
