function calcImc(peso,altura){
    var imc = peso / (altura ** 2)

    if (imc < 18.5){
      return console.log(`Seu imc é: ${imc.toFixed(2)}, você está na faixa da magreza.`)
    } else if (imc >= 18.5 && imc < 24.9){
        return console.log(`Seu imc é: ${imc.toFixed(2)}, você está na faixa do normal.`)
    }else if (imc >= 25 && imc < 29.9){
        return console.log(`Seu imc é: ${imc.toFixed(2)}, você está na faixa do sobrepeso.`)
    }else if (imc >= 30 && imc < 39.9){
        return console.log(`Seu imc é: ${imc.toFixed(2)}, você está na faixa da obesidade.`)
    }else{
        return console.log(`Seu imc é: ${imc.toFixed(2)}, você está na faixa da obesidade grave.`)
    }
}

calcImc(180,1.6)