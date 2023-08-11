// Planteamiento:
// cree una función de JS que analice un arreglo de números. Para cada número, haga lo siguiente:

// Si el número es par, agréguelo a una arreglo de "evenNumbers".
// Si el número es impar, agréguelo a una matriz "oddNumbers".
// Si el número es un múltiplo de 3, agréguelo a una matriz "multiplesOfThree".

// Imprime el contenido de cada arreglo.

// Ejemplo:
// Entrada: [2, 5, 8, 11, 15, 23, 30]
// Salida:
// Even Numbers: [2, 8, 30]
// Odd Numbers: [5, 11, 15, 23]
// Multiples of Three: [15, 30]

function sortingNumbers(array) {
    console.log("Inicia el programa")
    let evenNumbers = []
    let oddNumbers = []
    let multipleOfThree = []

    for (let index = 0; index < array.length; index++) {
        console.log("Entra al for")
        const number = array[index];
        console.log(number)
        let divition = 0
        let multiple = 0
        divition = number%2
        console.log(divition)
        multiple = number%3
        console.log(multiple)
        if (divition === 0) {
            console.log("Numero par")
            evenNumbers.push(number)
        }  
        
        if (divition != 0) {
            console.log("Numero impar")
            oddNumbers.push(number)
        }  
        
        if (multiple === 0) {
            console.log("Numero multiplo de 3")
            multipleOfThree.push(number)
        }
    }

    console.log(evenNumbers)
    console.log(oddNumbers)
    console.log(multipleOfThree)
    console.log("Termina el programa")
}

const arreglo = [1,2,3,4,5,6,7,8,9,10]

sortingNumbers(arreglo)