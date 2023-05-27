var input = document.querySelector("input");
var mensaje = document.getElementById("area-texto");


function encriptar(stringEncriptado) {
    let matrizCodigo = [['e', 'enter'],  ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptado = stringEncriptado.toLowerCase()   
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnEncriptar(){
    var txtEncriptado = encriptar(input.value);
    mensaje.value = txtEncriptado
}

function desencriptar(stringEncriptado) {
    let matrizCodigo = [['e', 'enter'],  ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptado = stringEncriptado.toLowerCase()   
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    var txtEncriptado = desencriptar(input.value);
    mensaje.value = txtEncriptado
}