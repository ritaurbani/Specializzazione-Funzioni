

function funzioneSample(prima, dopo) {

    prima()
//timer take function as their parameter
    setTimeout(() => {
        console.log("sono passati 1000ms");
        //dopo aver aspettato i ms
        dopo();

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

//se non passo uno dei parametri => errore (inserisci controlli per evitare)
funzioneSample(
    () => console.log("sto aspettando"), //questa e`la funzione prima
)