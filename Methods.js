const users = [
    {
        id: 1,
        name: "Mario",
        sesso: "m",
        age: 23,
    },
    {
        id: 2,
        name: "Giulia",
        sesso: "f",
        age: 35,
    },
    {
        id: 3,
        name: "Barbara",
        sesso: "f",
        age: 48,
    },
    {
        id: 4,
        name: "Luigi",
        sesso: "m",
        age: 26,
    }
]
//////SOME///////
//C e almeno un utente che ha piu di 30 anni? Lo cerco..
// const atLeastOneMoreThanThirty = users.some((u) => u.age > 30)
// console.log(atLeastOneMoreThanThirty);

////EVERY//////
//vedo se tutti sono maggiornenni
// const allAdults = users.every((u) => u.age > 18)
// console.log(allAdults)

//////SORT////////
// const usersAges = users.sort((a,b) => a.age - b.age).map(u => u.age)
// console.log(users)//possiamo anche salvarlo in una variabile const ordinatoPerEta = ...
// console.log(usersAges)//map va salvato - quando methodo return Array puo essere mappato

// //con stringhe 
// const sortByName = users.sort((a,b) => a.name.localeCompare(b.name))
// console.log(sortByName)

////////REDUCE////////
//Qual`e` l`eta media degli utenti

// const sommaEta = users.reduce((acc, curr) => {
//     return acc + curr.age
// }, 0)
// const etaMedia = sommaEta/users.length
// console.log(etaMedia)

//////////MAPPATURA DI UN ARRAY IN UN OGGETTO/////////////
//trasformare array in un oggetto che per ogni proprieta ha 
//proprieta: nome minuscolo dell utente
//valore: oggetto dell utente

//Note: acc è il valore che reduce() accumula a ogni ciclo.
//Se non lo restituiamo, verrebbe perso e ogni iterazione partirebbe da zero.

const userObject = users.reduce((acc, curr) => {
    //cosa faccio a ogni iterazione?eseguo funzione callback
    const key  = curr.name.toLowerCase()
    //obj[key] -creare una nuova proprietà nell'oggetto acc con chiave dinamica (il valore di key cambia a ogni iterazione).
    acc[key] = curr;//per creare una nuova chiave nell'oggetto acc con valore curr.
    return acc //ritorna sempre acc modificato alla fine di ogni iterazione e passato alla prossima
},{})//se vogliamo ritornare un oggetto valore iniziale sara oggetto vuoto
console.log(userObject)

//Output
{
//barbara:{ id: 3, name: 'Barbara', sesso: 'f', age: 48 }
//giulia:{ id: 2, name: 'Giulia', sesso: 'f', age: 35 }
}

//Ad ogni iterazione:
// Prima iterazione(curr = users[0])

// curr = { name: "Alice", age: 25 };
// key = "alice"; // curr.name.toLowerCase()
// acc = { alice: { name: "Alice", age: 25 } }; // Aggiunto all'oggetto

// Seconda iterazione(curr = users[1])

// curr = { name: "Bob", age: 30 };
// key = "bob";
// acc = {
//     alice: { name: "Alice", age: 25 },
//     bob: { name: "Bob", age: 30 }
// };

// Alla fine, userObject conterrà:

// {
//     alice: { name: "Alice", age: 25 },
//     bob: { name: "Bob", age: 30 },
//     charlie: { name: "Charlie", age: 22 }
// }