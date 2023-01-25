var header = document.getElementsByClassName('header')
window.addEventListener('scroll', () => {
  var scroll = window.scrollY;
  if (scroll > 10) {
    header.style.backgroundColor = '#0000';
  } else {
    header.style.backgroundColor = 'transparent';
  }
})
