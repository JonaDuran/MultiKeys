// carga las variables
function load() {
    
    // arreglo de elementos, cada uno corresponde al id de una <figure/>
    key = [up, down, left, right, keyI, keyO, keyP, keyK, keyL, keyN];
    
    // arreglo para almacenar que tecla se está precionando
    down = [key.length];
    down.fill(false);
    
    // colores de las teclas
    backgroundDown = "#ccc";
    backgroundUp = "#eee";
    
    change();
}

// actualiza el color de las teclas
function change() {
    for(x = 0; x < key.length; x++) {
        if(down[x] === true)
            key[x].style.background = backgroundDown;
        else
            key[x].style.background = backgroundUp;
    }
}

// retorna la posición respectiva a la tecla en el down[]
function charKey(char) {
    switch (char){
        case "W": return 0;
        case "S": return 1;
        case "A": return 2;
        case "D": return 3;
        case "I": return 4;
        case "O": return 5;
        case "P": return 6;
        case "K": return 7;
        case "L": return 8;
        case "º": return 9;  // Ñ teclado español
        case "À": return 9;  // Ñ teclado latinoamérica
    }
}

// lee la tecla presionada
function keyDown(evt) {
    var key = String.fromCharCode(evt.keyCode); 
    down[charKey(key)] = true;
    console.log(key);
    change();
}

// lee la tecla que se dejó de presionar
function keyUp(evt){
    var key = String.fromCharCode(evt.keyCode);
    down[charKey(key)] = false;
    change();
}


/* se asignan las funciones a los eventos */

window.onkeydown = keyDown;     // cuando se preciona una tecla

window.onkeyup = keyUp;         // cuando se deja de precionar una tecla

window.onload = load;           // cuando se termina de cargar la página