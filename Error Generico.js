function divide(a, b){
    if(b === 0) {//se provo a dividere per 0 errore
        // const error = new Error("Impossibile dividere per zero!")
        // throw error
        throw new Error("Impossibile dividere per zero!") //devo sempre passare qualcosa a throw
    }
    return a / b
}

//senza catch il codice non andrebbe a linea 17, si bloccherebbe prima
try{const risultato = divide(2, 0);
console.log("risultato:", risultato)//questo non viene stampato-try con continua esecuzione
}catch(error){//che facciamo con l errore > lo stampiamo
    console.error(error)
}finally{//che vada a buon fine il try o no io voglio eseguire questo - posso anche non mettere finally
console.log("fine del codice")
}

