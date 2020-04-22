//Creo un ciclo for che stampa numeri da 1 a 100, con if-else per i multipli di 3 e 5

for (i = 1; i <= 100; i++) {
    if ( (i % 15) == 0) {
        console.log("FizzBuzz");
        document.getElementById("counter").insertAdjacentHTML("beforeend", '<li class="fizzbuzz">FizzBuzz</li>');
    } else if ( (i % 3) == 0) {
        console.log("Fizz");
        document.getElementById("counter").insertAdjacentHTML("beforeend", '<li class="fizz">Fizz</li>');
    } else if ( (i % 5) == 0) {
        console.log("Buzz");
        document.getElementById("counter").insertAdjacentHTML("beforeend", '<li class="buzz">Buzz</li>')
    } else {
        console.log(i);
        document.getElementById("counter").insertAdjacentHTML("beforeend", "<li>" + i + "</li>")
    }
}
