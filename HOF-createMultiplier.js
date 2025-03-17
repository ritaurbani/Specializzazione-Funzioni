// creare funzione che genera una funzione che moltiplica i numeri

function createMultiplier(multiplier) {
    return function(number){
        //ritornare il numero passato moltiplicato per il multiplier
        return number * multiplier;
    }
}

//ESEMPI

//1.Creare funzione che raddoppia numeri
const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(4));
console.log(triple(3))