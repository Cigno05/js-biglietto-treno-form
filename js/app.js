console.log('JS Funziona!');
/* input km da percorrere */
const inputKmElement = document.getElementById('km');
console.log(inputKmElement);

/*input età passeggero */
const inputAgeElement = document.getElementById('age');
console.log(inputAgeElement);

/*invio dati*/
const SubmitElement = document.getElementById('submit');

/*listner*/
let km, age;

SubmitElement.addEventListener('click', function() {
    /*risultato input km*/
    km = inputKmElement.value

    /*risultato input age*/
    age = inputAgeElement.value

    /*stampa risultati*/
    console.log('Kilometri ' + km);
    console.log('Età dichiarata ' + age + ' anni' );

    /*calcolo prezzo per km*/
    const priceForKm = km * 0.21; //string
    console.log('Costo Km dichiarati ' + priceForKm + ' €');

    /*risultato calcolo biglietto*/
    const calcResult = document.getElementById('calc-result')
    console.log(calcResult)

    /*Validation*/

    if (km > 0 && age > 0 && !isNaN(km) && !isNaN(age)) {

        /*sconti sul prezzo del biglietto*/
        
        const discountUnder18 = (priceForKm - (priceForKm * 0.2)); //number
        const discountOver65 = (priceForKm - (priceForKm * 0.4)); //number
    
        /* calcolo prezzo del biglietto in base agli sconti*/

        if (age < 18) {
            let ticketPrice = discountUnder18.toFixed(2); //number
            console.log(ticketPrice)
            calcResult.innerHTML += ticketPrice
        } else if (age > 65) {
            let ticketPrice = discountOver65.toFixed(2); //number
            console.log(ticketPrice)
            calcResult.innerHTML += ticketPrice
        } else { // 35
            console.log(priceForKm.toFixed(2)); //number
            calcResult.innerHTML += priceForKm
        }
        
        
        
        
        
        
        
        
        }



})