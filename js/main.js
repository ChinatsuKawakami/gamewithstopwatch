/*
Author: Chinatsu Kawakami
Create Date: 2017-09-13
Modified Date: 2017-09-14
Description : This is the main.js file
*/


(function (){
'use strict';

var start = document.getElementById('start');

var stop = document.getElementById('stop');

var result = document.getElementById('result');

var startTime;

start.addEventListener('click',function(){
   startTime = Date.now();
   this.className = 'pushed';
   stop.className = '';
});

stop.addEventListener('click',function(){
   var elapsedTime;
   var diff;

   elapsedTime = (Date.now()-startTime) / 1000;
   result.textContent = elapsedTime.toFixed(3);
   this.className = 'pushed';
   start.className = '';
   diff = elapsedTime - 5.0;
   //if(diff > -1.0 && diff < 1.0){
     if(Math.abs(diff) < 1.0){
      result.className = 'perfect';
   }
   });
})();