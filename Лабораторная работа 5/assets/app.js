'use strict'
let a = document.querySelector(".current");
let b = document.querySelector(".spis");
a.onclick = myClick;

function myClick() {
   if(b.style.display === 'none') {
      b.style.display = 'block';
   }
   else {
      b.style.display = 'none';
   }
}



