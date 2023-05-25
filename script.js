const text = document.getElementById("text");

function agregar_value(value_button) {
    if (text.value == "0") {
        text.value = ""
        text.value += value_button
    } else {
        text.value += value_button
    }
    
}

function reiniciar() {
    text.value = "0"
}

function evaluar() {
    try {
        text.value = eval(text.value)
    } catch (error) {
        text.value = "¡ERROR!"
    }   
}

function eliminar_uno() {
    if (text.value.length == 1) {
        text.value = "0"
    } else {
        text.value = text.value.slice(0, -1)
    }
    
}