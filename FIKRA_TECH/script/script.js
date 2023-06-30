let nab = document.querySelectorAll('.nav li');
let tomu = document.querySelector('.tomu');
let header = document.querySelector('header')
function oneyes() {
    nab.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active')
}
nab.forEach((i) => 
i.addEventListener('click',oneyes));

tomu.onclick = function(){
    header.classList.toggle('active')
}
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

