

// =============== BLOQUE 1: INDIVIDUAL ================
// =====================================================

// 1. Serie de Fibonacci
let n = 8;
let a = 0;
let b = 1;
let c;
let serie = a + ", " + b;

for (let i = 2; i < n; i++) {
  c = a + b;
  serie = serie + ", " + c;
  a = b;
  b = c;
}
console.log("Serie de Fibonacci: " + serie);

// -----------------------------------------------------

// 2. Divisores de un número
let numero = 12;
let divisores = "";

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    divisores = divisores + i + ", ";
  }
}
console.log("Divisores: " + divisores);

// -----------------------------------------------------

// 3. Suma de los divisores
let num = 12;
let suma = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    suma = suma + i;
  }
}
console.log("Suma de divisores: " + suma);

// -----------------------------------------------------

// 4. Verificar si un número es perfecto
let nPerf = 6;
let sumaPerf = 0;

for (let i = 1; i < nPerf; i++) {
  if (nPerf % i == 0) {
    sumaPerf = sumaPerf + i;
  }
}

if (sumaPerf == nPerf) {
  console.log(nPerf + " es un número perfecto");
} else {
  console.log(nPerf + " no es un número perfecto");
}

// -----------------------------------------------------

// 5. Verificar si un número es primo
let nPrimo = 11;
let esPrimo = true;

for (let i = 2; i < nPrimo; i++) {
  if (nPrimo % i == 0) {
    esPrimo = false;
  }
}

if (esPrimo) {
  console.log(nPrimo + " es un número primo");
} else {
  console.log(nPrimo + " no es un número primo");
}

// -----------------------------------------------------

// 6. Invertir los dígitos de un número
let nInvertir = 1234;
let invertido = 0;

while (nInvertir > 0) {
  let digito = nInvertir % 10;
  invertido = invertido * 10 + digito;
  nInvertir = Math.floor(nInvertir / 10);
}

console.log("Número invertido: " + invertido);

// -----------------------------------------------------

// 7. Contar dígitos de un número
let nContar = 9876;
let contador = 0;

while (nContar > 0) {
  nContar = Math.floor(nContar / 10);
  contador = contador + 1;
}

console.log("Cantidad de dígitos: " + contador);

// -----------------------------------------------------

// 8. Factorial de un número
let nFact = 5;
let fact = 1;

for (let i = 1; i <= nFact; i++) {
  fact = fact * i;
}

console.log(nFact + "! = " + fact);

// -----------------------------------------------------

// 9. Sumas sucesivas
let numeroSuma = 3;
let veces = 4;
let resultado = 0;

for (let i = 1; i <= veces; i++) {
  resultado = resultado + numeroSuma;
}

console.log("Resultado: " + resultado);

// -----------------------------------------------------

// 10. Restas sucesivas
let numeroResta = 15;
let valor = 4;

while (numeroResta > valor) {
  numeroResta = numeroResta - valor;
}

console.log("Resultado final: " + numeroResta);


// ================ BLOQUE 2: LISTAS ===================
// =====================================================

// 1. Serie de Fibonacci para varios valores
let n_valores = [5, 8, 10];

for (let j = 0; j < n_valores.length; j++) {
  let n = n_valores[j];
  let a = 0;
  let b = 1;
  let c;
  let serie = a + ", " + b;

  for (let i = 2; i < n; i++) {
    c = a + b;
    serie = serie + ", " + c;
    a = b;
    b = c;
  }
  console.log("Fibonacci(" + n + "): " + serie);
}

// -----------------------------------------------------

// 2. Divisores de varios números
let numeros = [6, 10, 15];

for (let j = 0; j < numeros.length; j++) {
  let num = numeros[j];
  let divisores = "";

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      divisores = divisores + i + ", ";
    }
  }
  console.log(num + " → " + divisores);
}

// -----------------------------------------------------

// 3. Suma de divisores de varios números
let nums = [6, 12, 28];

for (let j = 0; j < nums.length; j++) {
  let n = nums[j];
  let suma = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      suma = suma + i;
    }
  }
  console.log(n + " → " + suma);
}

// -----------------------------------------------------

// 4. Números perfectos en una lista
let lista = [6, 10, 28, 30];
let perfectos = "";

for (let j = 0; j < lista.length; j++) {
  let n = lista[j];
  let suma = 0;

  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      suma = suma + i;
    }
  }

  if (suma == n) {
    perfectos = perfectos + n + ", ";
  }
}

console.log("Números perfectos: " + perfectos);

// -----------------------------------------------------

// 5. Números primos en una lista
let listaPrimos = [5, 6, 7, 8, 11];
let primos = "";

for (let j = 0; j < listaPrimos.length; j++) {
  let n = listaPrimos[j];
  let esPrimo = true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      esPrimo = false;
    }
  }

  if (esPrimo) {
    primos = primos + n + ", ";
  }
}

console.log("Primos: " + primos);

// -----------------------------------------------------

// 6. Invertir varios números
let numerosInv = [123, 456, 780];

for (let j = 0; j < numerosInv.length; j++) {
  let n = numerosInv[j];
  let invertido = 0;
  let original = n;

  while (n > 0) {
    let digito = n % 10;
    invertido = invertido * 10 + digito;
    n = Math.floor(n / 10);
  }

  console.log(original + " → " + invertido);
}

// -----------------------------------------------------

// 7. Contar dígitos de varios números
let numerosDig = [45, 678, 12345];

for (let j = 0; j < numerosDig.length; j++) {
  let n = numerosDig[j];
  let original = n;
  let contador = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    contador = contador + 1;
  }

  console.log(original + " → " + contador + " dígitos");
}

// -----------------------------------------------------

// 8. Factorial de varios números
let numerosFact = [3, 4, 5];

for (let j = 0; j < numerosFact.length; j++) {
  let n = numerosFact[j];
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  console.log(n + "! = " + fact);
}

// -----------------------------------------------------

// 9. Sumas sucesivas en una lista
let numerosSuma = [2, 3, 4];
let vecesSuma = 4;

for (let j = 0; j < numerosSuma.length; j++) {
  let n = numerosSuma[j];
  let resultado = 0;

  for (let i = 1; i <= vecesSuma; i++) {
    resultado = resultado + n;
  }

  console.log(n + " × " + vecesSuma + " = " + resultado);
}

// -----------------------------------------------------

// 10. Restas sucesivas en una lista
let numerosResta = [15, 22, 30];
let valorResta = 4;

for (let j = 0; j < numerosResta.length; j++) {
  let n = numerosResta[j];
  let original = n;

  while (n > valorResta) {
    n = n - valorResta;
  }

  console.log(original + " → " + n);
}
