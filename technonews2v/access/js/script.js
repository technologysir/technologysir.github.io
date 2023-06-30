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
var cvl = document.getElementById('cvl');
var F1 = document.getElementById('F1');
var F2 = document.getElementById('F2');
var F3 = document.getElementById('F3');
var col = document.getElementById('col');
var cul = document.getElementById('cul');
var sdfg = document.getElementById('bkl');
var clbtn = document.getElementById('clbtn');
var cl2 = document.getElementById('cl2');
cl2.style.display = 'none';
var sdfa = document.getElementById('sdfa');
col.addEventListener("click",function name() {
    cul.style.display = 'none';
    cvl.style.display = 'flex';
})
F1.addEventListener("click",function name2() {
    cul.style.display = 'block';
    cvl.style.display = 'none';
})
F2.addEventListener("click",function name2() {
    sdfg.style.display = 'block';
    cvl.style.display = 'none';
})
clbtn.addEventListener("click",function name2() {
    sdfg.style.display = 'none';
    cvl.style.display = 'flex';
})
F3.addEventListener("click",function name2() {
    sdfa.style.display = 'block';
    sdfa.style.position = 'fixed';
    sdfa.style.left = '0';
    sdfa.style.flex = '10% 0 0';
    cl2.style.display = 'block';
    cvl.style.display = 'none';
})
cl2.addEventListener("click",function name2() {
    sdfa.style.display = 'none';
    sdfa.style.flex = '0% 0 0';
    sdfa.style.position = 'relative';
    cvl.style.display = 'flex';
    cl2.style.display = 'none';
})
//==============================================================================================//


