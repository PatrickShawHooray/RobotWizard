﻿var CORRECT_ORDER;

$(document).ready(function () {
   // set the sun
   $('body').css('background', 'url(' + background + ')');
   $('body').css('background-repeat', 'no-repeat');
   $('body').css('background-position', '0% 20%');

   $('.sortImg').click(function (e) {
      e.preventDefault();
   });
});

var initGame = function () {
   CORRECT_ORDER = correctOrder;
}

var soundFX = function (item) {
   switch (item) {
      case 'planetDrop':
         var sound = document.getElementById('planetDrop');
         sound.play();
         break;
      case 'planetClick':
         var sound = document.getElementById('planetClick');
         sound.play();
         break;
      case 'wrong':
         var sound = document.getElementById('wrong');
         sound.play();
         break;
      case 'laugh':
         var sound = document.getElementById('laugh');
         sound.play();
         break;
      case 'correct':
         var sound = document.getElementById('correct');
         sound.play();
         break;
   }
} 