function tellMeWhenDone(callback) {
    const a = 1000 //some work
    const b = 2000 //some work

    callback(); //the "callback", it runs the function I give it!
}

//i give it a callbackfunction
tellMeWhenDone(function () {
    console.log("I am done!")
});

tellMeWhenDone(function () {
    console.log("All done!")
});


SPIEGAZIONE

function eseguiQualcosa(azione) {
    console.log("Prima di eseguire la funzione...");
    azione(); // Eseguiamo la funzione passata come argomento
    console.log("Dopo aver eseguito la funzione...");
}

eseguiQualcosa(function () {
    console.log("Ciao, sono la funzione passata!");
});

// 🧐 Cosa succede passo per passo ?
//     1️⃣ Dichiariamo la funzione eseguiQualcosa(azione), che accetta un parametro(in questo caso chiamato azione).
// 2️⃣ Quando chiamiamo eseguiQualcosa(...), passiamo una funzione anonima come valore.
// 3️⃣ Dentro eseguiQualcosa, stampiamo "Prima di eseguire la funzione...".
// 4️⃣ Poi eseguiamo azione();, che significa eseguire la funzione che gli abbiamo passato.
// 5️⃣ Dopo, stampiamo "Dopo aver eseguito la funzione...".

// ✅ Output finale in console:


// Prima di eseguire la funzione...
// Ciao, sono la funzione passata!
// Dopo aver eseguito la funzione...
