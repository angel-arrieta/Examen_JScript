function calculateMark(nota){
    if(typeof nota != "number"){
        if (nota == 100){
            alert("Tu nota es una A")
        } else{
            alert("El dato introducido no es numero entero")
        }
    } else if (nota < 0 || nota > 100){
        alert("La nota debe estar entre 0 y 100")
    } else if (nota >= 0 && nota <= 59){
        alert("Tu nota es una F")
    } else if (nota >= 60 && nota <= 69){
        alert("Tu nota es una D")
    } else if (nota >= 70 && nota <= 79){
        alert("Tu nota es una C")
    } else if (nota >= 80 && nota <= 89){
        alert("Tu nota es una B") 
    } else if (nota >= 90 && nota <= 100){
        alert("Tu nota es una A")
    }
}

calculateMark(prompt("Dime la nota de tu examen\n(la mínima nota es un 0 y la máxima 100)"))