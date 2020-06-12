let operandoa;
let operandob;
let operandon;

function init(){
	let resultado = document.getElementById("resultado");
	let siete = document.getElementById("siete");
	let ocho = document.getElementById("ocho");
	let nueve = document.getElementById("nueve");
	let sume = document.getElementById("suma");
	let cuatro = document.getElementById("cuatro");
	let cinco = document.getElementById("cinco");
	let seis = document.getElementById("seis");
	let resta = document.getElementById("resta");
	let tres = document.getElementById("tres");
	let dos = document.getElementById("dos");
	let uno = document.getElementById("uno");
	let multiplicacion = document.getElementById("multiplicacion")
	let reset = document.getElementById("reset");
	let cero = document.getElementById("cero");
	let igual = document.getElementById("igual");
	let division = document.getElementById("division");

	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}
	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "+";
		limpiar();
	}
	resta.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "*";
		limpiar();
	}
	division.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operandob = resultado.textContent;
		resolver();
	}
}
function limpiar(){
	resultado.textContent = "";
}
function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operandon = "";
}
function resolver(){
	let res = 0;
	switch(operandon){
		case "+":
		res = parseInt(operandoa) + parseInt(operandob);
		break;
		case "-":
		res = parseInt(operandoa) - parseInt(operandob);
		break;
		case "*":
		res = parseInt(operandoa) * parseInt(operandob);
		break;
		case "/":
		res = parseInt(operandoa) / parseInt(operandob);
		break;
	}
	resetear();
	resultado.textContent = res;
}