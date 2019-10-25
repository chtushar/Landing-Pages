var menuButton = document.querySelector('.menu-button');

function menuOpenClose() {
  if (menuButton.classList.contains('open')) {
    TweenMax.to('.navigation', 1, {
      x: '100%',
      ease: Power2.easeInOut,
    });
  } else {
    TweenMax.to('.navigation', 1, {
      x: '0%',
      ease: Power2.easeInOut,
    });
  }
  menuButton.classList.toggle('open');
}

menuButton.addEventListener('click', () => {
  menuOpenClose();
});
