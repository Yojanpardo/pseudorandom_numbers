var seed, number, times = 0;
Array.prototype.descriptor = null;
var numbers = new Array;
numbers.descriptor = "Es el arreglo que almacenará los numeros";


function get_seed() {
	do{
		do{
			var confirmation = 1;
			seed = prompt("Ingresa la semilla");
			if (seed % 100 == 0	) {
				confirmation = prompt("has ingresado una semilla multiplo de 100 y se puede degenerar muy rapido\nDeseas continuar?\n1. Sí\nCualquier otra cosa para no");
			}
		}while(confirmation != 1);
		if (String(seed).length < 4) {
			alert("Esta semilla tiene una longitud inferior a 4 caracteres, intente de nuevo");
		}
	}while(String(seed).length < 4);
	documentSeed = document.getElementById('seed');
	documentSeed.innerHTML = seed;
}

function generate_number(seed) {

	var quantity = prompt("Cuantos numeros deseas generar?");

	while(times < quantity){
		times += 1;
		
		seed = seed**2;
		documentSeedSquared = document.getElementById('seedSquared');
		documentSeedSquared.innerHTML = seed;
		
		seed = String(seed);
		while(seed.length > 5){
			seed = seed.slice(1,-1);
		}
		seed = parseInt(seed);
		documentMiddleNumbers = document.getElementById('middleNumbers')
		documentMiddleNumbers.innerHTML = seed;

		if (seed < 9) {
			number = seed/10;
		}else if (seed < 99){
			number = seed/100;
		}else if (seed < 999){
			number = seed/1000;
		}else if (seed < 9999){
			number = seed/10000;
		}else{
			number = seed/100000;
		}
		number = " "+String(number)
		documentLastNumber = document.getElementById('lastNumber');
		documentLastNumber.innerHTML = number;

		numbers.push(number);
		
		if (number%100 == 0) {
			alert("Esta semilla se ha degenerado en la iteración: " + times);
			break;
		}
	}
	documentNumbersList = document.getElementById('numbersList');
	documentNumbersList.innerHTML = numbers;
}