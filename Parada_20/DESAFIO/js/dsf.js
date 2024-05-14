function calcular_media(){

    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3) / 3;
    if (media >= 6){
        document.getElementById("resp").textContent = "Parabéns você foi aprovado!!!"
    }else{        
        document.getElementById("resp").textContent = "Você foi reprovado."
    }
}