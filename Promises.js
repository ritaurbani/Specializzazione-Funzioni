//wrappare fetch in una funzione

function handleError(error) {
    console.error(error)
}

//fetch ci ritorna promise>la promise di questo fetch ci ritorna response > 
// (oggetto di tipo promise particolare del fetch)
//attenzione anche allo stato(pending o altro)
//in console se vedi promise> response, tra i vari medodi c e funzione json
const fetchRequest = fetch(`http://dummyjson.com/users/1`)

function resolveFetch(response) {
    // e una promise che rappresenta operazione di trasformazione body in oggetto
    return response.json()//funzione json che ritorna promise che quando risolta passa a resolved la risposta
}

//questa e una promise quindi possiamo aggiungere .then
//passando la resolveFetch otterro la response.json
const jsonTransformation = fetchRequest
    .then(resolveFetch)
    .catch(handleError)
//possiamo passare dentro la funzione/callback che viene eseguita in resolve

//vediamo cosa succede quando otteniamo l oggetto, passiamo fun anonima con oggetto trasformato
jsonTransformation
    .then(function (obj) {
        console.log(obj)
    })
    .catch(handleError)

console.log(fetchRequest)

////////////////////////
//Possiamo quindi attaccare .then() per ottenere il risultato e .catch() per gestire errori.
//FUNZIONE FETCH RESTITUISCE UNA PROMISE RISOLTA CON LA RISPOSTA DAL SERVER 
//IN RESOLVE passiamo dati ottenuti

fetch(`http://dummyjson.com/users/1`)
    .then(response => response.json()) //arrow func in una sola riga
    // .then(function(response) {return response.json()}) //puoi scrivere cosi
    .then(data => console.log(data)) //obj anche ok
    .catch(error => console.error(error))

//DOPPIO THEN E BRUTTO DA VEDERE> CREIAMO FUNZIONE DA WRAPPARE
//ci tornera una promise: ci mettera un po di tempo e non so se andra a buon fine
const getUser = (id) => {
    //cosa passo al costruttore Promise? accetta una funzione con due parametri, una callback che rappresenta l`operazione da fare > fetch...
    //resolve viene chiamato quando operazione ha success e passiamo dati ottenuti
    //reject chiamato quando operazione fallisce
    const promessa = new Promise((resolve, reject) => {
        fetch(`http://dummyjson.com/users/${id}`)
        //primo then riceve risposta http e chiama response.json()
        //che restituisce un`alra Promise che converte la risposta in JSON
            .then(response => response.json()) //arrow func in una sola riga
            // .then(function(response) {return response.json()}) //puoi scrivere cosi
            // .then(data => console.log(data)) //obj anche ok
            //in resolve passiamo i dati ottenuti
            .then(data => resolve(data)) //faccio resolve dell obj perche tutto e andato a buon fine
            // .catch(error => console.error(error))
            .catch(reject)//passo funzione reject che poi verra utilizzata
    })
    return promessa
}
//La funzione ritorna la Promise, permettendoci di usare .then() e .catch() quando chiamiamo getUser(id).
//per chiamarla, metto id, 
// THEN RACCOGLIE IL VALORE RESOLVE DELLA PROMISE - mi ritorna promise quindi attacco .then
getUser(1)//ritorna promise
.then(data => console.log(data))//passiamo dati ottenuti
.catch(error => console.error(error)) //funzione che prende l errore e me lo stampa in console

//possiamo chiamare getUser(2)...mi arrivano in tempi diversi ma lavorano in parallelo
//programmazione asincrona



//////////TESTA O CROCE//////////////////
//per far si che sia una Promise> arbitrarieta e ci vuole un po di tempo quindi usiamo settimeout
function lanciaMoneta(scelta) {
 return new Promise((resolve, reject) => {
    console.log("Sto lanciando la moneta...");
    setTimeout(() => {
        const valore = Math.round(Math.random()) //sempre uguale a 0 oppure 1 
        const lancio = valore === 0 ? "testa" : "croce";
        if(lancio === scelta){
            resolve("hai vinto")
        }else {
            reject("hai perso")
        }
    }, 3000)
 })
}

//nel resolve cosa deve tornare? lancio e`uguale a scelta passato nel lanciaMoneta

lanciaMoneta("testa")//ritorna una promise
.then(messaggio => console.log(messaggio))//se vinco passo messaggio che posso print
.catch(error => console.error(error)) //stampo error nel caso in cui perdo

/////////////GEOLOCATION////////////////////////



