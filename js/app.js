const { reviewData } = window;
console.log(reviewData);

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded() {
  //only rly needed if using js file in multiple html files
  if (window.location.href.endsWith('reviews.html')) {
    loadCards();
  }
}
//removes all cards then loads them from data.js
function loadCards() {
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerHTML = '';
  for (let i = 0; i < reviewData.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardTextContainer = document.createElement('div');
    cardTextContainer.classList.add('card-text-container');
    const details = document.createElement('div');
    details.classList.add('details');
    const name = document.createElement('h3');
    name.innerText = reviewData[i].name;
    const date = document.createElement('h3');
    date.innerText = reviewData[i].date.toLocaleDateString('en-US'); // need to update this likely
    const review = document.createElement('p');
    review.classList.add('review');
    review.innerText = reviewData[i].text;

    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating-container');

    details.appendChild(name);
    details.appendChild(date);
    for (let j = 0; j < reviewData[i].rating; j++) {
      const fullStar = document.createElement('img');
      fullStar.classList.add('star-full');
      fullStar.src = 'images/FullStar.jpg';
      fullStar.alt = 'Star';
      ratingContainer.appendChild(fullStar);
    }
    for (let k = 5; k > reviewData[i].rating; k--) {
      const emptyStar = document.createElement('img');
      emptyStar.classList.add('star-empty');
      emptyStar.src = 'images/EmptyStar.jpg';
      emptyStar.alt = 'Empty Star';
      ratingContainer.appendChild(emptyStar);
    }
    cardTextContainer.appendChild(details);
    cardTextContainer.appendChild(ratingContainer);
    cardTextContainer.appendChild(review);
    card.appendChild(cardTextContainer);
    cardsContainer.appendChild(card);
  }
}
//form submission
const form = document.getElementById('my-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const rating = document.querySelector('#rating');
  const name = document.querySelector('#name');
  const review = document.querySelector('#review');
  const date = new Date();
  const temp = {};
  temp.rating = rating.value;
  temp.name = name.value;
  temp.date = date;
  temp.text = review.value;
  reviewData.push(temp);
  loadCards();
});
