console.log('JS Funziona!');
// input name da percorrere
const inputNameElement = document.getElementById('name'); //element \ null

//input surname da percorrere
const inputSurnameElement = document.getElementById('surname'); //element \ null


/* input km da percorrere */
const inputKmElement = document.getElementById('km'); //element \ null
// console.log(inputKmElement);

/*input età passeggero */
const inputAgeElement = document.getElementById('age'); //element \ null
// console.log(inputAgeElement);

/*input per sconto select*/
const select18Element = document.getElementById('discount18'); //element \ null
// console.log(select18Element)

/*invio dati*/
const submitElement = document.getElementById('submit');

/*listner*/
let km, age;

submitElement.addEventListener('click', function () {
    // risultato input name
    userName = inputNameElement.value; // string

    // risultato input Surname
    userSurname = inputSurnameElement.value; //string

    const userCompleteName = userName + ' ' + userSurname;
    /*risultato input km*/
    km = parseFloat(inputKmElement.value); //number
    
    /*risultato input age*/
    age = parseInt(inputAgeElement.value); //number
    
    /*stampa risultati*/
    console.log(userName);
    console.log(userSurname);
    console.log(userCompleteName)
    console.log('Kilometri ' + km);
    console.log('Età dichiarata ' + age + ' anni');

    /*calcolo prezzo per km*/
    const priceForKm = km * 0.21; //string
    console.log('Costo Km dichiarati ' + priceForKm + ' €');

    /*risultato calcolo biglietto*/
    const calcResult = document.getElementById('calc-result');

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
        let discountPrice; 
        let ticketPrice;

        if (age == 2) {
            ticketPrice = discountUnder18.toFixed(2); //number
            console.log(ticketPrice);
            calcResult.innerHTML += ('€ ' + ticketPrice);
            discountPrice = 20;
        } else if (age == 3) {
            ticketPrice = discountOver65.toFixed(2); //number
            console.log(ticketPrice);
            calcResult.innerHTML += ('€ ' + ticketPrice);
            discountPrice = 40;
        } else { 
            ticketPrice = priceForKm;
            console.log(priceForKm.toFixed(2)); //number
            calcResult.innerHTML += ('€ ' + ticketPrice);
            discountPrice = 0;
        }


        const ticketCard = document.getElementById('ticket-card');
        console.log(ticketPrice);

        ticketCard.innerHTML = `
        <div class="card my-3">
      <div class="row g-0">
        <div class="col-md-3">
          <img src="./img/logo-italo-nuovo-trasporto-viaggiatori-bianco.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">${userCompleteName}</h5>
            <p class="card-text">Percorrerai ${km} Km</p>
            <p class="card-text">${discountPrice}% di sconto per te</p>
            <p class="card-text">Prezzo: ${ticketPrice}</p>
          </div>
        </div>
      </div>
    </div>
        `





    }



})