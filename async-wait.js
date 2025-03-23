//trasformare getPost in una funzione asincrona
//Nota: per ogni fetch che facciamo, lo trasformiamo in oggetto con res.json
//1.CREO FUNZIONE DI SUPPORTO ASINCRONA (dichiarativa) per evitare di fare 2 await:uno sulla promise del fetch e uno sulla promise del res.json
//
//FETCHJSON IL RISULTATO E UNA PROMISE CHE RISOLVE NEL POST
async function fetchJson(url) {//a partire da url ritorna obj trasformato in json > risultato e`una promise che risolve nel post
   //response era valore che fetch passa come argomento al resolve
   //promessa e il risultato del fetch e cioe cio che e ritornato a resolve
    // const promessa = fetch(`http://dummyjson.com/posts/${id}`)
   //questa espressione assume il valore di cio che e ritornato a resolve (response) (res => res.json)
   //quindi possiamo ottenere la nostra response senza mettere il .then
    // const response = await promessa 
    const response = await fetch(url)
    const object = await response.json() //await perche anche response.json e una promise
    return object//quando creo funzione asincroma non ritorna oggetto in se, ma ritorna una promise che si risolve con questo oggetto 
    //promise ritornata che risolve nel post..: 
    //fetchJson(`http://dummyjson.com/posts/${id}`) //semplifichiamo la scrittura con meno .then
        //.then(post =>
}

//fetchJson non ritorna un oggetto ma una promise ( fetchJson(`http://dummyjson.com/posts/${id}`)che quando metto .then mi risolve l oggetto

async function getPost(id) {//aggiungendo async non dobbiamo piu ritornare una promise
    //possiamo in una sola riga ottenere il post
    //FETCHJSON IL RISULTATO E UNA PROMISE CHE RISOLVE NEL POST
    const post = await fetchJson(`http://dummyjson.com/posts/${id}`) //raccolgo il risultato ritornato da fetchjson nella await
    const user = await fetchJson(`http://dummyjson.com/users/${post.userId}`)
    return {...post, user} //return dell oggetto - in realta ritorna una promise che ritorna quell oggetto (poiche asincrono)-percio quando invoco uso .then..
    //Note: non dobbiamo piu fare resolve perche non abbiamo una promise(new promise(resolve, reject))..

    return new Promise((resolve, reject) => {
        // fetch(`http://dummyjson.com/posts/${id}`) //per scrivere questa riga e quella del then sotto in una possiamo scriver fetchJson(url..)
        // .then(res => res.json())//trasformo in oggetto
        fetchJson(`http://dummyjson.com/posts/${id}`) //semplifichiamo la scrittura, usando fetchJson possiamo eliminare il .then
        .then(post => {//usiamo post per fare altra chiamata e recuperare dati utente che ha come id: post.userid
            fetchJson(`http://dummyjson.com/users/${post.userId}`)//post con proprieta user
            // .then(resp => resp.json())//per ogni fetch facciamo json
            .then(user => resolve({...post, user}))//ritorniamo oggetto con post originale e una nuova proprieta user che rappresenta utente di quel post
            .catch(reject)
        })
        .catch(reject)
    });
}

//INVOCO FUNZIONE

//posso invocare cosi poiche e una funzione asincrona(async)
getPost(1)
.then(post => console.log("Post completo:",post))//cerca il post con quell id, e la proprieta user, che contiene utente associato a quel post
.catch(error => console.error(error))

//se voglio utilizzare getPost usando async await uso funzione invocata
//dico: nello scope globale usa async await in questo frammento di codice
(async() => {
    const post = await getPost(1);
    console.log('Post cmpleto', post)
})();//contenuto - poi eseguo nella parentesi tonda


//ADDITIONAL NOTES

//Come scrivere asyn con funzione anonima associata a variabile:
const getPost = async function(id) {

}
//Come scrivere asyn con funzione anonima associata a variabile:
const getPost = async (id) => {

}

//////////////////////BRO CODE/////////////////////
//Allow writing asyncronous code in a syncronous manner(line by line) linearly
//lista di eventi, concatenabili con then..
//funzione che dipende dal risultato di un altra
//Async makes a function return a promise
//Await makes an async function wait for a promise before continuing

async function getUserData(){
    try{
        const response = await fetch(`http://`)//restituisce promise, aspetto(await)che richiesta finsica
        const user = await response.json() //converte response oggetto convertito in json - anche asincrono quindi await
        console.log("dati utente", user)
    } catch(error){
        console.error("errore nel recupero dati:", error)
    }
}
//Invoca la funzione
getUserData()

/////////////////////////Piu operazioni asincrone/////////////////
function delay(ms){//funzione che restituisce promise che si risolve dopo tot ms - simulazione di processi che richiedono tempo
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function morningRoutine(){
    console.log("Mi sveglio..")

    await delay(2000);//aspetta 2 secs
    console.log("preparo caffe..")

    await delay(3000);//aspetta 3 sec
    console.log("mangio colazione..")

    await delay(1000);//aspetta 1 sec
    console.log("esco di casa")
}

//INVOCO FUNZIONE
morningRoutine()