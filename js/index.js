const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');
const pokeball2 = document.querySelector('.pokeball2');
const clouds = document.querySelector('.clouds');
const hoho = document.querySelector('.hoho');
const ballom = document.querySelector('.ballom');
const ketchup = document.querySelector('.ketchup');
const ketchup2 = document.querySelector('.ketchupon');
const winner = document.querySelector('.winner');

const jump = () => {
  pikachu.classList.add('jump');

  setTimeout(() => {

    pikachu.classList.remove('jump');

  }, 500);
}

const dash = () => {
  pikachu.classList.add('dash');

  setTimeout(() => {

    pikachu.classList.remove('dash');

  }, 500);
}

const loop = setInterval(() => {

  const pokeballPosition = pokeball.offsetLeft;
  const pokeball2Position = pokeball2.offsetLeft;
  const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
  const cloudsPosition = clouds.offsetLeft;
  const hohoPosition = hoho.offsetLeft;
  const ballomPosition = ballom.offsetLeft;
  const ketchupPosition = ketchup.offsetLeft;

  if (pokeballPosition <= 110 && pokeballPosition > 0 && pikachuPosition <80) {
    pokeball.src = './imagens/pokeball-open.png';
    pokeball.style.animation = 'none';
    pokeball.style.left = `${pokeballPosition}px`;

    pokeball2.style.animation = 'none';
    pokeball2.style.left = `${pokeball2Position}px`;

    pikachu.style.animation = 'none';
    pikachu.style.bottom = `${pikachuPosition}px`;

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;

    hoho.style.animation = 'none';
    hoho.style.left = `${hohoPosition}px`;

    ballom.style.animation = 'none';
    ballom.style.left = `${ballomPosition}px`;
  
    pikachu.src = './imagens/game-over.png';
    pikachu.style.width = '75px';
    pikachu.style.marginLeft = '50px';

    clearInterval(loop);
  }

  if (ballomPosition === -40) {

    pokeball2.classList.remove('pokeball2');
    pokeball2.classList.add('pokeball2on')

    setTimeout(() => {

      pokeball2.classList.remove('pokeball2on');
      pokeball2.classList.add('pokeball2')

    }, 500);
  }

  if (ballomPosition === -40 && pokeball.classList.contains('pokeballon')) {

    pokeball.style.animation = 'none';
    pokeball.style.left = `${pokeballPosition}px`;

    ketchup.style.animation = 'none';
    ketchup.style.left = `${ketchupPosition}px`;

    pikachu.style.animation = 'none';
    pikachu.style.bottom = `${pikachuPosition}px`;

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;

    hoho.style.animation = 'none';
    hoho.style.left = `${hohoPosition}px`;

    ballom.style.animation = 'none';
    ballom.style.left = `${ballomPosition}px`;

    winner.classList.remove('winner');
    winner.classList.add('winneron')

    clearInterval(loop);
  }

  if (cloudsPosition <= 100 && pokeballPosition < 0) {
  
    pokeball.classList.remove('pokeball');
    pokeball.classList.add('pokeballon')

    ketchup.classList.remove('ketchup');
    ketchup.classList.add('ketchupon');
  }

}, 10);

const moves = (e)  => {
  if (e.keyCode === 32) {
    jump();
  }
  if (e.keyCode === 16) {
    dash();
  }
}

document.onkeydown = moves;
