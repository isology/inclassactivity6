var clicks = 0;
var maxClicks = 3;
var level = 1;
var timeout = 500;

function changePosition() {
  var button = document.getElementById("btn");
  var randomMarginTop = Math.random() * (window.innerHeight - button.offsetHeight);
  var randomMarginLeft = Math.random() * (window.innerWidth - button.offsetWidth);
  button.style.marginTop = randomMarginTop + "px";
  button.style.marginLeft = randomMarginLeft + "px";
  
 
}
function Clicked() {
    clicks++;
    setTimeout(changePosition, timeout-100)
  if (clicks >= maxClicks) {
    alert("Congratulations! You won level " + level);
    level++;
    maxClicks = 3; 
    timeout -= 100; 
    clicks = 0; 
    if (level < 6 && clicks==3) {
      alert("You've completed all levels! Congratulations!");
      setTimeout(changePosition, timeout);
        
    } else {
        if (level >= 6) {
            alert("You've lost the Game");
            level = 0;
          } else {
            level++;
          }
    }
  }
}