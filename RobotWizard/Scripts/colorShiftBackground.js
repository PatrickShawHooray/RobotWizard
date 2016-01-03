var r = 255;
var g = 255;
var b = 153;
var gChange = -5;
var bChange = -5;

timer = setInterval(function () {
   if (g <= 113) {
      gChange = 10;
   } else if (g >= 255) {
      gChange = -10;
   }

   g += gChange;

   if (b <= 0) {
      bChange = 15;
   } else if (b >= 255) {
      bChange = -15;
   }

   b += bChange;

   var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';

   $('body').css('backgroundColor', randomColor);
}, 1000);