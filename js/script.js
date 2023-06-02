function calcularIMC() {
    const peso = document.getElementById("txtPeso").value;
    const altura = document.getElementById("txtAltura").value / 100;

    if (peso == '' || isNaN(peso) || altura == '' || isNaN(altura)) {
        alert("Digite valores válidos!");
    } else {
        const imc = (peso / (altura * altura)).toFixed(1);

        let classificacao;

        if (imc < 18.5) {
            classificacao = "Magreza";
        } else if (imc <= 24.9) {
            classificacao = "Normal";
        } else if (imc <= 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade"
        }
        document.getElementById("lblResultado").innerHTML = "<hr>IMC: " + imc + "<br> Classificação: <b>" + classificacao + "</b>";
    }
}