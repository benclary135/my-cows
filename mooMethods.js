function Player(cows, shedCows, cash, victim, temp) {
    this.cows = cows;
    this.shedCows = shedCows;
    this.cash = cash;
    this.victim = victim;
    this.temp = temp;
}

let pOne = new Player(0, 0, 0, 0, false, 0);
let pTwo = new Player(0, 0, 0, 0, false, 0);
let pOneScore = 0;
let pTwoScore = 0;

function updateScores() {
    pOneScore = pOne.cows + pOne.shedCows;
    pTwoScore = pTwo.cows + pTwo.shedCows;
}

function myCows(player) {
    player.cows += 1;
    player.victim = false;
    updateScores();
}

function mySteeple(player) {
    player.cows *= 2;
    updateScores();
}

function myGraveyard(targetedPlayer) {
    targetedPlayer.temp = targetedPlayer.cows;
    targetedPlayer.cows = 0;
    targetedPlayer.victim = true;
    updateScores();
}

function myGoats(player) {
    player.cows = Math.floor(player.cows * 1.5);
    updateScores();
}

function myDollarGeneral(player) {
    player.cash += 1;
    updateScores();
}

function myAnimalHospital(player) {
    if (player.victim === false) {
        alert("Your cows haven't recently been murdered!  Oh well.");
    } else {
        player.cows = player.temp;
        player.temp = 0;
        player.victim = false;
    }
    updateScores();
}

function myShed(player) {
    if (player.cows < 2) {
        alert("You need at least two cows to fill a shed!");
    } else {
        player.shedCows += 2;
        player.cows -= 2;
    }
    updateScores();
}

