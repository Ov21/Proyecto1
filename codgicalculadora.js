var pesoUsuario =document.getElementById("pesoUsuario"), botonEnviar =document.getElementById("enviarInfo");
botonEnviar.addEventListener("click", calcularPeso);
var gMercurio ="3.7", gVenus="8.87", gTierra="9.8", gMarte="3.71", gJupiter="24.79", gSaturno="10.44", gUrano="8.69", gNeptuno="11.15", gPluton=".62", gSol="274";

function calcularPeso(pesoFinal)
    {
        var peso =pesoUsuario.value; 

        var resultado =peso * gSol / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaSol").value = pesoFinal + " kg";

        var resultado =peso * gMercurio / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaMercurio").value = pesoFinal + " kg";

        var resultado =peso * gVenus / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaVenus").value = pesoFinal + " kg";

        var resultado =peso * gTierra / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaTierra").value = pesoFinal + " kg";

        var resultado =peso * gMarte / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaMarte").value = pesoFinal + " kg";

        var resultado =peso * gJupiter / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaJupiter").value = pesoFinal + " kg";

        var resultado =peso * gSaturno / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaSaturno").value = pesoFinal + " kg";

        var resultado =peso * gUrano / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaUrano").value = pesoFinal + " kg";

        var resultado =peso * gNeptuno / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaNeptuno").value = pesoFinal + " kg";

        var resultado =peso * gPluton / gTierra, pesoFinal = resultado.toFixed(2);
        document.getElementById("salidaPluton").value =pesoFinal + " kg";
    }