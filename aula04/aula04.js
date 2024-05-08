const TesteImparPar = (n) => {
    let calculoTeste = n % 2

    return (calculoTeste == 1) ? "Numero Impar" : "Numero Par"
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(54))
console.log(TesteImparPar(1500))