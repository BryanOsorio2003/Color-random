const button = document.getElementById('btnColor');
    body = document.querySelector("body")

button.addEventListener("click",colorRandom);

function colorRandom() {
    //console.log('Prieba');
    simbolos = "0123456789ABCDEF";
    color = '#';

    for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
    body.style.background = color;
}

