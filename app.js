let turno = 'X';
let contador = 0;
let ganador;
let puntosX = 0;
let puntosO = 0;
let cuadroUno;
let cuadroDos;
let cuadroTres;
let cuadroCuatro;
let cuadroCinco;
let cuadroSeis;
let cuadroSiete;
let cuadroOcho;
let cuadroNueve;
let jX;
let jO;
let player;
let puntomayor;
        puntomayor = localStorage.getItem('puntos');
        player = localStorage.getItem('nombre');
        record.innerHTML = `Record: ${player} ${puntomayor} Puntos`;
function jugada() {
    contador++      // Cuenta la cantidad de clicks en el tablero para determinar si nadie gano para indicar que haga reset.
    if (contador == 9) {
        indicaciones.innerHTML = 'Presione " RESET "';
    }

    if ( cuadroUno == 'X' & cuadroDos == 'X' & cuadroTres == 'X') {
            document.forms.tateti.a1.value = 'TA'
            document.forms.tateti.a2.value = 'TE'
            document.forms.tateti.a3.value = 'TI'
            document.getElementById('aa1').style.color = 'red';
            document.getElementById('aa2').style.color = 'red';
            document.getElementById('aa3').style.color = 'red';

        // Verificacion linea 1 X
        ganador = 'X'
        
        marcarGanador();

    }else if ( cuadroUno == 'O' & cuadroDos == 'O' & cuadroTres == 'O') {
            document.forms.tateti.a1.value = 'TA'
            document.forms.tateti.a2.value = 'TE'
            document.forms.tateti.a3.value = 'TI'
            document.getElementById('aa1').style.color = 'red';
            document.getElementById('aa2').style.color = 'red';
            document.getElementById('aa3').style.color = 'red';
        // Verificacion linea 1 O
        ganador = 'O'

        marcarGanador();
    }else if ( cuadroCuatro == 'X' & cuadroCinco == 'X' & cuadroSeis == 'X'){
            document.forms.tateti.b1.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.b3.value = 'TI'
            document.getElementById('bb1').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('bb3').style.color = 'red';
        // Verificacion linea 2 X
        ganador = 'X'
        
        marcarGanador();
    }else if ( cuadroCuatro == 'O' & cuadroCinco == 'O' & cuadroSeis == 'O'){
            document.forms.tateti.b1.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.b3.value = 'TI'
            document.getElementById('bb1').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('bb3').style.color = 'red';
        // Verificacion linea 2 O
        ganador = 'O'
        
        marcarGanador();
    }else if ( cuadroSiete == 'X' & cuadroOcho == 'X' & cuadroNueve == 'X'){
            document.forms.tateti.c1.value = 'TA'
            document.forms.tateti.c2.value = 'TE'
            document.forms.tateti.c3.value = 'TI'
            document.getElementById('cc1').style.color = 'red';
            document.getElementById('cc2').style.color = 'red';
            document.getElementById('cc3').style.color = 'red';
        // Verificacion linea 3 X
        ganador = 'X'
        
        marcarGanador();
    }else if ( cuadroSiete == 'O' & cuadroOcho == 'O' & cuadroNueve == 'O'){
            document.forms.tateti.c1.value = 'TA'
            document.forms.tateti.c2.value = 'TE'
            document.forms.tateti.c3.value = 'TI'
            document.getElementById('cc1').style.color = 'red';
            document.getElementById('cc2').style.color = 'red';
            document.getElementById('cc3').style.color = 'red';
        // Verificaciones linea 3 O
        ganador = 'O'
        
        marcarGanador();
    }else if ( cuadroUno == 'X' & cuadroCuatro == 'X' & cuadroSiete == 'X') {
            document.forms.tateti.a1.value = 'TA'
            document.forms.tateti.b1.value = 'TE'
            document.forms.tateti.c1.value = 'TI'
            document.getElementById('aa1').style.color = 'red';
            document.getElementById('bb1').style.color = 'red';
            document.getElementById('cc1').style.color = 'red';
        // Verificacion columna 1 X
        ganador = 'X'
        
        marcarGanador();
    }else if (cuadroUno == 'O' & cuadroCuatro == 'O' & cuadroSiete == 'O') {
            document.forms.tateti.a1.value = 'TA'
            document.forms.tateti.b1.value = 'TE'
            document.forms.tateti.c1.value = 'TI'
            document.getElementById('aa1').style.color = 'red';
            document.getElementById('bb1').style.color = 'red';
            document.getElementById('cc1').style.color = 'red';
        // Verificacion columna 1 O
        ganador = 'O'
        
        marcarGanador();
    }else if (cuadroDos == 'X' & cuadroCinco == 'X' & cuadroOcho == 'X') {
            document.forms.tateti.a2.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.c2.value = 'TI'
            document.getElementById('aa2').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('cc2').style.color = 'red';
        // Verificacion columna 2 X
        ganador = 'X'
        
        marcarGanador();
    }else if (cuadroDos == 'O' & cuadroCinco == 'O' & cuadroOcho == 'O') {
            document.forms.tateti.a2.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.c2.value = 'TI'
            document.getElementById('aa2').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('cc2').style.color = 'red';
        // Verificacion columna 2 O
        ganador = 'O'
        
        marcarGanador();
    }else if (cuadroTres == 'X' & cuadroSeis == 'X' & cuadroNueve == 'X') {
            document.forms.tateti.a3.value = 'TA'
            document.forms.tateti.b3.value = 'TE'
            document.forms.tateti.c3.value = 'TI'
            document.getElementById('aa3').style.color = 'red';
            document.getElementById('bb3').style.color = 'red';
            document.getElementById('cc3').style.color = 'red';
        // Verificacion columna 3 X
        ganador = 'X'
        
        marcarGanador();
    }else if (cuadroTres == 'O' & cuadroSeis == 'O' & cuadroNueve == 'O') {
            document.forms.tateti.a3.value = 'TA'
            document.forms.tateti.b3.value = 'TE'
            document.forms.tateti.c3.value = 'TI'
            document.getElementById('aa3').style.color = 'red';
            document.getElementById('bb3').style.color = 'red';
            document.getElementById('cc3').style.color = 'red';
        // Verificacion columna 3 O
        ganador = 'O'
        
        marcarGanador();
    }else if (cuadroUno == 'X' & cuadroCinco == 'X' & cuadroNueve == 'X') {
            document.forms.tateti.a1.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.c3.value = 'TI'
            document.getElementById('aa1').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('cc3').style.color = 'red';
        // Verificacion diagonal izquierdo X
        ganador = 'X'
        
        marcarGanador();
    }else if (cuadroUno == 'O' & cuadroCinco == 'O' & cuadroNueve == 'O') {
            document.forms.tateti.a1.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.c3.value = 'TI'
            document.getElementById('aa1').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('cc3').style.color = 'red';
        // Verificacion diagonal izquierdo O
        ganador = 'O'
        
        marcarGanador();
    }else if (cuadroTres == 'X' & cuadroCinco == 'X' & cuadroSiete == 'X') {
            document.forms.tateti.a3.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.c1.value = 'TI'
            document.getElementById('aa3').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('cc1').style.color = 'red';
        // Verificacion diagonal derecho X
        ganador = 'X'
        
        marcarGanador();
    }else if (cuadroTres == 'O' & cuadroCinco == 'O' & cuadroSiete == 'O') {
            document.forms.tateti.a3.value = 'TA'
            document.forms.tateti.b2.value = 'TE'
            document.forms.tateti.c1.value = 'TI'
            document.getElementById('aa3').style.color = 'red';
            document.getElementById('bb2').style.color = 'red';
            document.getElementById('cc1').style.color = 'red';
        // Verificacion diagonal derecho O
        ganador = 'O'
        
        marcarGanador();
    }
}

function marcarGanador() {
        cuadroUno = 0;
        cuadroDos = 0;
        cuadroTres = 0;
        cuadroCuatro = 0;
        cuadroCinco = 0;
        cuadroSeis = 0;
        cuadroSiete = 0;
        cuadroOcho = 0;
        cuadroNueve = 0;
        contador = 0;
        
            if ( ganador == 'X') {
                ganador = '';
                puntosX++
                puntuacionX.innerHTML = puntosX
                indicaciones.innerHTML = `Punto para ${jX}, Precione "Reset" para seguir jugando`
            }else {
                ganador = '';
                puntosO++
                puntuacionO.innerHTML = puntosO;
                indicaciones.innerHTML = `Punto para ${jO}, Precione "Reset" para seguir jugando`
            }
}

function reiniciar() {
    document.forms.tateti.a1.value = '';
    document.forms.tateti.a2.value = '';
    document.forms.tateti.a3.value = '';
        document.getElementById('aa1').style.color = 'black';
        document.getElementById('aa2').style.color = 'black';
        document.getElementById('aa3').style.color = 'black';

    document.forms.tateti.b1.value = '';
    document.forms.tateti.b2.value = '';
    document.forms.tateti.b3.value = '';
        document.getElementById('bb1').style.color = 'black';
        document.getElementById('bb2').style.color = 'black';
        document.getElementById('bb3').style.color = 'black';

    document.forms.tateti.c1.value = '';
    document.forms.tateti.c2.value = '';
    document.forms.tateti.c3.value = '';
        document.getElementById('cc1').style.color = 'black';
        document.getElementById('cc2').style.color = 'black';
        document.getElementById('cc3').style.color = 'black';

        cuadroUno = 0;
        cuadroDos = 0;
        cuadroTres = 0;
        cuadroCuatro = 0;
        cuadroCinco = 0;
        cuadroSeis = 0;
        cuadroSiete = 0;
        cuadroOcho = 0;
        cuadroNueve = 0;
        contador = 0;
        indicaciones.innerHTML = '';
}

function nuevo() {
        ganador = '';
        puntosX = 0;
        puntuacionX.innerHTML = 0;
        puntosO = 0;
        puntuacionO.innerHTML = 0;
    reiniciar()       
}

function nombre(){
        jX = document.getElementById('jugador1').value;
    jugadorUno.innerHTML = jX;
        jO = document.getElementById('jugador2').value;
    jugadorDos.innerHTML = jO;    
    document.getElementById('nombreS').style.display = "none";
}


function finaliza() {
    if ( puntosX > puntosO) {
        puntomayor = localStorage.getItem('puntos');
        if( puntosX > puntomayor) {
            localStorage.setItem('nombre', jX);
            localStorage.setItem('puntos', puntosX);
        puntomayor = localStorage.getItem('puntos');
        player = localStorage.getItem('nombre');
        record.innerHTML = `Record: ${player}  ${puntomayor} Puntos`
        }
    }else {
        puntomayor = localStorage.getItem('puntos');
        if( puntosO > puntomayor) {
            localStorage.setItem('nombre',jO);
            localStorage.setItem('puntos',puntosO);
        puntomayor = localStorage.getItem('puntos');
        player = localStorage.getItem('nombre');
        record.innerHTML = `Record: ${player}  ${puntomayor} Puntos`
        }
    }
    location.href = 'index.html';
}
