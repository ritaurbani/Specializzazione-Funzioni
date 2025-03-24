//Promise.all() ci permette di gestire operazioni asincrone multiple in parallelo

//ci ritorna un altra promise che risolve un array con i risultati risolti delle varie promise nel loro ordine
//promise all ritorna array di risultati

//CHIAMATE A CATENA

const eseguiTask = (durata) => {//questa funzione crea una promise risolta dopo durata ms
    return new Promise((resolve, reject) => {
        if (!durata) {//se falsy: 0, null, undefined..
            reject("Non hai fornito durata")
        } else {//se durata e`valida..
            setTimeout(() => {
                resolve("task effettuata")
            }, durata)
        }
    })
}

// eseguiTask()//se non metto nulla errore "non hai fornito durata"
// eseguiTask(1000)//restituisce promise che si risolvera dopo 1 sec
// .then(msg => console.log(msg))//eseguito quando la promise si risolve, nel .then mostrero quello contenuto nel resolve
// .catch()//eseguito se c`e`un errore

//PROBLEMA CON ASYNC-AWAIT che interrompe il flusso

//Con await assegnamo il valore direttamente a una variabile(const messaggio = await eseguiTask(1000);).
//Con.then() dobbiamo passarlo dentro una funzione di callback(.then(msg => console.log(msg))).

//Creo contesto asincrono nel contesto globale con funzione immediatamente invocata
(async () => {//IIFE(immediately invoked function expression)-per poter usare await nel codice globale
    const messaggio = await eseguiTask(1000)//await aspetta che la Promise sia completata prima di proseguire-BLOCCA IL FLUSSO
    console.log(messaggio)//costante messaggio accoglie il risultato della promise risolta, cioe il valore passato a resolve()-come fa il then
    //Se voglio fare questa operazione piu volte? ripeto le due linee sopra
    const msg2 = await eseguiTask(2000)//codice non va avanti se prima non stampiamo le precedenti
    console.log(msg2)
    const msg3 = await eseguiTask(2000)
    console.log(msg3)
    const msg4 = await eseguiTask(2000)
    console.log(msg4)

})();

//IMPORTANT!!
//Dobbiamo salvare le promises in un array e passarle a un promise.all
//Meglio non usare la await, perche non dobbiamo ottenere un risultato ma salvare la Promise dentro al nostro array
//La promise.all ci ritorna un altra promise che risolve un array con i risultati risolti delle varie promise nel loro ordine


(async () => {
    try {//deve reccogliere i rejects - catturiamo gli errori Ex: promise 2 non ha durata > reject
        const promise1 = eseguiTask(2000)//se questo era 3 secs> allora risultato dopo 3 secs
        const promise2 = eseguiTask(2000)//se questo non ha durata eseguiTask() e quindi la mando in reject, deve essere raccola da catch da try catch 
        const promise3 = eseguiTask(2000)
        const tuttiIMessaggi = await Promise.all([promise1, promise2, promise3])//promiseall ritorna a sua volta una promise
        console.log(tuttiIMessaggi)//questa console.log avverra dopo 2 sec - ci troviamo array con i vari tasks - perche in parallelo-e non dopo 6 sec 
    } catch (error) {
        console.error(error)
    }

})();