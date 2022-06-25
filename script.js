/*Criar um loop que conte todos os números ímpares de 1 até 100 usando while e for:

while
let number = 1;
  console.log ("Todos os numeros ímpares de 1 até 100 são:")
while(number <=100){
  console.log (number);
  number+=2;
}

for
console.log("Ínicio do for:")
for (let number = 1; number <= 100; number+=2){
  console.log(number);
}*/

console.log("1. Criar um loop que conte de 1 até 10 usando FOR")
for (let number = 1; number <= 10; number++){
    console.log(number)
}

console.log("2. Criar um loop que conte de 10 até 1 usando WHILE")
console.log("Contagem regressiva:")
let number = 10;
while (number >=1){
    console.log(number);
    number--;
}

console.log("3. Criar um loop que conte todos os números ímpares de 1 até 100")
for (let oddNumber=1; oddNumber <=100; oddNumber+=2){
    console.log(oddNumber)
}

console.log("4. Criar um loop que conte todos os números pares de 0 a 100")
let evenNumber = 0;
while (evenNumber <= 100){
    console.log(evenNumber);
    evenNumber+=2;
}
