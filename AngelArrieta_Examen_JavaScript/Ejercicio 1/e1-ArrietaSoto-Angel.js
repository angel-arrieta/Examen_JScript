const abcNormal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const abcRotado = ["k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j"]

const inputUsuario = prompt("Introduce una cadena de caracteres para cifrar")
let traduccion = ""
let cadenaDesglosada = []
let inputTraducido = []

for (i in inputUsuario){
    cadenaDesglosada.push(inputUsuario[i])
}

for (i in cadenaDesglosada){
    if (abcNormal.includes(cadenaDesglosada[i].toLowerCase())){
        const comparador = (element) => element === cadenaDesglosada[i].toLowerCase()
        const indiceParalelo = abcNormal.findIndex(comparador)
        const letraTraducida = abcRotado[indiceParalelo]
        if (cadenaDesglosada[i] === cadenaDesglosada[i].toUpperCase()){
            inputTraducido.push(letraTraducida.toUpperCase())
        } else {
            inputTraducido.push(letraTraducida.toLowerCase())
        }
    }else{
        inputTraducido.push(cadenaDesglosada[i])
    }
}

for (i in inputTraducido){
    traduccion += inputTraducido[i]
}

alert(' "' + inputUsuario + " - " + traduccion + '" ')