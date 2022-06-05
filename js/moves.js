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

const moves = (e)  => {
  if (e.keyCode === 32) {
    jump();
  }
  if (e.keyCode === 16) {
    dash();
  }
}

document.onkeydown = moves;