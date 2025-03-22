//invece di && uso semplice prima() e nella dichiarazione passo una funzione di default che non fa nulla
//prima = () => {}, dopo = () => {}
function funzioneSample(prima, dopo) {

    //se prima ha assunto un valore lo eseguo
    prima && prima() 
//timer take function as their parameter
    setTimeout(() => {
        console.log("sono passati 1000ms");
        //dopo aver aspettato i ms
        dopo && dopo();

    }, 1000);
}

//due funzioni si svolgono contemporaneamente
funzioneSample(
    () => console.log("sto aspettando"), //questa e`la funzione prima
    () => console.log("fine!!") 
)
funzioneSample(
    () => console.log("inizio"), //questa e`la funzione prima
    () => console.log("fine") 
)

//se non passo uno dei parametri => errore (per evitare errore inserisci controlli o dai default empty function)
funzioneSample(
    () => console.log("sto aspettando"), //questa e`la funzione prima
)

