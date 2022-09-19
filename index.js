
const calculate = document.getElementById("calculate");


function imc (){
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (name !=="" && height !=="" && weight !=="") {

        const valorIMC = (weight / (height*height)).toFixed(1);

        
        let classification = "";

        if (valorIMC < 18.5){
            classification = "abaixo do peso!";
        }else if (valorIMC < 25){
            classification = "com o peso ideal!";
        }else if (valorIMC < 30){
            classification = "levemente acima do peso ideal!";
        }else if (valorIMC < 35){
            classification = "com obesidade grau I!";
        }else if (valorIMC < 40){
            classification = "com obesidade grau II!";
        }else{
            classification = "com obesidedade grau III, CUIDADO!!";
        }
        result.textContent = `${name} seu IMC é ${valorIMC} portanto você está ${classification}`;
        
            

    }else{
        result.textContent = "Preencha todos os campos";
    }
}

calculate.addEventListener('click', imc);