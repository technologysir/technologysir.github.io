let slideIndex = 0;
showits();

function showits() {
  let i;
  let its = document.getElementsByClassName("its");
  for (i = 0; i < 9 ; i++) {
    its[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > 4) {slideIndex = 1}    
  its[slideIndex].style.display = "block";  
  its[slideIndex-1].style.display = "block";  
  its[slideIndex+1].style.display = "block";  
  setTimeout(showits, 900);
}
