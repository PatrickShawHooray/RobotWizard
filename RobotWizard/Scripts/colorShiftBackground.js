var r, g, b;
var gChange, bChange, rChange;

$(function(){
    r = Math.floor((Math.random() * 254) + 1);
    g = Math.floor((Math.random() * 254) + 1);
    b = Math.floor((Math.random() * 254) + 1);

    gChange = Math.floor((Math.random() * 40) + 1);
    bChange = Math.floor((Math.random() * 22) + 1);
    rChange = Math.floor((Math.random() * 10) + 1);
});

timer = setInterval(function () {
   if (g <= 2) {
      gChange = 10;
   } else if (g >= 255) {
      gChange = -10;
   }

   g += gChange;

   if (b <= 0) {
      bChange = 50;
   } else if (b >= 255) {
      bChange = -50;
   }

   b += bChange;

   if (r <= 2) {
       rChange = 30;
   } else if (r >= 255) {
       rChange = -30;
   }

   r += rChange;

   var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';

   $('#homeSplashContainer').css('backgroundColor', randomColor);
}, 500);