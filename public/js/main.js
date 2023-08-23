const navSlide = () => {
  const burger = document.querySelector('.burgeR');
  const navbar = document.querySelector('.navBarLinks');
  const navLinks = document.querySelectorAll('.navBarLinks a');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('navBarLinks-active');

    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    })

    burger.classList.toggle('toggle');
  })

}

navSlide();