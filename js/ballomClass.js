const ballomClass = () => {

  pokeball2.classList.remove('pokeball2');
  pokeball2.classList.add('pokeball2on')

  setTimeout(() => {

    pokeball2.classList.remove('pokeball2on');
    pokeball2.classList.add('pokeball2')

  }, 500);
}