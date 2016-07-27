var IS_CORRECT = true;

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
      window.location.replace("/");
   });
   $("#next").on("click", function () {
      // if not correct - then reload current page
      if (!IS_CORRECT) {
         location.reload();
      } else {
         var current = window.location.href;
         var splitCurrent = current.split('/');
         splitCurrent[splitCurrent.length - 1] = nextGame;
         window.location = splitCurrent.join('/');
      }
   });

   $('#roboWizWipe').height($(window).height() - $('#header').height() - $('#top3rd').height() - $('#middle3rd').height() - $('#bottom3rd').height() - 40);
   $('#robotWizardPic').height($('#roboWizWipe').height() / 1.2);
});

function judgement() {
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
         IS_CORRECT = false;
         var imgName = currentTD.childNodes[1].src.replace(/^.*[\\\/]/, '');
         currentTD.childNodes[1].src = currentTD.childNodes[1].src.replace(imgName, "no-" + imgName);
         var penis = "penis"; // ha! made you look
      } else {
         var imgName = currentTD.childNodes[1].src.replace(/^.*[\\\/]/, '');
         currentTD.childNodes[1].src = currentTD.childNodes[1].src.replace(imgName, "yes-" + imgName);
      }
   }

   // reaplce next with try again if wrong
   if (!IS_CORRECT) {
      nextGame = window.location.href;
   }

   roboWizWipe();
}

// judgement from the robot wizard himself!
var roboWizWipe = function () {
   var winHeight = $(window).height();
   var winWidth = $(window).height();

   var roboWizWipe = document.getElementById("roboWizWipe");

   // show and let next and home buttons work
   document.getElementById("nextBtn").disabled = false;
   document.getElementById("routeBox").style.display = "block";
   document.getElementById("homeBtn").disabled = false;

   var mid = document.getElementById('middle3rd');
   var bottom = document.getElementById('bottom3rd');

   mid.style.opacity = "0.5";
   bottom.style.display = "none";

   // display robo wiz and center him
   roboWizWipe.style.display = "inline";
   roboWizWipe.style.top = 70 + "%";
   roboWizWipe.style.left = 50 + "%";
   roboWizWipe.style.transform = "translate(-50%, -50%)"
   robotWizardPic.style.display = "block";
   robotWizardPic.style.marginLeft = "auto";
   robotWizardPic.style.marginRight = "auto";

   // hide page background
   $(document.body).css("background", 'transparent')

   if (!IS_CORRECT) {
      // replace NEXT button with RETRY
      document.getElementById("next").src = "../Content/buttons/retry.png";
      document.getElementById("next").setAttribute("id", "retry");

      // red background - remove bakckground
      $(document.body).css("background", 'transparent');
      $(document.body).css("background-color", "#ffe5e5");

      soundFX('laugh');
      setMessage();
   } else {
      // green background
      $(document.body).css("background-color", "#e5ffe5");
      soundFX('correct');
      setMessage();
   }
}

var setMessage = function () {
   var roboWizWipeMessage = document.getElementById("roboWizWipeMessage");
   var fileToPullQuoteFrom;

   if (!IS_CORRECT) {
      message = failResponses[Math.floor((Math.random() * failResponses.length))];
   } else {
      message = winResponses[Math.floor((Math.random() * winResponses.length))];
   }

   roboWizWipeMessage.innerHTML = message;
}

