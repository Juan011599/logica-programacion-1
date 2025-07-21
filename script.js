let num1 = Number(prompt("Ingrese el primer numero:"));
let num2 = Number(prompt("Ingrese el segundo numero:"));
let num3 = Number(prompt("Ingrese el tercer numero:"));

let resultadoDiv = document.getElementById("resultado");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Por favor ingrese solo números válidos.");
  resultadoDiv.innerHTML = "<p style='color:red;'>Por favor ingrese solo numeros validos.</p>";
} else if (num1 === num2 && num2 === num3) {
  console.log("Los 3 numeros son iguales: " + num1 + ", " + num2 + ", " + num3);
  resultadoDiv.innerHTML = `<p>Los 3 numeros son iguales: ${num1}, ${num2}, ${num3}</p>`;
} else {
  let numeros = [num1, num2, num3];

  // Orden mayor a menor
  let mayorAMenor = [...numeros].sort((a, b) => b - a);
  console.log("De mayor a menor: " + mayorAMenor);

  // Orden menor a mayor
  let menorAMayor = [...numeros].sort((a, b) => a - b);
  console.log("De menor a mayor: " + menorAMayor);

  resultadoDiv.innerHTML = `
    <p>De mayor a menor: ${mayorAMenor.join(", ")}</p>
    <p>De menor a mayor: ${menorAMayor.join(", ")}</p>
  `;
}
