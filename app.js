const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')


//Display Mobile menu 

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu); 

// letters color change function 
const text = document.getElementById('hero-text');
const letters = text.textContent.split('');

text.innerHTML = letters
  .map(letter => `<span>${letter}</span>`)
  .join('');

const spans = text.getElementsByTagName('span');
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('mouseover', function() {
    this.classList.add('hovered');
  });
  spans[i].addEventListener('mouseout', function() {
    this.classList.remove('hovered');
  });
}