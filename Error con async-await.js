//funzione fetchJson ritornava una promise che si risolve con l oggetto - 
// promsie risolta con il valore passato a resolve 
// RISULTATO DELLA PROMISE -valore passato a resolve
async function fetchJson(url){//non metto try catch qui perche io voglio che errore si propaghi con throw
    const response = await fetch(url)
    const object = await response.json();
    return object //risultato della promise in resolve
}

const getpost = async(id) => {//questa funzione fa le due chiamate per ritornare il post e use con le sue proprieta
    //PS: try e catch creano scope locale - dichiariamo post fuori dai blocchi try e catch
let post //la devo dichiarare qui, perche try ha uno scope interno, se dichairo dentro non la posso usare piu
try{
    post = await fetchJson(`http://dummyjson.com/posts/${id}`)//se c e errore > fetchjson non e andato a buon fine
}catch(error){
    throw new Error(`Non posso recuperare post id ${id}`)//throw si usa dentro catch cosi errore e propagato alla funzione o scope superiore che la sta utilizzando
    //non andremo alla prossima fetch ma possiamo 
    // cmq andare in getPost e raccogliere l errore e continuiamo con l esecuzione e stampare "fine!" in console
}

if(post.message){//siamo nel caso di un errore se post non viene trovato
 throw new Error(post.message)//anche qui riusciamo cmq a stampare fine!
}
//se il post per questo id non esiste > non possiamo continuare senza vedere perche..
// const post = await fetchJson(`http://dummyjson.com/posts/${id}`) //raccolgo il risultato ritornato da fetchjson nella await
let user;

try{
const user = await fetchJson(`http://dummyjson.com/users/${post.userId}`)
}catch(error){
    throw new Error(`Non posso recuperare user id ${post.userId}`)
}

if(user.message){//se esiste un user.message devo stampare un errore
throw new Error(user.message)//user perche user conteneva un errore
}
return { ...post, user } //return dell oggetto - in realta ritorna una promise che ritorna quell oggetto (poiche asincrono)-percio quando invoco uso .then..
//Note: non dobbiamo piu fare resolve perche non abbiamo una promise(new promise(resolve, reject))..
}

//Esempio d`uso cont 2 modalita diverse
//possiamo usare il throw all interno di un catch per far si che l`errore venga propagato alla funzione/scope superiore che la sta utilizzando
//PS: try e catch creano scope locale
//1
(async() => {
    try {//
        const post = await getpost(1);//se qui metto getPost(383432924) non esiste post con questo id > error > post === null
    console.log("Post completo:", post)
    }catch(error){//blocco catch riceve un errore e scriviamo cosa fare se c e errore > stamparlo
        //qui raccogliamo tutti gli errori per non bloccare l esecuzione del codice
        console.error(error)
    }
    console.log("fine!") //posso wrappare questo im un finally{} - se funzione ritorna un valore il finally e necessario
})();

// //2
// getpost(1)
// .then(post => console.log("Post completo:", post))//raccolgo il posto nel then
// .catch(error => console.error(error))//gestisco errore qui - in async await non succede > try catch
// .finally(()=> console.log("fine!"))

//DOMANDA: DOVE HA SENSO WRAPPARE GLI ERRORI??

///////////////////////////////SENZA COMMENTI/////////////////////////
async function fetchJson(url) {
    const response = await fetch(url);
    const object = await response.json();
    return object;
}
const getPost = async (id) => {
    let post;
    try {
        post = await fetchJson(`http://dummyjson.com/posts/${id}`);
    } catch (error) {
        throw new Error(`Non posso recuperare post id ${id}`);
    }

    if (post.message) {
        throw new Error(post.message);
    }

    let user;
    try {
        user = await fetchJson(`http://dummyjson.com/users/${post.userId}`);
    } catch (error) {
        throw new Error(`Non posso recuperare user id ${post.userId}`);
    }

    if (user.message) {
        throw new Error(user.message);
    }

    return { ...post, user };
};

(async () => {//IIFE (Immediately Invoked Function Expression)
    try {
        const post = await getPost(1);
        console.log("Post completo:", post);
    } catch (error) {
        console.error(error);
    }
    console.log("fine!");
})();

getPost(1)
    .then(post => console.log("Post completo:", post))
    .catch(error => console.error(error))
    .finally(() => console.log("fine!"));