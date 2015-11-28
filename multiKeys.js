/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function load(){
    key = [up, down, left, right, keyI, keyO, keyP, keyK, keyL, keyN];
    down = [key.length];
    
    fondoDown = "#ccc";
    fondoUp = "#eee";
    
    for(x = 0; x < key.length; x++)
        down[x] = false;
    change();
}

function change(){
    for(x = 0; x < key.length; x++){
        if(down[x] === true)
            key[x].style.background = fondoDown;
        else
            key[x].style.background = fondoUp;
    }
}

function charKey(char){
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
        case "º": return 9; // Ñ
    }
}

function keyDown(evt){
    var key = String.fromCharCode(evt.keyCode);
    down[charKey(key)] = true;
    change();
    //alert (key);
}

function keyUp(evt){
    var key = String.fromCharCode(evt.keyCode);
    down[charKey(key)] = false;
    change();
}

window.onkeydown = keyDown;

window.onkeyup = keyUp;

window.onload = load;