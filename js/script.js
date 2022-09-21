function CalculaIMC(){
    // criando variaveis
    event.preventDefault()
    var Altura = document.getElementById('Altura').value
    var peso = document.getElementById('Peso').value 
    var resultado = ""
    var imc = peso / (Altura*Altura)

    if(imc < 18.5){
        resultado = "Abaixo do Peso!"
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado = "Peso normal"     
    }else if(imc >= 25 && imc <= 29.9 ){
        resultado = "Pesado"
    }else if(imc >= 30){
        resultado = "Obesidade"   
    }
    document.getElementById('Resultado').value = resultado
}