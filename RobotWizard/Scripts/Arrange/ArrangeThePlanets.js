var CORRECT_ORDER;

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

var planetSmallToBig = function () {
   var planetImages = document.getElementsByClassName("sortImg");
   $("#planetStats").show();
   
   // store initial widths of images
   var imgInitWidths = [];
   for (k = 0; k < planetImages.length; k++){
      imgInitWidths.push($(planetImages[k]).width());
   }

   for (i = 0; i < planetImages.length; i++) {
      // figure out which planet we dealin' with yo!
      for (j = 0; j < additionalInfo.length; j++) {
         if (additionalInfo[j].indexOf(planetImages[i].id) != -1) {
            break;
         }
      }

      // set planet info 
      var thisPlanetInfo = additionalInfo[j].split('|');
      var currentTD = document.getElementById('planetInfo' + i);
      currentTD.innerHTML = thisPlanetInfo[0] + "<br />" + thisPlanetInfo[1];
      currentTD.style.textAlign = "center";
      currentTD.style.paddingRight = "4%";

      // change the size of the planet
      var percentAlter = thisPlanetInfo[1].substr(0, thisPlanetInfo[1].indexOf("%")) / 450;

      $(planetImages[i]).width(imgInitWidths[i] * percentAlter);

      if (planetImages[i].id == "Saturn") {
         $(planetImages[i]).width($(planetImages[i]).width() * .89);
      }
   }
}