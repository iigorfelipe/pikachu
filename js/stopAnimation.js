const stopAnimation = () => {
  const pokeballPosition = pokeball.offsetLeft;
  const pokeball2Position = pokeball2.offsetLeft;
  const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
  const cloudsPosition = clouds.offsetLeft;
  const hohoPosition = hoho.offsetLeft;
  const ballomPosition = ballom.offsetLeft;

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
}