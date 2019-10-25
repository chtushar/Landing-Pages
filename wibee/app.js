window.addEventListener('load', () => {
  var container = document.querySelector('.container');

  container.style.display = 'block';

  TweenMax.to('.logo', 1, {
    opacity: 1,
    ease: Power2.easeInOut,
  });
  TweenMax.to('.reveal-statement', 2, {
    opacity: 1,
    y: '-50%',
    ease: Circ.easeOut,
  });
  TweenMax.to('.statement', 2, {
    opacity: 1,
    ease: Circ.easeOut,
  });
});

var menuButton = document.querySelector('.menu-button');

function menuOpenClose() {
  if (menuButton.classList.contains('open')) {
    TweenMax.to('#navigation', 1, {
      x: '100%',
      ease: Power2.easeInOut,
    });
  } else {
    TweenMax.to('#navigation', 1, {
      x: '0%',
      ease: Power2.easeInOut,
    });
  }
  menuButton.classList.toggle('open');
}

menuButton.addEventListener('click', () => {
  menuOpenClose();
});
