let num1 = 2 
let num2 = 3
var msg = "ola a migos esse é o número: "

console.log(msg, num1)
console.log(num1 + num2)
console.log(typeof num1)
console.log(typeof msg)
// métodos são funcionalidades prontas de linguagem e que podem receber parâmetros

 function Somar () {
    n1=2
    n2=5
    console.log("the result is: ", n1 + n2)
 }
 Somar() //here shes running
 function SomarComParametros (n1, n2){
     let resultado = "the result is: " + (n1+n2)
     console.log (resultado)
 }
 SomarComParametros(16, 30)
 SomarComParametros(70, 54)

 const Teste = (n) => {
     let result = n  % 2 

     if (result == 1){
         return "numero impar"
     }
     return "numero par"


 }     
    console.log (Teste (2))
     console.log (Teste (7))
     Teste(5) //this line won´t execute whats in the console
