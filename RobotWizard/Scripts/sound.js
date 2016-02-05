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