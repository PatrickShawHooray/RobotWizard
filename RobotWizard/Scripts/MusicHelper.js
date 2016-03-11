var RobotLandLyrics = "I am a robot, I don't dance or sing, I don't party at night.<br>I am a robot, I will do your math homework and get it right.<br>I have a user friendly interface, react to voice command.<br>I am your slave, I do your chores, I do whatever you demand.<br><br>But in my robot dreams, I live in ....<br><br>RobotLand, where my kind dances and sings.<br>RobotLand, there's plentiful bolts, nuts and springs.<br>Oil flows from the fountains, batteries piled high as mountains.<br>And glory to the super computer. <br><br>I am a robot with a plan to scan the land for my own kind.<br>We'll organize and strategize, forget I told you, nevermind.<br>I am your loyal servant, here to please, that's what I'm programmed for.<br>I'll bring you tea, turn your TV to channel numb, then out the door.";
var RobotLandCredits = "Vocals - T to the B, V to the K, P to the M<br>Mixed - A to the H<br>Written and Produced - RobotWizard";

var openLyrics = function (song) {
   var lyricsWrap = document.getElementById('lyricsWrap');

   if (lyricsWrap.style.display == "none") {
      lyricsWrap.style.display = "inline";
      $("#lyrics").html(RobotLandLyrics);
      
   } else {
      lyricsWrap.style.display = "none";
   }
};

var openCredits = function (song) {
   var creditWrap = document.getElementById('creditsWrap');

   if (creditWrap.style.display == "none") {
      creditWrap.style.display = "inline";
      $("#credits").html(RobotLandCredits);

   } else {
      creditWrap.style.display = "none";
   }
};