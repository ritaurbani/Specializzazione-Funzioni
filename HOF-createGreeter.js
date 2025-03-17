//Generatore di funzioni che salutano qualcuno in un modo specifico
//funzione ritornata sara anonima poiche usata in contesti differenti 

//la facciamo dichiarativa poiche siamo nello scope globale - quella che ritorna e`anonima
//la funzione interna che ritorno deve dire "Hello Rita"
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

// createGreeter("Hello")("Rita") ???

// ASSEGNAMO FUNZIONE ANONIMA A VARIABILE - sayHello mi ritorna un createGreeter di "Hello" per esempio

const sayHello = createGreeter("Hello"); //
//sto salvando in sayHello createGreeter che mi ritorna 
// function(name) {
//     console.log(`${greeting} ${name}`)
// }

// se lo eseguo senza parmetro mi ritorna undefined perche 
// sayHello e`la funzione che mi ha ritornato il createGreeter
//devo passare name

sayHello("Rita")
//sayHello e`questa funzione interna che mi e stata passata da createGreeter:
// function(name) {
//     console.log(`${greeting} ${name}`)
// }


//ora creo una funzione per dire addio
const sayGoodbye = createGreeter("Goodbye")
sayGoodbye("Rita")

// Riassunto veloce:
// ✅ createGreeter("Hello") ritorna una funzione → sayHello diventa quella funzione.
// ✅ sayHello("Rita") chiama quella funzione con name = "Rita".
// ✅ Stampiamo "Hello Rita".
// Quindi, guardando cosa ritorna una funzione, possiamo sapere cosa diventa la variabile a cui la assegnamo! 😊