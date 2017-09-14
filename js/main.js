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
});

stop.addEventListener('click',function(){
   var elapsedTime;
   elapsedTime = (Date.now()-startTime) / 1000;
   result.textContent = elapsedTime.toFixed(3);
   });
})();