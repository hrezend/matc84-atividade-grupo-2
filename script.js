function calcularImc() {
  let result = "";
  const name = document.getElementById("nameField").value;
  const height = document.getElementById("heightField").value;
  const weight = document.getElementById("weightField").value;
  const imc = weight / (height*height);

  if(!height || !weight) {
    result += "Deu erro aqui meu patrão! xD"
  } else {
    result += "Olá, " + name + "!\n Seu IMC é de uma pessoa com ";

    if(imc < 18.5) result += "Baixo Peso."
    else if(imc >= 18.5 && imc <= 24.9) result += "Peso Normal."
    else if(imc >= 25 && imc <= 29.9) result += "Pré-Obesesidade."
    else if(imc >= 30 && imc <= 34.9) result += "Obesidade 1."
    else if(imc >= 35 && imc <= 39.9) result += "Obesidade 2."
    else if(imc >= 40) result += "Obesidade 3." 
  }
  
  document.getElementById("resultField").innerText = result;
}
