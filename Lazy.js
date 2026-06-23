
const primoNunero = num => {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }  
    return true
}

function* generarPrimos(){
    let eval = 2
    while(true){
        if(primoNunero(eval)){
            yield eval
        }
        eval++
    }
}

const numerosPrimos = generarPrimos()
console.log("Primo 1: ", numerosPrimos.next().value);
console.log("Primo 2: ", numerosPrimos.next().value);
console.log("Primo 3: ", numerosPrimos.next().value);
console.log("Primo 4: ", numerosPrimos.next().value);
console.log("Primo 5: ", numerosPrimos.next().value);
console.log("Primo 6: ", numerosPrimos.next().value);
console.log("Primo 7: ", numerosPrimos.next().value);
console.log("Primo 8: ", numerosPrimos.next().value);
