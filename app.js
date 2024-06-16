function encriptar() {
    let texto = document.getElementById('texto-encriptar').value;
    if (texto == "") {
        alert("vacio");
        return;
    } else {
        let texto_encriptado = "";
        // Recorrer cada carácter del texto para encriptarlo
        for (let i = 0; i < texto.length; i++) {
            let letra_encriptada = "";
            // Reemplazar cada vocal según las reglas de encriptación
            switch (texto.charAt(i)) {
                case 'a':
                    letra_encriptada = "ai";
                    break;
                case 'e':
                    letra_encriptada = "enter";
                    break;
                case 'i':
                    letra_encriptada = "imes";
                    break;
                case 'o':
                    letra_encriptada = "ober";
                    break;
                case 'u':
                    letra_encriptada = "ufat";
                    break;
                default:
                    letra_encriptada = texto.charAt(i);
                    break;
            }
            texto_encriptado += letra_encriptada;
        }
        console.log(texto_encriptado);
        let resultado = document.querySelector('#texto-encriptado');
        resultado.innerHTML = texto_encriptado;
        condicionesResultado();
    }
}

function desencriptar() {
    let encriptado = document.getElementById('texto-encriptar').value;
    console.log(encriptado);
    // Reemplazar cada patrón encriptado por su correspondiente vocal
    let desencriptado = encriptado.replace(/ai/g, 'a');
    desencriptado = desencriptado.replace(/enter/g, 'e');
    desencriptado = desencriptado.replace(/imes/g, 'i');
    desencriptado = desencriptado.replace(/ober/g, 'o');
    desencriptado = desencriptado.replace(/ufat/g, 'u');
    let resultado_desencriptado = document.querySelector('#texto-encriptado');
    resultado_desencriptado.innerHTML = desencriptado;
    condicionesResultado();
}

function copiarTexto() {
    let copiado = document.getElementById('texto-encriptado').value;
    navigator.clipboard.writeText(copiado);
    alert("¡Texto Copiado!");
    return;
}

function validarTexto() {
    let texto_encriptar = document.getElementById('texto-encriptar').value;
    let caraterIngresado = texto_encriptar.charAt(texto_encriptar.length - 1);
    // Verificar si el carácter ingresado es una mayúscula
    if (/[A-Z]/.test(caraterIngresado)) {
        alert("¡Recuarda, No debes ingresar mayúsculas!");
        document.getElementById('texto-encriptar').value = texto_encriptar.slice(0, -1);
    }
    // Verificar si el carácter ingresado tiene tilde
    if (/[áéíóúÁÉÍÓÚ]/.test(caraterIngresado)) {
        alert("¡Ops, debes ingresar el texto Sin tildes!");
        document.getElementById('texto-encriptar').value = texto_encriptar.slice(0, -1);
    }
}

function condicionesResultado() {
    document.getElementById('texto-encriptado').removeAttribute('hidden');
    document.getElementById('boton-copiar').removeAttribute('hidden');
    document.getElementById('imagen-mensaje').style.display = 'none';
}
