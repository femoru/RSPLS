var labels = ['piedra','papel','tijera','lagarto','spock'];

function aleatorio(min,max){
	return Math.floor( Math.random() * (max - min));
}

function clickImage(event){
	var elemento = document.getElementById(event.id);
	var elecEquipo = Number(aleatorio(0,5));
	var elecUsuario = labels.indexOf(elemento.id);

	alert("El usuario selecciono " + labels[elecUsuario]);
	alert("La maquina selecciono " + labels[elecEquipo]);

	comprobar(labels[elecUsuario],labels[elecEquipo]);
}
function comprobar(elecUsuario,elecEquipo){
	if(elecUsuario === elecEquipo){
		alert("O.O Empataste!!!");
	}
	if(elecUsuario === 'tijera'){
		if(elecEquipo === 'papel' || elecEquipo === 'lagarto'){
			alert('Ganaste!!! !(>.<)! ');
		}
		if(elecEquipo === 'piedra' || elecEquipo === 'spock'){
			alert('Perdiste :(');
		}
	}

	if(elecUsuario === 'papel'){
		if(elecEquipo === 'piedra' || elecEquipo === 'spock'){
			alert('Ganaste!!! !(>.<)! ');
		}
		if(elecEquipo === 'tijera' || elecEquipo === 'lagarto'){
			alert('Perdiste :(');
		}
	}

	if(elecUsuario === 'piedra'){
		if(elecEquipo === 'lagarto' || elecEquipo === 'tijera'){
			alert('Ganaste!!! !(>.<)! ');
		}
		if(elecEquipo === 'papel' || elecEquipo === 'spock'){
			alert('Perdiste :(');
		}
	}

	if(elecUsuario === 'lagarto'){
		if(elecEquipo === 'papel' || elecEquipo === 'spock'){
			alert('Ganaste!!! !(>.<)! ');
		}
		if(elecEquipo === 'piedra' || elecEquipo === 'tijera'){
			alert('Perdiste :(');
		}
	}

	if(elecUsuario === 'spock'){
		if(elecEquipo === 'piedra' || elecEquipo === 'tijera'){
			alert('Ganaste!!! !(>.<)! ');
		}
		if(elecEquipo === 'papel' || elecEquipo === 'lagarto'){
			alert('Perdiste :(');
		}
	}

}
