function CheckPalindromo() {
	let palavra = $("#palavra").val();
	palavra = palavra.toLowerCase();
	let palavraInverse = ""; 

	for (var i = palavra.length - 1; i >= 0; i--) {
		if (palavra[i] !== " ") {
			palavraInverse += palavra[i];
		}
	}

	if (palavra.replace(/\s/g, "") === palavraInverse) {
		alert("A palavra é um palindromo.");
	}else {
		alert("A palavra não é um palindromo.");
	}

}