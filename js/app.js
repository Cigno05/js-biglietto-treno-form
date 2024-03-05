console.log('JS Funziona!');
/* input km da percorrere */
const inputKmElement = document.getElementById('km'); //element \ null
console.log(inputKmElement);

/*input età passeggero */
const inputAgeElement = document.getElementById('age'); //element \ null
console.log(inputAgeElement);

/*input per sconto select*/
const select18Element = document.getElementById('discount18'); //element \ null
console.log(select18Element)

/*invio dati*/
const submitElement = document.getElementById('submit'); 

/*listner*/
let km, age;

submitElement.addEventListener('click', function() {
    /*risultato input km*/
    km = parseFloat(inputKmElement.value); //number

    /*risultato input age*/
    age = parseInt(inputAgeElement.value); //number

    /*stampa risultati*/
    console.log('Kilometri ' + km);
    console.log('Età dichiarata ' + age + ' anni' );

    /*calcolo prezzo per km*/
    const priceForKm = km * 0.21; //string
    console.log('Costo Km dichiarati ' + priceForKm + ' €');

    /*risultato calcolo biglietto*/
    const calcResult = document.getElementById('calc-result');
    console.log(calcResult);

    /*Validation*/

    if (km > 0 && age > 0 && !isNaN(km) && !isNaN(age)) {

        /*sconti sul prezzo del biglietto*/
        
        const discountUnder18 = (priceForKm - (priceForKm * 0.2)); //number
        const discountOver65 = (priceForKm - (priceForKm * 0.4)); //number

        /*
        alternativa
        const discountUnder18 = (priceForKm * 0.8); //number
        const discountOver65 = (priceForKm * 0.6); //number
        */
    
        /* calcolo prezzo del biglietto in base agli sconti milestone 1*/

        // if (age < 18) {
        //     let ticketPrice = discountUnder18.toFixed(2); //number
        //     console.log(ticketPrice)
        //     calcResult.innerHTML += ticketPrice
        // } else if (age > 65) {
        //     let ticketPrice = discountOver65.toFixed(2); //number
        //     console.log(ticketPrice)
        //     calcResult.innerHTML += ticketPrice
        // } else { // 35
        //     console.log(priceForKm.toFixed(2)); //number
        //     calcResult.innerHTML += priceForKm
        // }

        /* calcolo prezzo del biglietto in base agli sconti del select (Milestone 2)*/

        if (age == 2) {
            let ticketPrice = discountUnder18.toFixed(2); //number
            console.log(ticketPrice)
            calcResult.innerHTML += ticketPrice
        } else if (age == 3) {
            let ticketPrice = discountOver65.toFixed(2); //number
            console.log(ticketPrice);
            calcResult.innerHTML += ticketPrice
        } else { // 35
            console.log(priceForKm.toFixed(2)); //number
            calcResult.innerHTML += priceForKm
        }


        
        
        
        
        
        
        
        
        }



})