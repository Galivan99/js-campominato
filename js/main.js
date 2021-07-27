// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var a_bomb = [];
var num_user = [];
var score = 0;
var difficulty;
var check_d = false;

// Scelta difficoltà
while (check_d == false) 
{
    difficulty = diff_choice();
    if (difficulty == "normale") {
      check_d = true;
    } else if (difficulty == "difficile") {
      check_d = true;
    } else if (difficulty == "moltodifficile") {
      check_d = true;
    } else {
      check_d = false;
    }
  }

function diff_choice(difficolta) 
{
    return difficulty = prompt("Scegli la difficoltà tra Normale , Difficile , Molto difficile").replace(/\s/g ,"").toLowerCase();
}

//check difficoltà & creazione numeri

for (var i = 0; i < 16; i++) {
    
    switch (difficulty) {

      case "normale":

        var num_random = Math.floor( Math.random() * 100) + 1;
          if (a_bomb.includes(num_random)) {
            i--; }

          else {
            a_bomb.push(num_random);
          }
          
        break;

      case "difficile":

        var num_random = Math.floor( Math.random() * 80) + 1;
            if (a_bomb.includes(num_random)) {
              i--; }

            else {
              a_bomb.push(num_random);
            }

        break;

      case "moltodifficile":

        var num_random = Math.floor( Math.random() * 50) + 1;

            if (a_bomb.includes(num_random)) {
              i--; }
            else {

              a_bomb.push(num_random);
            }

        break;

      default:
        difficulty = false;
    }
}
console.log(a_bomb);

// num_user e controllo
var loser = false

if (difficulty == "normale") {
    while (loser == false) {

        num_user_ins = parseInt(prompt("Inserisci un numero"));

        if (num_user_ins < 1 || num_user_ins > 100 || isNaN(num_user_ins)) {
            alert("Devi inserire un numero tra 1 e 100");
        

        } 
        else if (num_user.includes(num_user_ins)) {
            alert("Non puoi inserire lo stesso numero");
        

        } 
        else if (a_bomb.includes(num_user_ins)) {
            alert("Hai perso");
            loser = true;

        } 
        else {
            num_user.push(num_user_ins);
            score += 1;
        }
    }
}

else if (difficulty == "difficile") {
    while (loser == false) {

        num_user_ins = parseInt(prompt("Inserisci un numero"));

        if (num_user_ins < 1 || num_user_ins > 80 || isNaN(num_user_ins)) {
            alert("Devi inserire un numero tra 1 e 80");
        

        } 
        else if (num_user.includes(num_user_ins)) {
            alert("Non puoi inserire lo stesso numero");
        

        } 
        else if (a_bomb.includes(num_user_ins)) {
            alert("Hai perso");
            loser = true;

        } 
        else {
            num_user.push(num_user_ins);
            score += 1;
        }
    }
}

else if (difficulty == "moltodifficile") {
    while (loser == false) {

        num_user_ins = parseInt(prompt("Inserisci un numero"));

        if (num_user_ins < 1 || num_user_ins > 50 || isNaN(num_user_ins)) {
            alert("Devi inserire un numero tra 1 e 50");
        

        } 
        else if (num_user.includes(num_user_ins)) {
            alert("Non puoi inserire lo stesso numero");
        

        } 
        else if (a_bomb.includes(num_user_ins)) {
            alert("Hai perso");
            loser = true;

        } 
        else {
            num_user.push(num_user_ins);
            score += 1;
        }
    }
}

console.log(num_user);
console.log("Hai totalizzato : " + score + " punti");