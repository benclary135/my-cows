function Player(cows, cash, victim, temp) {
    this.cows = cows;
    this.cash = cash;
    this.victim = victim;
    this.temp = temp;
}

let playerOne = new Player(0, 0, false, 0);
let playerTwo = new Player(0, 0, false, 0);

function myCows(player) {
    player.cows += 1;
    player.victim = false;
}

function mySteeple(player) {
    player.cows *= 2;
}

function myGraveyard(targetedPlayer) {
    targetedPlayer.temp = targetedPlayer.cows;
    targetedPlayer.cows = 0;
    targetedPlayer.victim = true;
}

function myGoats(player) {
    player.cows = Math.floor(player.cows* 1.5);
}

function myDollarGeneral(player) {
    player.cash += 1;
}

function myAnimalHospital(player) {
    if (player.victim === false) {
        alert("Your cows haven't recently been murdered!  Oh well.");
    } else {
        player.cows = player.temp;
        player.temp = 0;
    }
}