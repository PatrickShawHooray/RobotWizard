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
         var penis = "penis";
      } else {
         var imgName = currentTD.childNodes[1].src.replace(/^.*[\\\/]/, '');
         currentTD.childNodes[1].src = currentTD.childNodes[1].src.replace(imgName, "yes-" + imgName);
      }

   }

   roboWizWipe(isCorrect);
}
