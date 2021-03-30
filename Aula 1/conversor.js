var valorDolar = parseFloat(prompt("Qual valor em Dolar você quer converter")) 
var dolar = 5.5

var resultado = valorDolar*dolar
resultado = resultado.toFixed(2)//toFixed, serve para determinar o numero de 
                                //casas depois da virgula2.3

alert("O valor em reais é R$ "+resultado)
