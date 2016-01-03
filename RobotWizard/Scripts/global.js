// judgement from the robot wizard himself!
var roboWizWipe = function (isCorrect) {
   var roboWizWipe = document.getElementById("roboWizWipe");
   setMessage(isCorrect);

   if (!isCorrect) {
      var leftTopPosition = 400,
         bottomTopPosition = 0,
         leftBottomPosition = 700,
         bottomBottomPosition = -600;

      roboWizWipe.style.display = "inline";
      roboWizWipe.style.bottom = -55 + "%";
      roboWizWipe.style.left = 0;

      $("#roboWizWipe").animate({      // goin up
         bottom: bottomTopPosition,
         left: leftTopPosition
      }, 2000, function () {           // goin down
         $("#roboWizWipe").animate({      
            bottom: bottomBottomPosition,
            left: leftBottomPosition
         }, 2000, function () {
            // re-enable buttons prior to reload
            $(".pBtn").each(function (index) {
               $(this).prop("disabled", false);
            });
            location.reload();
         });
      });
   } else {
      roboWizWipe.style.display = "inline";
      roboWizWipe.style.top = 20 + "%";
      roboWizWipe.style.left = 20 + "%";
      roboWizWipe.style.border = "10px solid black";
      roboWizWipe.style.boxShadow = "0 0 0 20px #d43f3f, 0 0 0 45px #404040";
      roboWizWipe.style.backgroundColor = "#2bc0c0";
      roboWizWipe.style.padding = "20px";

   }
}

var setMessage = function (isCorrect) {
   var roboWizWipeMessage = document.getElementById("roboWizWipeMessage");
   var fileToPullQuoteFrom;

   if (!isCorrect) {
      message = failResponses[Math.floor((Math.random() * failResponses.length))];
   } else {
      message = winResponses[Math.floor((Math.random() * winResponses.length))];
   }

   roboWizWipeMessage.innerHTML = message;
}