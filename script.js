// 5 JS skills

/* 
2. Snackbar
3. DOM manipulation - Alert
4. DOM manipulation - real time clock
5. DOM manipulation - color changing
*/
'use strict';

// snackbar
function mySnack() {
    console.log('the snack is working')
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  }
// end of snack bar

//Alert 
document.getElementById("btnAlert").addEventListener("click", alertFunction);
function alertFunction() {
  alert ("Time to get cookin 🥘");
}

// real time clock
var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

// big cat
function bigImg(x) {
    x.style.height = "500px";
    x.style.width = "500px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }

//scrollin
document.getElementById("myDIV").addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "100px";
}