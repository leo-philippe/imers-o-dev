function enviar(){
    var moeda = parseFloat(document.getElementById("moeda").value);
    var dolar = 5.5
    var resultado = moeda*dolar

    alert("O valor em reais é: R$"+resultado.toFixed(2))
}
