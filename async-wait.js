//trasformare getPost in una funzione asincrona
//creo funzione di supporto asincrona (dichiarativa) per evitare di fare 2 await
//uno sulla promise del fetch e uno sulla promise del json

async function fetchJson(url) {//a partire da url ritorna obj trasformato in json
   //response era valore passato come argomento al resolve
   //promessa e il risultato del fetch e cioe cio che e ritornato a resolve
    const promessa = fetch(`http://dummyjson.com/posts/${id}`)
   //questa espressione assume il valore di cio che e ritornato a resolve
   //quindi possiamo ottenere la nostra response senza mettere il .then
    const response = await promessa
    //posso scrivere direttamente cosi: ci ritorna gia la response
    // const response = await fetch(url)
}


function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`http://dummyjson.com/posts/${id}`)
        .then(res => res.json())//trasformo in oggetto
        .then(post => {//usiamo post per fare altra chiamata e recuperare dati utente
            fetch(`http://dummyjson.com/users/${post.userId}`)//post con proprieta user
            .then(resp => resp.json())//per ogni fetch facciamo json
            .then(user => resolve({...post, user}))//ritorniamo oggetto con post originale e una nuova proprieta user
            .catch(reject)
        })
        .catch(reject)
    });
}

getPost(1)
.then(post => console.log("Post completo:",post))
.catch(error => console.error(error))