window.addEventListener('load', () => {
  var container = document.querySelector('.container');

  container.style.display = 'block';

  TweenMax.to('.logo', 2, {
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
    ease: Power2.easeInOut,
  });

  TweenMax.staggerFrom('.background-div', 2, {
    height: '0%',
    backgroundColor: '#FF9CF8',
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
    TweenMax.staggerFrom(
      '#navigation nav ul li',
      0.2,
      { x: '100%', delay: 0.2, ease: Back.easeOut.config(1.7) },
      0.25,
    );
  }
  menuButton.classList.toggle('open');
}

menuButton.addEventListener('click', () => {
  menuOpenClose();
});
