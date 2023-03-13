
let counts1 = setInterval(updated1);
let upto1 = 0;

function updated1() {
  var count1 = document.getElementById("count1-number");
   count1.innerText = ++upto1;
   if(upto === 63584) {
       clearInterval(counts1);
   }
}




let counts = setInterval(updated);
let upto = 0;

function updated() {
  var count2 = document.getElementById("count2-number");
   count2.innerText = ++upto;
   if(upto === 6358) {
       clearInterval(counts);
   }  
}

let counts3 = setInterval(updated3);
let upto3 = 0;

function updated3() {
  var count3 = document.getElementById("count3-number");
   count3.innerText = ++upto3;
   if(upto3 === 12546) {
       clearInterval(counts3);
   }
}



let counts4 = setInterval(updated4);
let upto4 = 0;

function updated4() {
  var count4 = document.getElementById("count4-number");
   count4.innerText = ++upto4;
   if(upto4 === 6358) {
       clearInterval(counts4);
   }
}