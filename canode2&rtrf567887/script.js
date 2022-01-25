document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navBar').classList.add('fixed-top');
        document.getElementById('navBar').classList.add('lightBg');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navBar').classList.remove('fixed-top');
        document.getElementById('navBar').classList.remove('lightBg');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 