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

