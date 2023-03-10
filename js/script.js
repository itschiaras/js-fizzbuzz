/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */




    // inizio un ciclo per creare 100 quadratini

for (let i = 1; i <= 100; i++ ){

    // creo una const per prendere il div dentro il quale creerò i quadratini

    const squaresContainer = document.getElementById('squaresContainer');

    // creo delle condizioni poichè alcuni quadratini, in base ai criteri richiesti, dovranno essere diversi

    //inizio con la condizione più restrittiva. Se il numero è un multipo di 3 E un multipo di 5, il quadratino sarà rosa e vi sarà scritto fizzbuzz
    
    if (i % 3 === 0 && i % 5 === 0){
        const fizzbuzz = squaresContainer.innerHTML +=
        `
        <div class="square square-fizzbuzz fw-bold">fizzbuzz</div>
        `;
        
        // Se il numero è un multiplo di 5, il quadratino sarà giallo e vi sarà scritto buzz
    } else if (i % 5 === 0){
        const buzz = squaresContainer.innerHTML +=
        `
        <div class="square square-buzz fw-bold">buzz</div>
        `;
        
        //Se il numero è un multiplo di 3, il quadratino sarà verde acqua e vi sarà scritto fizz
    } else if (i % 3 === 0){
        const fizz = squaresContainer.innerHTML += 
        `
        <div class="square square-fizz fw-bold">fizz</div> 
        `;
        
        // In qualsiasi altro caso il quadratino avrà dentro il suo numero corrispondente e sarà azzurro
    } else {
        const number = squaresContainer.innerHTML += 
        `
        <div class="square square-number fw-bold"> ${i}</div>
        `;
        
    }
}
