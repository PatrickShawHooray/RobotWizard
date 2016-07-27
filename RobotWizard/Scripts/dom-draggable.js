var CORRECT_ORDER;
var CURRENT_ORDER = [];

document.addEventListener("dragend", function (ev) {
   isDragging = false;
}, false);

function getCurrentOrder() {
   var cells = getCells();
   var tempPlan;
   var cellLength = cells.length;
   CURRENT_ORDER = [];

   for (var j = 0; j < cellLength; j++) {
      tempPlan = cells.item(j).childNodes[1].id;

      CURRENT_ORDER.push(tempPlan);
   }
}

function allowDrop(ev) {
   ev.preventDefault();
   toLocation = ev.target.parentNode.id;
}

function drag(ev) {
   var cells = getCells();
   fromLocation = ev.target.parentNode.id;
   tempHold = cells.item(fromLocation).innerHTML;
}

function drop(ev) {
   ev.preventDefault();
   toLocation = ev.target.parentNode.id;
   var gameTable = document.getElementById("sortTable");
   var cells = gameTable.rows.item(0).cells;
   var currentTdHTML = cells.item(toLocation).innerHTML;
   
   // set the from location to the targeted data
   cells.item(fromLocation).innerHTML = currentTdHTML;
   cells.item(toLocation).innerHTML = tempHold;
  
   getCurrentOrder();
}

function getCells() {
   return document.getElementById("sortTable").rows.item(0).cells;
}
