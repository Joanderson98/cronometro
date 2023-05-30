var msec = 0
var sec = 0
var min = 0
var hr =0
var interval

function twoD(digito) {
    if(digito < 10){
        return("0" + digito)
    }else{
        return(digito)
    }
}
function iniciar() {
    pausar(); //a função "pausar()" está criando um "clarInterval" na função "iniciar()", assim faz com que a velocidade do cronometro não aumente
    interval= setInterval(relogio, 10)
    
}

function pausar() {
    clearInterval(interval)
}

function parar() {
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById("relog").innerText= "00:00:00:00"
}


function relogio() {
    msec++
    if(msec == 100){
        msec=0
        sec++
        if(sec==60){
            sec=0
            min++
            if(min == 60){
                min=0
                hr++
            }
        }

    }

    document.getElementById("relog").innerText=twoD(hr)+":"+twoD(min)+":"+twoD(sec)+":"+twoD(msec)
}