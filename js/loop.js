const loop = setInterval(() => {

  const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
  const pokeballPosition = pokeball.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const ballomPosition = ballom.offsetLeft;

  if (ballomPosition === -40) ballomClass();

  if (cloudsPosition <= 100 && pokeballPosition < 0) cloudClass();

  if (ballomPosition === -40 && pokeball.classList.contains('pokeballon')) {

    stopAnimation();

    winner.classList.remove('winner');
    winner.classList.add('winneron')

    clearInterval(loop);
  }

  if (pokeballPosition <= 110 && pokeballPosition > 0 && pikachuPosition <80) {
  
    stopAnimation();

    pokeball.src = './imagens/pokeball-open.png';
    pikachu.src = './imagens/game-over.png';
    pikachu.style.width = '75px';
    pikachu.style.marginLeft = '50px';

    clearInterval(loop);
  }

}, 10);

