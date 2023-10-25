
document.querySelector('.header__burger-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open');
})

const images = document.querySelectorAll('.works__gallery img');
const prev = document.querySelector('.works__navigation-btn-prev');
const next = document.querySelector('.works__navigation-btn-nxt');
let current = 0;

prev.addEventListener('click', () => {
  images[current].classList.remove('active');
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  images[current].classList.add('active');
});

next.addEventListener('click', () => {
  images[current].classList.remove('active');
  current++;
  if (current === images.length) {
    current = 0;
  }
  images[current].classList.add('active');
});