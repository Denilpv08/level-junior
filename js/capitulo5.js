//Ejercicio
const materias = {
	matematicas: [90, 6, 3, "matematicas"],
	sociales: [84, 8, 2, "sociales"],
	filosofia: [92, 8, 4, "filosofia"],
	naturales: [96, 8, 4, "naturales"],
	fisica: [91, 6, 3, "fisica"],
	quimica: [79, 7, 4, "quimica"],
	deportes: [75, 9, 2, "deportes"],
	contaduria: [98, 9, 1, "contaduria"],
	algoritmia: [100, 10, 4, "algoritmia"]
}

const aprobado = () =>{
	for(materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];
		console.log(materias[materia][3]);

		if (asistencias >= 90) {
			console.log("%cAsistencia en orden", "color:green");
		}else{
			console.log("%cFalta por inasistencia", "color:red");
		}

		if (promedio >= 7) {
			console.log("%cPromedio en orden", "color:green");
		} else {
			console.log("%cEl promedio no alcanzado", "color:red");
		}

		if (trabajos >= 3) {
			console.log("%cTrabajos completos", "color:green");
		} else {
			console.log("%cTrabajos incompletos", "color:red");
		}
	}
}

aprobado();

//Ejercico 2
const tareas = () =>{
	let trabajos = "100 min para relizar trabajos practicos";
	let estudiar = "100 min para estudiar";
	let trabajar = "240 min para estar en el trabajo";
	let homeWork = "30 min para organizar la casa";
	let descanso = "10 min para descansar";

	console.log("TAREAS");
	for (let i = 0; i < 14; i++) {
		if(i == 0){
			console.groupCollapsed("Semana 1");
		}

		console.groupCollapsed("Día " + (i + 1));
		console.log(trabajar);
		console.log(descanso);
		console.log(estudiar);
		console.log(trabajos);
		console.log(homeWork);
		console.groupEnd();
		if(i == 7){
			console.groupEnd();
			console.groupCollapsed("Semana 2");
		}
	}
	console.groupEnd();
	console.groupEnd();
}

tareas();