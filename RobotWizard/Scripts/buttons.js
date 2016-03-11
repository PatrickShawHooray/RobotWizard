$(document).ready(function () {
   $(".pBtn").on("mousedown", function (e) {
      var imageId = (this.children[0].id);
      var image = document.getElementById(imageId);
      image.src = image.src.substring(0, image.src.lastIndexOf("/") + 1) + imageId + "Click.png";  
   });
   $(".pBtn").on("mouseup", function () {
      var imageId = (this.children[0].id);
      var image = document.getElementById(imageId);
      image.src = image.src.substring(0, image.src.lastIndexOf("/") + 1) + imageId + ".png";
   });
   $(".pBtn").on("mouseover", function () {
      var imageId = (this.children[0].id);
      var image = document.getElementById(imageId);
      image.src = image.src.substring(0, image.src.lastIndexOf("/") + 1) + imageId + "Hover.png";
   });
   $(".pBtn").on("mouseout", function () {
      var imageId = (this.children[0].id);
      var image = document.getElementById(imageId);
      image.src = image.src.substring(0, image.src.lastIndexOf("/") + 1) + imageId + ".png";
   });
   $("#home").on("click", function () {
      window.location.replace("http://localhost/RobotWizard/Home/Start");
   });


});


function judgement() {
   var isCorrect = true;
   var buttonsToDisalbe = document.getElementsByClassName("pBtn");
   var sortsToDisalbe = document.getElementsByClassName("sortImg");

   if (buttonsToDisalbe.length > 0) {
      for (var i = 0; i < buttonsToDisalbe.length; i++) {
         buttonsToDisalbe[i].disabled = true;
      }
   }

   if (sortsToDisalbe.length > 0) {
      for (var i = 0; i < sortsToDisalbe.length; i++) {
         sortsToDisalbe[i].draggable = false;
      }
   }

   for (var i = 0; i < CORRECT_ORDER.length; i++) {
      var currentTD = document.getElementById(i);
      if (!(CURRENT_ORDER[i] == CORRECT_ORDER[i])) {
         isCorrect = false;
         var imgName = currentTD.childNodes[1].src.replace(/^.*[\\\/]/, '');
         currentTD.childNodes[1].src = currentTD.childNodes[1].src.replace(imgName, "no-" + imgName);
         var penis = "penis"; // ha! made you look
      } else {
         var imgName = currentTD.childNodes[1].src.replace(/^.*[\\\/]/, '');
         currentTD.childNodes[1].src = currentTD.childNodes[1].src.replace(imgName, "yes-" + imgName);
      }
   }

   roboWizWipe(isCorrect);
}

// judgement from the robot wizard himself!
var roboWizWipe = function (isCorrect) {
   var winHeight = $(window).height();
   var winWidth = $(window).height();

   var roboWizWipe = document.getElementById("roboWizWipe");
   setMessage(isCorrect);

   if (!isCorrect) {
      $(document.body).css("background", 'transparent');
      $(document.body).css("background-color", "#ffe5e5");

      var leftTopPosition = winWidth / 1.5,
         bottomTopPosition = winHeight / 3.9,
         leftBottomPosition = winWidth / 1.7,
         bottomBottomPosition = winHeight / 3.7;

      var mid = document.getElementById('middle3rd');
      var bottom = document.getElementById('bottom3rd');
      mid.style.opacity = "0.5";
      bottom.style.opacity = "0.5";

      roboWizWipe.style.display = "inline";
      roboWizWipe.style.bottom = -55 + "%";
      roboWizWipe.style.left = 0;
      soundFX('laugh');

      $("#roboWizWipe").animate({      // goin up
         bottom: bottomTopPosition,
         left: leftTopPosition
      }, 1300, function () {
      });

      setTimeout(function () { location.reload() }, 2000);
   } else {
      // show and let next and home buttons work
      document.getElementById("nextBtn").disabled = false;
      document.getElementById("routeBox").style.display= "block";
      document.getElementById("homeBtn").disabled = false;

      var mid = document.getElementById('middle3rd');
      var bottom = document.getElementById('bottom3rd');

      $(document.body).css("background", 'transparent')
      $(document.body).css("background-color", "#e5ffe5");

      mid.style.opacity = "0.5";
      bottom.style.display = "none";

      roboWizWipe.style.display = "inline";
      roboWizWipe.style.top = 70 + "%";
      roboWizWipe.style.left = 50 + "%";
      roboWizWipe.style.transform = "translate(-50%, -50%)"

      soundFX('correct');

      robotWizardPic.style.display = "block";
      robotWizardPic.style.marginLeft = "auto";
      robotWizardPic.style.marginRight = "auto";
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

