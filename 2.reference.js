
// //salvo in albero il contenuto di questo obj
// const albero = {tipo: "melo", quantitaDiFrutti: 14};
// //copia - le due varibaili si riferiscono allo stesso obj in memoria
// const copiaAlbero = albero;

// //cambio proprieta di copiaAlbero
// copiaAlbero.tipo = "pesco"

// //entrambi gli alberi cambiano tipo-poiche non ci sono 2 ma solo un albero
// console.log("albero:", albero)
// console.log("copiaAlbero:",copiaAlbero)

///////////////////OGGETTO ANNIDATO//////////

// const albero = { 
//     tipo: "melo", 
//     quantitaDiFrutti: 14,
//     proprietario: {
//         nome: "Mario",
//         eta: 30
//     }
//  };
 //creo obj che e`la copia di tutte le proprieta`di albero
// const secondAlbero = {...albero}

// //ora secodAlbero e un nuovo oggetto, che ha come proprieta un nuovo oggetto proprietario
// const secondAlbero = {
//     ...albero, 
//     proprietario:{...albero.proprietario} }

// //il tipo ora e diverso=> siamo sicuri di aver salvato in memoria due oggetti diversi
// secondAlbero.tipo = "pesco"; //tipo diverso
// secondAlbero.proprietario.nome = "Rita" //proprietario sara Rita in entrambi

// console.log("albero:", albero)
// console.log("secondoAlbero:", secondAlbero)

//ci troviamo alla fine con due alberi ma un solo proprietario

//////////////////DEEP COPY/////////////////

////(JASON.stringify()) - non copia funzion, simboli, promise, dates

// const persona1 = {
//     nome: "rita",
//     eta: 20,
//     smartphone: {marca:"samsung"}
// }

// //DEEP COPIA persona1- prende persona1 > trasforma in string > prendo stringa e riconverto in oggetto
// const persona2 = JSON.parse(JSON.stringify(persona1));

// persona2.smartphone.marca = "iphone"

// console.log(persona1.smartphone.marca) //samsung
// console.log(persona2.smartphone.marca) //iphone
// //2 PERSONE 2 SMARTPHONE

/////////////LIMITI DI (JSON.stringify())////////////
// non copia funzioni, e oggetti avanzati come data
// const persona1 = {
//     nome: "rita",
//     eta: 20,
//     dataDiNascita: new Date(1982, 10, 1) //sara copiato anche questo e sara un nuovo oggetto
// }

// const persona2 = JSON.parse(JSON.stringify(persona1))

// console.log(persona1.dataDiNascita) //oggetto
// console.log(persona2.dataDiNascita) //stringa

///////////////structureClone()//////////
//gestisce oggetti complessi, no funzioni
// const persona1 = {
//     nome: "rita",
//     eta: 20,
//     dataDiNascita: new Date(1982, 10, 1)
// }

// const persona2 = structuredClone(persona1)

// console.log(persona1.dataDiNascita) //oggetto
// console.log(persona2.dataDiNascita) //oggetto 

////////////ESEMPIO FINALE COPIA PROFONDA////////
const albero = {
    tipo: "melo",
    eta:23,
    proprietario: {
        nome: "rita",
        eta: 23,
        smartphone:{
            marca:"samsung",
            dataDiNascita: new Date(2024,4,3)
        }
    }
}

////////SPREAD
const alberoCopia = {...albero, proprietario:{...albero.proprietario},smarphone:{...albero.proprietario.smartphone} }
//////JSON.STRINGIFY
const alberoCopia1 = JSON.parse(JSON.stringify(albero))
console.log("albero:", albero)
console.log("alberoCopia1:", alberoCopia1) //diventa stringa
///////STRUCTURED.CLONE()
const alberoCopia2 = structuredClone(albero)
console.log(alberoCopia2)//mantiene l oggetto in data
//se cambio proprieta
alberoCopia2.proprietario.smartphone.marca = "iphone"
console.log(alberoCopia2)