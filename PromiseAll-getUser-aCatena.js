//usiamo funzione getUser asincrona per raccogliere uno user da un API partendo dal suo id
//e vogliamo raccogliere tutti gli utenti che hanno gli id da 1 a 5

const getUser = async id => {
    const response  = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await response.json();
    return user
}

(async () => {//funzione immediatamente invocata nello scope globale
    //1.
    // const user = await getUser(1)//se mi serve un solo id faccio cosi
    // console.log(user) 

    //2.
    // //se mi servono da 1-5 faccio ciclo for
    // for(let id=1; id<=5; id++){
    //     const user = await getUser(id)//id e il nostro i - nello user raccolgo il risultato di resolve
    //     console.log(user)
    // }

//X PROBLEMA-DOBBIAMO ASPETTARE CHE LA REQUEST TERMINI PRIMA DI FAR PARTIRE QUELLA SUCCESSIVA
//QUINDI USIAMO PROMISEALL

    //3.CON PROMISEALL
    const promises = []//avra la promises dal ciclo for
    for(let id=1;id<=5; id++){//se invece di 5 metto 50 sara velocissimo
        const userPromise = getUser(id)//in questa variabile non raccolgo il risultato di resolve, ma la promise in se
        promises.push(userPromise)
    }
    const users = await Promise.all(promises) //promiseAll ritorna array di risultati -array ricevuto in un colpo solo
    console.log(users)//le request ora verrannoo in parallelo


})()

