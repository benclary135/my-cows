function player(cows, shedCows, cash, victim, temp) {
    this.cows = cows;
    this.shedCows = shedCows;
    this.cash = cash;
    this.victim = victim;
    this.temp = temp;
}

let pOne = new player(0, 0, 0, 0, false, 0);
let pTwo = new player(0, 0, 0, 0, false, 0);
let pOneScore = 0;
let pTwoScore = 0;

function updateScores() {
    pOneScore = pOne.cows + pOne.shedCows;
    pTwoScore = pTwo.cows + pTwo.shedCows;
    let pOneLiveScore = document.getElementById("pOneLiveScore");
    let pTwoLiveScore = document.getElementById("pTwoLiveScore");
    let pOneLiveCash = document.getElementById("pOneLiveCash");
    let pTwoLiveCash = document.getElementById("pTwoLiveCash");
    pOneLiveScore.innerHTML = pOneScore;
    pTwoLiveScore.innerHTML = pTwoScore;
    pOneLiveCash.innerHTML = "$" + pOne.cash;
    pTwoLiveCash.innerHTML = "$" + pTwo.cash;
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

function endGame() {
    updateScores();
    if (pOneScore === pTwoScore) {
        if (pOne.cash > pTwo.cash) {
            alert("Player one wins by a cash value tie-breaker!!!  What a close game!");
        } else if (pTwo.cash > pOne.cash) {
            alert("Player two wins by a cash value tie-breaker!!!  What a close game!");
        } else if (pOne.cash === pTwo.cash) {
            alert("It's a true tie!!!  Both players have an equal amount of cows and cash!");
        } else {
            alert("Huh?  Something's weird....");
        }
    } else if (pOneScore > pTwoScore) {
        alert("Player One wins with a cow victory!!!");
    } else if (pTwoScore > pOneScore) {
        alert("Player Two wins with a cow victory!!!");
    } else {
        alert("Huh?  Something's weird...");
    }
    pOne.cows = 0;
    pTwo.cows = 0;
    pOne.shedCows = 0;
    pTwo.shedCows = 0;
    pOne.cash = 0;
    pTwo.cash = 0;
    pOne.victim = false;
    pTwo.victim = false;
    pOne.temp = 0;
    pTwo.temp = 0;
    pOneScore = 0;
    pTwoScore = 0;
    updateScores();
}

