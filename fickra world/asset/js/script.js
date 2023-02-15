function load(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}

let includes = Array.from(document.querySelectorAll('[data-include]'));
includes.map(include => {
    let file = include.dataset['include'] + '.html';
    load(include, file);
});

let sldnum = 0;
sdl();

function sdl() {
  let i;
  let slides = document.getElementsByClassName("sld");
  let dots = document.getElementsByClassName("ooo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  sldnum++;
  if (sldnum > slides.length) {sldnum = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sldnum-1].style.display = "block";  
  dots[sldnum-1].className += " active";
  setTimeout(sdl, 1000);
}