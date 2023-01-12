var bd = new XMLHttpRequest();
var h1 = document.getElementByID("h1");
var bt = document.getElementByID("bt");

bt.addEventListener("click",function() {
 bd.onload = function(){    
    var datax = JSON.parse(bd.responseText);
    bd.open('GET','/db(json)/db.json');
    document.write("datax");
    //data(datax);
    
};   bd.send();
});


function data(data){
   var htx = "empty";
   for (i = 0 ;i < datax.length ;i++){
    htx =  data[i].name;
   }

   h1.insertAdjacentHTML('beforeend',htx)
};