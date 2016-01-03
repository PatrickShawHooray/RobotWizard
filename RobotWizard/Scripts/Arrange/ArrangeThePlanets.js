var CORRECT_ORDER;

$(document).ready(function () {
   // set the sun
   $('body').css('background-image', background);
   $('body').css('background-repeat', 'no-repeat');
   $('body').css('background-position', '0% 20%');

   $('.sortImg').click(function (e) {
      e.preventDefault();
   });
});

var initGame = function () {
   CORRECT_ORDER = correctOrder;
}