
var playerTable = document.querySelector(".playertable");
var playerPrvi = document.querySelector(".player1");
var playerDrugi = document.querySelector(".player2");
var info = document.querySelector(".info");
var kockicaJedan = document.querySelector(".kockicaJedan");
var kockicaDva = document.querySelector(".kockicaDva");
var gameWiner = document.querySelector(".gameWiner");
var plyOne = document.querySelector("#plyOne");
var plyTwo = document.querySelector("#plyTwo");
var novaPartija = document.querySelector("#novaPartija");

var player1 = prompt('Unesite vase ime:');
var player2 = prompt('Unesite vase ime:');

var k1;
var k2;
var round = 0;
var player1Score = 0;
var player2Score = 0;

playerPrvi.innerHTML = player1;
playerDrugi.innerHTML = player2;
gameWiner.style.display = "none";

plyOne.addEventListener('click', bacanjeKockice1);
plyTwo.addEventListener('click', bacanjeKockice2);
novaPartija.addEventListener('click', zapocniNovuPartiju);

function bacanjeKockice1() {
    this.setAttribute('disabled', 'disabled');
    plyTwo.removeAttribute('disabled');
    round++;
    k1 = Math.ceil(Math.random() * 6);
    k2 = Math.ceil(Math.random() * 6);
    kockicaJedan.innerHTML = k1;
    kockicaDva.innerHTML = k2;
    player1Score += k1;
    player2Score += k2;
    plyTwo.style.background = "greenyellow";
    plyOne.style.background = "whitesmoke";

    if (round === 10) {
        gameWiner.style.display = "block";
        info.style.display = "none";
        novaPartija.style.display = "block";
        pobednik();
    } else {

        var obavestenje = `${player1Score}  *** RUNDA ${round} *** ${player2Score}`;
        info.innerHTML = obavestenje;
    }
}

function bacanjeKockice2() {
    this.setAttribute('disabled', 'disabled');
    plyOne.removeAttribute('disabled');
    round++;
    k1 = Math.ceil(Math.random() * 6);
    k2 = Math.ceil(Math.random() * 6);
    kockicaJedan.innerHTML = k1;
    kockicaDva.innerHTML = k2;
    player1Score += k1;
    player2Score += k2;
    plyOne.style.background = "greenyellow";
    plyTwo.style.background = "whitesmoke";

    if (round === 10) {
        gameWiner.style.display = "block";
        info.style.display = "none";
        novaPartija.style.display = "block";
        pobednik();
    } else {

        var obavestenje = `${player1Score}  ***RUNDA ${round}*** ${player2Score}`;
        info.innerHTML = obavestenje;
    }
}

function zapocniNovuPartiju() {
    round = 0;
    player1Score = 0;
    player2Score = 0;
    gameWiner.innerHTML = '';
    gameWiner.style.display = "none";
    info.innerHTML = "";
    info.style.display = "block";
    kockicaJedan.innerHTML = "";
    kockicaDva.innerHTML = "";
    novaPartija.style.display = "none";
    showTable();

}


function pobednik() {
    if (player1Score > player2Score) {
        gameWiner.innerHTML = `POBEDNIK JE
${player1}`;
    } else if (player1Score < player2Score) {
        gameWiner.innerHTML = `POBEDNIK JE
${player2}`;
    } else {
        gameWiner.innerHTML = "NERESENO-NEMAMO POBEDNIKA";
    }
    plyTwo.style.background = "whitesmoke";
    plyOne.style.background = "whitesmoke";
    setTimeout( blockTable,1500);
}

function blockTable() {
    kockicaJedan.style.display = "none";
    kockicaDva.style.display = "none";
    plyOne.style.display = "none";
    plyTwo.style.display = "none";
}

function showTable() {
    kockicaJedan.style.display = "block";
    kockicaDva.style.display = "block";
    plyOne.style.display = "block";
    plyTwo.style.display = "block";
}