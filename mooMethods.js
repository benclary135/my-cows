let pOneCows, pOneCash, pTwoCows, pTwoCash, pOneTemp, pTwoTemp = 0;
let pOneDead, pTwoDead = false;

function myCows(playerScore, targetedPDead) {
    playerScore++;
    targetedPDead = true;
}

function mySteeple(playerScore) {
    playerScore = playerScore * 2;
}

function myGraveyard(targetedPlayerScore, targetedPlayerDead, targetedPlayerTemp) {
    targetedPlayerTemp = targetedPlayerScore;
    targetedPlayerScore = 0;
    targetedPlayerDead = true;
}

function myGoats(playerScore) {
    let temp = Math.floor(playerScore/2);
    playerScore = playerScore + temp;
}

function myDollarGeneral(playerCash) {
    playerCash++;
}

function myAnimalHospital(playerScore, playerDead, playerTemp) {
    if (playerDead == false) {
        alert ("Your cows weren't recently murdered!  Darn.")
    } else {
        playerScore = playerTemp;
        playerTemp = 0;
        playerDead = false;
    }
}