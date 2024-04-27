//Variable de punteo
var punteo = 0;
//Varibale de número de pregunta actual
var nPregunta = 0;
var pT;
//var inputs;
var respuesta;
//Objeto de preguntas y respuestas
var preguntas = {
    pregunta1:
    {
        pregunta: "1. ¿Cuál es el océano más grande del mundo?",
        respuesta: "a. El océano Pacífico",
        respuesta1: "a. El océano Pacífico",
        respuesta2: "b.	El océano Atlántico",
        respuesta3: "c.	El océano Ártico"
    },
    pregunta2:
    {
        pregunta: "2. ¿Cuántos huesos hay en el cuerpo humano?",

        respuesta: "c.	206",
        respuesta1: "a.	202",
        respuesta2: "b.	209",
        respuesta3: "c.	206"
    },

    pregunta3:
    {
        pregunta: "3. ¿Cuál es el país más grande del mundo?",
        respuesta: "b.	Rusia",
        respuesta1: "a.	China",
        respuesta2: "b.	Rusia",
        respuesta3: "c.	Estados Unidos"

    },
    pregunta4:
    {
        pregunta: "4. ¿Qué planeta se encuentra más cercano al sol?",
        respuesta: "a.	Mercurio",
        respuesta1: "a.	Mercurio",
        respuesta2: "b.	La Tierra",
        respuesta3: "c.	Venus"

    },
    pregunta5:
    {
        pregunta: "5. ¿Cuántas cuerdas tiene un violín? ",
        respuesta: "a.	4 cuerdas",
        respuesta1: "a.	4 cuerdas",
        respuesta2: "b.	5 cuerdas",
        respuesta3: "c.	3 cuerdas"

    },
    pregunta6:
    {
        pregunta: "6. ¿En qué año acabó la segunda guerra mundial?",
        respuesta: "b.	1945",
        respuesta1: "a.	1940",
        respuesta2: "b.	1945",
        respuesta3: "c.	1950"

    },
    pregunta7:
    {
        pregunta: "7. ¿Cuál es la montaña más alta del planeta?",
        respuesta: "c.	Monte Everest",
        respuesta1: "a.	Kachenjunga",
        respuesta2: "b.	K2",
        respuesta3: "c.	Monte Everest"
    },
    pregunta8:
    {
        pregunta: "8. ¿Cuántos elementos hay en la tabla periódica?",
        respuesta: "a.	118",
        respuesta1: "a.	118",
        respuesta2: "b.	120",
        respuesta3: "c.	110"
    },
    pregunta9:
    {
        pregunta: "9. ¿Cuántos lados tiene un heptadecagono ?",
        respuesta: "b.	17 lados",
        respuesta1: "a.	18 lados",
        respuesta2: "b.	17 lados",
        respuesta3: "c.	19 lados"
    },
    pregunta10:
    {
        pregunta: "10. ¿Quién inventó la bombilla?",
        respuesta: "b.	Thomas Edison",
        respuesta1: "a.	Isaac Newton",
        respuesta2: "b.	Thomas Edison",
        respuesta3: "c.	Albert Einstein"
    },

}



//Funcion mostrar() Muestra las preguntas en pantalla
var pregunta = document.getElementById('pregunta');
var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
function mostrar() {
    console.log("Valor de pregunta: " + nPregunta);
    pregunta.textContent = preguntas['pregunta' + nPregunta].pregunta;
    input = document.querySelectorAll("input");
    input.forEach(function (input) {
        input.style.visibility = "visible";
        input.checked = "false;"
    });
    r1.textContent = preguntas['pregunta' + nPregunta].respuesta1;
    r2.textContent = preguntas['pregunta' + nPregunta].respuesta2;
    r3.textContent = preguntas['pregunta' + nPregunta].respuesta3;
}

function enviar() {
    /* respuesta = document.querySelector('input[name=pregunta'+nPregunta+']:checked').value; */

    respuesta = document.querySelector('input[name=pregunta]:checked').value
    console.log(preguntas['pregunta' + nPregunta].respuesta[0]);
    if (respuesta !== "" & respuesta == preguntas['pregunta' + nPregunta].respuesta[0]) {
        
        preguntas['pregunta' + nPregunta].rS = validarR();
        punteo  += 10;
        console.log("Punteo es: "+ punteo);
       
    }
    else {
        preguntas['pregunta' + nPregunta].rS = validarR();
        console.log(preguntas['pregunta' + nPregunta]);
        console.log("Pregunta al validar respuesta incorrecta" + nPregunta)
        console.log(validarR());
    }

    vPreguntas();
}

function vPreguntas() {
   
    
    let key = Object.keys(preguntas);
    pT = key.length;
    console.log("Lenght: " + pT);

    if (nPregunta < pT) {
        nPregunta = nPregunta + 1; 
        console.log(nPregunta);
        if(nPregunta > 1 ){
            remover("p"); 
        }
        mostrar();
    }
    
    else{
        if(nPregunta == pT){
        document.getElementById("siguiente").disabled = "true";
        console.log("diez preguntas: " + nPregunta);
        fin();
    }
    
    }
}
    /* if (nPregunta <= (pT - 1)) {
        nPregunta = nPregunta + 1;
        if (nPregunta === pT){
        console.log(nPregunta);
        mostrar();
    }
    else{
        document.getElementById("siguiente").visibility = "hidden";
    }
    }
    else {
        console.log(nPregunta);
    } */
    /* Necesito desaparecer mis input, agregar un h3 para presentar el punteo y agregar el botón de regresar
}
*/

//Valida la respuesta del usuario
function validarR() {
    var respuestaS;
    /*     var respuestaR = document.querySelector('input[name=pregunta'+nPregunta+']:checked').value; */
    var respuestaR = document.querySelector('input[name=pregunta]:checked').value;
    console.log("Respuesta seleccionada" + respuestaR);
    for (let p in preguntas['pregunta' + nPregunta]) {

        if (preguntas['pregunta' + nPregunta][p][0] === respuestaR) {
            respuestaS = preguntas['pregunta' + nPregunta][p]
            return respuestaS
        }

    }
}

 function validarN(){
    var pregunta = document.getElementById('pregunta');
    pregunta.textContent = "Felicidades, has constestado las diez preguntas.";
    //pregunta.appendChild = <h3>"El punteo obtenido es: " +punteo </h3>;
   /*  if (nPregunta !== pT){
        nPregunta +=1;
    } else{
        console.log("...")
        
        document.getElementById("siguiente").disabled = "true";
    } */
} 


function fin(){
    remover("label");
    remover("input");
    remover("br");
    remover("button");
    var pregunta = document.getElementById('pregunta');
    pregunta.textContent = "Felicidades, has constestado las diez preguntas.";
    var preguntas = document.getElementById('preguntas');
    var preguntaElement = document.createElement('h3');
    preguntaElement.textContent = "El punteo obtenido es: " + punteo;
    preguntas.appendChild(preguntaElement);
    var resultados = document.getElementById('preguntas');
    var resultado = document.createElement('button');
    resultado.textContent = "Mostrar resultados";
    resultados.appendChild(resultado);/* 
resultado.addEventListener("onClick", "resultados()"); */
document.querySelector("button").addEventListener("click", mostrarResultados) 
} 


function remover(selector){
    var elemento = document.querySelectorAll(selector);
    elemento.forEach(function (elemento){
        elemento.remove();
    });
}

function mostrarResultados() {
    var resultados = document.getElementById('preguntas');
    var rDiv = document.createElement('div');
    rDiv.setAttribute("id", "r");
    resultados.appendChild(rDiv); 

    for (var key in preguntas) {
        if (preguntas.hasOwnProperty(key)) {
            var pregunta = preguntas[key];

            var preguntaElement = document.createElement('h2');
            preguntaElement.textContent = pregunta.pregunta;
            rDiv.appendChild(preguntaElement);

            if(pregunta.rS == pregunta.respuesta){
            var respuestaElement = document.createElement('h3');
            respuestaElement.textContent = preguntas[key].respuesta;
            rDiv.appendChild(respuestaElement)
            respuestaElement.style.color = "green";
                } 
                else{
                    var respuestaCorrecta = document.createElement('h3');
                    respuestaCorrecta.textContent= "Respuesta correcta: " + preguntas[key].respuesta;
                    rDiv.appendChild(respuestaCorrecta);
                    respuestaCorrecta.style.color = "green";
                    var respuestaIncorrecta= document.createElement('h3');
                    respuestaIncorrecta.textContent = "Respuesta incorrecta: "+ preguntas[key].rS;
                    rDiv.appendChild(respuestaIncorrecta);
                    respuestaIncorrecta.style.color = "red";
                }
            // Iterar sobre las respuestas
           // for (var i = 1; i <= 3; i++) {
               // var respuestaKey = 'respuesta' + i;
                //if (pregunta.hasOwnProperty(respuestaKey)) {
                   /*  var respuestaElement = document.createElement('h3');
                    respuestaElement.textContent = pregunta[key].respuesta + "Check";
                    rDiv.appendChild(respuestaElement);
            // } */
           //}
        }
    }
}


function resultadoC(elemento){
    for(var i = 1; i <= key.length; i++){
        if(preguntas.i.rS == preguntas.i.respuesta){
            var respuestaElement = document.createElement('h3');
                respuestaElement.textContent = pregunta[i].respuesta;
                    elemento.appendChild(respuestaElement);
        } 
    }
}
/* function mostrarResultados(){
    var resultados = document.getElementById('preguntas');
    var rDiv = document.createElement('div');
    rDiv.setAttribute("id", "r")
    resultados.appendChild(rDiv); 

for (var key in preguntas) {
    if (preguntas.hasOwnProperty(key)) {
        var r= document.getElementById('r');
        var resultElement = document.createElement('h2');
        resultElement.textContent = preguntas[key].pregunta;
        r.appendChild(resultElement);


        for (var i = 1; i <= 3; i++) {
            var respuestaKey = 'respuesta' + i;
            if (preguntas[key].hasOwnProperty(respuestaKey)) {
                var result = document.createElement('h3');
                result.textContent = preguntas[key][respuestaKey];
                rDiv.appendChild(result);

       /*  var result = document.createElement('h3');
                result.textContent = preguntas[key].respuesta;
                r.appendChild(result); */
       /*  for (var k in preguntas[key]) {
            if (preguntas[key].hasOwnProperty(k)) {
                var result = document.createElement('h3');
                result.textContent = preguntas[key].k;
                r.appendChild(result);
            } 
        }
        }
    } */

