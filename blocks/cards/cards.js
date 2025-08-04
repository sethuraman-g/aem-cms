// import { createOptimizedPicture } from '../../scripts/aem.js';

async function fetchCardsData() {
  const response = await fetch('/data/content.json');
  const data = await response.json();
  return data.cards || [];
}

export default async function decorate(block) {
  const ul = document.createElement('ul');
  const cards = await fetchCardsData();
  cards.forEach((card) => {
    const li = document.createElement('li');
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'cards-card-body';
    const title = document.createElement('h3');
    title.textContent = card.title;
    const desc = document.createElement('p');
    desc.textContent = card.description;
    bodyDiv.append(title, desc);
    li.append(bodyDiv);
    ul.append(li);
  });
  block.textContent = '';
  block.append(ul);
}
