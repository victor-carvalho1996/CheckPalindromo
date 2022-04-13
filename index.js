function CheckPalindromo(p_palavra) {
	let palavra = p_palavra.replace(/\s/g, "").toLowerCase();

	let countPalavra = Math.ceil(palavra.length / 2);
	let countAux = 0; 
	let isPalindromo = true;
	while (countPalavra !== countAux) {
		if(palavra[countAux] !== palavra[(palavra.length - 1) - countAux]) {
			isPalindromo = false;
			break;
		}
		countAux++;
	}
	if (isPalindromo) {
		console.log("A palavra é um palindromo.");
	}else {
		console.log("A palavra não é um palindromo.");
	}

}