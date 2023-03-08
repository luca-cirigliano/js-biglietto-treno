/* 

context: 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

*/

/* lista strumenti

- prompt
- const 
- let
- console.log
- if else
-number
*/

// Chiedo all'utente quanti km deve percorrere e controllo che sia un numero 

const km = Number(prompt('quanti km devi percorrere?'));
console.log(`km = ${km}`)

//e che sia maggiore di 0
if (isNaN(km) || km <= 0) {
    alert("ERRORE: Il valore deve essere un numero maggiore di 0.");
  }

// Chiedo all'utente l'età e controllo che sia un numero 
const userAge = Number(prompt('quanti anni hai?'));
console.log(`age = ${userAge}`)


//e che sia maggiore o uguale a 0
if (isNaN(userAge) || userAge <= 0) {
    alert("ERRORE: Il valore deve essere un numero maggiore di 0.");
  }


// Calcolo il costo totale del viaggio

// Calcolo lo sconto per minorenni e over65

// Formatto il prezzo scontato per avere due cifre decimali

// Mostro all'utente il prezzo finale in pagina
