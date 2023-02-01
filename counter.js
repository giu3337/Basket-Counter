// Scoreboard Counter 
let addElHome = document.getElementById("score-home-el");
let addElGuest = document.getElementById("score-guest-el");
let addELHomeFouls = document.getElementById("fouls-score-home")
let addELGuestFouls = document.getElementById("fouls-score-guest")
let whoWinsNow = document.getElementById("whosWinningTheGame")

let counterHome = 0; 
let counterGuest = 0;
let counterFoulsHome = 0;
let counterFoulsGuest = 0; 

// Home // 

// Add One Function: 

function addOne() {
    counterHome += 1;
    addElHome.textContent = counterHome;
    whoIsAhead()
}

// Add One Function: 

function addTwo() {
    counterHome += 2;
    addElHome.textContent = counterHome; 
    whoIsAhead()
}


// Add One Function: 

function addThree() {
    counterHome += 3;
    addElHome.textContent = counterHome;
    whoIsAhead()
}



// Guess // 


function addOneGuest() {
    counterGuest += 1;
    addElGuest.textContent = counterGuest;
    whoIsAhead() 
}

// Add One Function: 

function addTwoGuest() {
    counterGuest += 2;
    addElGuest.textContent = counterGuest;
    whoIsAhead()
}


// Add One Function: 

function addThreeGuest() {
    counterGuest += 3;
    addElGuest.textContent = counterGuest; 
    whoIsAhead()
}




// Reset Function: 


function reset() {
    counterHome = 0; 
    counterGuest = 0;
    counterFoulsHome = 0;
    counterFoulsGuest = 0; 
    addElHome.textContent = counterHome
    addElGuest.textContent = counterGuest
    addELHomeFouls.textContent = counterFoulsHome;
    addELGuestFouls.textContent = counterFoulsGuest;
    whoIsAhead()
}




// Counter Foul Home

function addFoulsHome(params) {
    counterFoulsHome += 1;
    addELHomeFouls.textContent = counterFoulsHome;
}





// Counter Foul Guest 

function addFoulGuest(parms) {
    counterFoulsGuest += 1;
    addELGuestFouls.textContent = counterFoulsGuest;
}


// Whos Whinning function 

function whoIsAhead() {
    if (counterHome > counterGuest) {
        return whoWinsNow.textContent = "⬅"
    } else if (counterGuest > counterHome) {
        return whoWinsNow.textContent = "⮕"
    } else {
        return whoWinsNow.textContent = "＝"
    }
    
}

console.log(
    whoIsAhead());

// Timer  "=" "⬅" "⮕" // ⬅ ⮕ 

var intervalId;

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  var thirtyMinutes = 60 * 30,
    display = document.querySelector('#timer-el');
  startTimer(thirtyMinutes, display);
}

window.onload = function () {
  var thirtyMinutes = 60 * 30,
    display = document.querySelector('#timer-el');
  startTimer(thirtyMinutes, display);
  document.getElementById("reset-btn").addEventListener("click", resetTimer);
};